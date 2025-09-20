import { Link } from "react-router-dom";
import Avatar from "avataaars";

export default function About() {
  return (
    <div className="p-10 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">
        About Human Clone
      </h2>

      {/* Avatar Preview */}
      <div className="relative w-64 h-64 mb-6">
        <Avatar
          style={{ width: "100%", height: "100%" }}
          avatarStyle="Transparent"
          topType="Hat"
          accessoriesType="Blank"
          hairColor="BrownDark"
          facialHairType="BeardLight"
          clotheType="Hoodie"
          eyeType="Wink"
          eyebrowType="UpDownNatural"
          mouthType="Smile"
          skinColor="Light"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl text-center mb-8">
        Human Clone is an experimental project that lets you create your own digital avatar and interact with it. Customize your avatar, chat with your clone, and explore a fun, interactive digital world! 🤖🎨💬
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-center">
        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
          <span className="text-3xl mb-2 block">🎨</span>
          <h3 className="font-bold mb-1">Customize Avatar</h3>
          <p className="text-gray-600 text-sm">Pick hair, eyes, clothes, and more to make your digital self unique.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
          <span className="text-3xl mb-2 block">💬</span>
          <h3 className="font-bold mb-1">Chat & Interact</h3>
          <p className="text-gray-600 text-sm">Talk to your avatar and experience realistic AI conversations.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
          <span className="text-3xl mb-2 block">💾</span>
          <h3 className="font-bold mb-1">Save & Share</h3>
          <p className="text-gray-600 text-sm">Save your avatar or share it with friends online.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/avatar"
          className="px-6 py-3 gradient-bg text-white rounded-full font-bold hover:bg-purple-800 transition"
        >
          🛠 Build Your Avatar
        </Link>
        <Link
          to="/chat"
          className="px-6 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition"
        >
          💬 Chat Now
        </Link>
      </div>
    </div>
  );
}
