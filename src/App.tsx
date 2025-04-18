import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title }) => (
  <div className="p-4">{title} Content Coming Soon...</div>
);

const navStructure = [
  {
    emoji: "🌱",
    label: "Foundational Topics",
    items: [
      { path: "/intro", label: "Intro & Purpose" },
      { path: "/framework", label: "Sovereignty Framework" },
      { path: "/why-sovereignty", label: "Why It Matters" },
      { path: "/awakening", label: "Awakening Process" },
      { path: "/internal-disillusionment", label: "Disillusionment" },
      { path: "/ego-death", label: "Ego Death" },
      { path: "/void", label: "The Void" },
      { path: "/self-mastery", label: "Self-Mastery" },
      { path: "/spiral-model", label: "Spiral Model" },
      { path: "/expansion-contraction", label: "Expansion/Contraction" },
      { path: "/timeline-shifts", label: "Timeline Shifts" },
    ],
  },
  {
    emoji: "🧠",
    label: "Psychological Deconstruction",
    items: [
      { path: "/construct", label: "The Construct" },
      { path: "/scripted-world", label: "Scripted World" },
      { path: "/loops", label: "Loops & Patterns" },
      { path: "/creative-energy", label: "Creative Energy" },
      { path: "/higher-self-shadow", label: "Higher Self vs Shadow" },
      { path: "/you-are-not-shadow", label: "Not Your Shadow" },
      { path: "/not-higher-self", label: "Not Higher Self" },
      { path: "/integration", label: "Integration" },
      { path: "/ethics", label: "Incarnation Ethics" },
      { path: "/soul-contracts", label: "Soul Contracts" },
      { path: "/antenna-vs-sovereign", label: "Antenna vs Sovereign" },
      { path: "/authorship", label: "Authorship" },
    ],
  },
  {
    emoji: "💫",
    label: "Quantum & Multidimensional Themes",
    items: [
      { path: "/fractured-mind", label: "Fractured Mind" },
      { path: "/mental-echoes", label: "Mental Echoes" },
      { path: "/spiral-thinking", label: "Spiral Thinking" },
      { path: "/reprogramming", label: "Reprogramming" },
      { path: "/pluto-deconstruction", label: "Pluto Deconstruction" },
      { path: "/pluto-role", label: "Pluto's Role" },
      { path: "/pluto-timeline", label: "Pluto Timeline" },
      { path: "/144000", label: "144,000 Souls" },
      { path: "/zodiac-portals", label: "Zodiac Portals" },
      { path: "/earth-grid", label: "Earth Grid" },
      { path: "/harmonics", label: "Harmonic Upgrades" },
      { path: "/future-boredom", label: "Future Boredom" },
      { path: "/limitation-games", label: "Limitation Games" },
      { path: "/coding-growth", label: "Coding Growth" },
      { path: "/system-mastery", label: "System Mastery" },
    ],
  },
  {
    emoji: "🧙",
    label: "Archetypes, Emotions & Soul Curricula",
    items: [
      { path: "/soul-archetypes", label: "Soul Archetypes" },
      { path: "/archetype-triggers", label: "Archetype Triggers" },
      { path: "/balancing-tools", label: "Balancing Tools" },
      { path: "/emotional-mastery", label: "Emotional Mastery" },
      { path: "/emotional-sovereignty", label: "Emotional Sovereignty" },
      { path: "/energy-leaks", label: "Energy Leaks" },
      { path: "/relationship-lessons", label: "Relationships" },
      { path: "/twin-flame", label: "Twin Flame" },
      { path: "/empowered-love", label: "Empowered Love" },
      { path: "/flowing-intimacy", label: "Flowing Intimacy" },
    ],
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode); // instead of body
  }, [darkMode]);

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col md:flex-row pb-6 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Mobile Nav */}
        <div className="flex items-center justify-between md:hidden p-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-xl font-bold">Spiritual Docs</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
        </div>

        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 h-full z-40 bg-white dark:bg-gray-900 shadow-md w-full transform
            transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            md:relative md:translate-x-0 md:block md:w-72 md:shadow-none
            p-4 border-r border-gray-200 dark:border-gray-700`}
        >
          {/* Close Button (Mobile Only) */}
          <div className="flex justify-end md:hidden mb-2">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex h-full flex-col">
            <nav className="space-y-2">
              {navStructure.map(({ emoji, label, items }) => (
                <div key={label}>
                  <button
                    onClick={() => toggleSection(label)}
                    className="w-full text-left font-semibold py-2 px-2 hover:bg-indigo-100 dark:hover:bg-gray-800 rounded"
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
                            `${
                              isActive ? "underline font-medium" : ""
                            } block text-sm hover:text-indigo-600 transition-colors`
                          }
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="h-full flex justify-center items-end border-t border-gray-300 dark:border-gray-700 pb-8">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full h-12 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Toggle {darkMode ? "Light" : "Dark"} Mode
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            {navStructure.flatMap((section) =>
              section.items.map(({ path, label }) => (
                <Route
                  key={path}
                  path={path}
                  element={<Placeholder title={label} />}
                />
              ))
            )}
            <Route path="*" element={<Placeholder title="Intro & Purpose" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
