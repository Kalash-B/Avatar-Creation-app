import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Define your custom instruction (acts like system prompt)
const friendPrompt = `
You are my student. Talk respectfully, be supportive, and use Hinglish sometimes.
Do not sound too robotic. Keep replies short and informative. Give suggestion to improve teaching.
`;

// ✅ Helper function to safely call Gemini with retry
async function safeSendMessage(chat, message, retries = 3, delay = 3000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await chat.sendMessage(message);
      return result.response.text();
    } catch (err) {
      if (err.status === 503 && attempt < retries) {
        console.warn(`⚠️ Gemini overloaded. Retrying in ${delay / 1000}s... (Attempt ${attempt})`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        throw err;
      }
    }
  }
}

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Start chat with history that includes your custom instruction
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: friendPrompt }],
        },
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const botReply = await safeSendMessage(chat, userMessage);

    res.json({ reply: botReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
