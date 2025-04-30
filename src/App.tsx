import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import SpiritualSovereignty from "./components/topics/SpiritualSovereignty";
import AwakeningJourney from "./components/topics/AwakeningJourney";

// Define props interface for TypeScript
interface PlaceholderProps {
  title: string;
}

// Type the functional component using React.FC
const Placeholder: React.FC<PlaceholderProps> = ({ title }) => (
  <div className="p-4">{title} Content Coming Soon...</div>
);


const navStructure = [
  {
    emoji: "🌟",
    label: "Foundational Topics",
    items: [
      { path: "/awakening-journey", label: "Awakening Journey", component: <AwakeningJourney /> },
      { path: "/non-linear-living", label: "Non-Linear Living", component: <SpiritualSovereignty /> },
      { path: "/sovereignty", label: "Sovereignty", component: <SpiritualSovereignty /> },
      { path: "/ascended-master-path", label: "Ascended Master Path", component: <SpiritualSovereignty /> },
      { path: "/energy-leadership", label: "Leading Through Energy", component: <SpiritualSovereignty /> },
      { path: "/spiritual-technology", label: "Spiritual Technology", component: <SpiritualSovereignty /> },
      { path: "/evolved-community", label: "Frequency of Community", component: <SpiritualSovereignty /> },
      { path: "/healing-blueprint", label: "Healing the Inner Blueprint", component: <SpiritualSovereignty /> },
      { path: "/soul-missions", label: "Soul Missions", component: <SpiritualSovereignty /> },
      { path: "/game-mastery", label: "Mastery Over the Game", component: <SpiritualSovereignty /> },
    ],
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark/light class to the body for global styles (like scrollbar or text selection)
    document.body.classList.toggle("dark", darkMode);
    // We will manage sidebar colors directly using classes on the sidebar element itself
  }, [darkMode]);

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  return (
    <Router>
      {/* Apply dark mode classes directly to the main container */}
      <div
        className={`h-screen overflow-y-auto md:overflow-y-hidden flex flex-col md:flex-row pb-6 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden p-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-xl font-bold">Spiritual Docs</h1>
          {/* Mobile menu toggle button - ensure text color works in dark mode */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 dark:text-gray-600 text-xl focus:outline-none" // Explicit text colors
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 h-screen z-40 w-full transform
            transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            md:relative md:translate-x-0 md:block md:w-72 md:shadow-none
            p-4 border-r
            ${
              darkMode
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-white text-gray-900 border-gray-200"
            }
            overflow-y-auto
          `}
        >
          {/* Close Button (Mobile Only) - ensure text color works in dark mode */}
          <div className="flex justify-between align-center md:hidden mb-6">
          <h1 className="text-xl font-bold">Spiritual Docs</h1>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 dark:text-gray-600 hover:text-red-500 text-xl focus:outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="flex h-full flex-col">
            {/* Navigation links container - ensure text color inherits */}
            <nav className="space-y-2 flex-1">
              {" "}
              {/* Added flex-1 to push toggle to bottom */}
              {navStructure.map(({ emoji, label, items }) => (
                <div key={label}>
                  {/* Section Header Button - ensure text color and hover/focus work in dark mode */}
                  <button
                    onClick={() => toggleSection(label)}
                    className={`w-full text-left font-semibold py-2 px-2 rounded focus:outline-none
                      ${
                        darkMode
                          ? "hover:bg-gray-800 text-white"
                          : "hover:bg-indigo-100 text-gray-900"
                      }
                    `}
                  >
                    {emoji} {label}
                  </button>
                  {openSection === label && (
                    <div className="pl-4 mt-1 space-y-1">
                      {items.map(({ path, label }) => (
                        <NavLink
                          key={path}
                          to={path}
                          className={({ isActive }) =>
                            `block text-sm hover:text-indigo-600 transition-colors py-1 px-2 rounded
                            ${
                              isActive
                                ? "underline font-medium text-indigo-600" // Active state color
                                : darkMode
                                ? "text-gray-300 hover:text-indigo-400"
                                : "text-gray-700 hover:text-indigo-600" // Default & Hover state colors
                            }
                            `
                          }
                          onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                        >
                          {label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* Toggle button container - ensure positioning and styling are correct */}
            <div className="mt-auto pt-4 border-t border-gray-300 dark:border-gray-700">
              {" "}
              {/* mt-auto pushes it to the bottom */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full h-12 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition focus:outline-none"
              >
                Toggle {darkMode ? "Light" : "Dark"} Mode
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-scroll p-4 h-auto md:h-screen">
          <Routes>
            {navStructure.flatMap((section) =>
              section.items.map(({ path, label, component }) => (
                <Route
                  key={path}
                  path={path}
                  element={component || <Placeholder title={label} />}
                />
              ))
            )}
            {/* Default route for the root path */}
            <Route path="/" element={<Placeholder title="Intro & Purpose" />} />
            {/* Fallback route for any other path */}
            <Route path="*" element={<Placeholder title="Intro & Purpose" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
