import { useState, useRef, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { AvatarContext } from "../context/AvatarContext";
import Avatar from "avataaars";


export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I’m your clone. How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const { avatarConfig } = useContext(AvatarContext);


  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "you", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = { sender: "bot", text: data.reply };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server" }
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 pt-3"
      style={{ height: "calc(100vh - 200px)" }}>
      <h2 className="text-3xl font-extrabold mb-4 text-gray-800">💬 Chat with Me</h2>

      {avatarConfig && (
        <div className="flex justify-center mb-4">
          <Avatar
            style={{ width: "120px", height: "120px" }}
            {...avatarConfig}
          />
        </div>
      )}

      {/* Chat Container with full height minus navbar */}
      <div className="w-full max-w-3xl flex flex-col border border-gray-300 bg-white shadow-lg rounded-2xl overflow-hidden"
        style={{ height: "calc(100vh - 200px)" }}>

        {/* Messages Area */}
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 p-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === "you" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-4 py-2 rounded-2xl shadow-sm text-lg max-w-[75%] ${m.sender === "you"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
              >
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="flex gap-2 p-3 border-t border-gray-200">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
