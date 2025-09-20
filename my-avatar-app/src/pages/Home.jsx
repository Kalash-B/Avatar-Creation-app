import { Link } from "react-router-dom";
import { MessageCircle, UserCircle2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="font-display bg-background text-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-dark/10 -z-10" />

        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Welcome to Human Clone
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Build your personalized avatar, chat with it like a real person, and explore endless possibilities.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/avatar"
            className="px-6 py-3 text-white gradient-bg rounded-full font-bold shadow-soft-lg hover:shadow-xl transition-all"
          >
            Build Avatar
          </Link>
          <Link
            to="/chat"
            className="px-6 py-3 text-primary-dark bg-white rounded-full font-bold border border-gray-200 shadow-soft hover:bg-gray-50 transition-all"
          >
            Start Chat
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use Human Clone?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl shadow-soft bg-background flex flex-col items-center text-center">
            <UserCircle2 className="w-12 h-12 text-primary-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Avatars</h3>
            <p className="text-gray-600">
              Create lifelike avatars with hairstyles, clothes, and features that match your imagination.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-soft bg-background flex flex-col items-center text-center">
            <MessageCircle className="w-12 h-12 text-primary-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Chat</h3>
            <p className="text-gray-600">
              Talk to your avatar in real-time. Experience engaging and natural conversations.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-soft bg-background flex flex-col items-center text-center">
            <Sparkles className="w-12 h-12 text-primary-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fun & Creative</h3>
            <p className="text-gray-600">
              Use avatars for role-play, storytelling, or just having fun with friends online.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} Human Clone. All rights reserved.
      </footer>
    </div>
  );
}
