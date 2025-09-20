import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClasses =
    "hover:text-primary-dark font-bold transition-colors font-medium";

  const activeClasses = "font-bold text-primary-dark";

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-soft bg-white/80 backdrop-blur-sm sticky top-0 z-50 font-display">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full gradient-bg text-white">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-primary-darker">Human Clone</h1>
      </div>

      {/* Links */}
      <nav className="hidden md:flex items-center gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-600"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/avatar"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-600"}`
          }
        >
          Build Avatar
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-600"}`
          }
        >
          Chat
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-600"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${navLinkClasses} ${isActive ? activeClasses : "text-gray-600"}`
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2.5 text-sm font-bold text-primary-darker bg-white border border-gray-200 rounded-full shadow-soft hover:bg-gray-50 transition-all">
          Login
        </button>
        <button className="px-5 py-2.5 text-sm font-bold text-white gradient-bg rounded-full shadow-soft-lg hover:shadow-xl transition-all">
          Sign Up
        </button>
      </div>
    </header>
  );
}
