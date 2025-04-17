import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title }) => <div>{title} Content Coming Soon...</div>;

const sections = [
  { path: "/intro", label: "Spiritual Sovereignty: Introduction & Purpose" },
  { path: "/framework", label: "Internal, Embodied, and External Sovereignty Framework" },
  { path: "/why-sovereignty", label: "Why sovereignty matters in awakening" },
  { path: "/awakening", label: "The Awakening Process" },
  { path: "/internal-disillusionment", label: "Internal disillusionment" },
  { path: "/ego-death", label: "Ego death and shadow emergence" },
  { path: "/void", label: "Living in the void" },
  { path: "/self-mastery", label: "Self-mastery through inner work" },
  { path: "/spiral-model", label: "The Spiral Model of Ascension" },
  { path: "/expansion-contraction", label: "How expansion/contraction phases work" },
  { path: "/timeline-shifts", label: "Energetic upgrades and timeline shifts" },
  { path: "/construct", label: "The Artificial Construct & Reality as Simulation" },
  { path: "/scripted-world", label: "Seeing the scripted world" },
  { path: "/loops", label: "Repeating loops and pattern recognition" },
  { path: "/creative-energy", label: "Emotional energy as a creative resource" },
  { path: "/higher-self-shadow", label: "The Role of the Higher Self, Shadow, and Sovereign Archetype" },
  { path: "/you-are-not-shadow", label: "You are not your shadow" },
  { path: "/not-higher-self", label: "You are not your higher self either" },
  { path: "/integration", label: "Integrating both to create your own path" },
  { path: "/ethics", label: "The Ethics of Incarnation" },
  { path: "/soul-contracts", label: "Emotional consequences of soul contracts" },
  { path: "/antenna-vs-sovereign", label: "Being used as an antenna vs being a sovereign being" },
  { path: "/authorship", label: "Reclaiming authorship of your journey" },
  { path: "/fractured-mind", label: "Fractured Mind and Quantum Programming" },
  { path: "/mental-echoes", label: "Mental echoes from past timelines" },
  { path: "/spiral-thinking", label: "Thinking in spirals" },
  { path: "/reprogramming", label: "Reprogramming vs deprogramming" },
  { path: "/pluto-deconstruction", label: "Pluto's Timeline of Psyche Deconstruction" },
  { path: "/pluto-role", label: "Role of Pluto in dismantling false identities" },
  { path: "/pluto-timeline", label: "Timeline of psychological transformation" },
  { path: "/144000", label: "The Role of the 144,000 and Earth Grid Placement" },
  { path: "/zodiac-portals", label: "Chakras as zodiacal portals" },
  { path: "/earth-grid", label: "Placement around the Earth grid" },
  { path: "/harmonics", label: "Harmonic resonance and global upgrades" },
  { path: "/future-boredom", label: "Consciousness, Simulation Theory & Future Boredom" },
  { path: "/limitation-games", label: "Why advanced souls create limitation games" },
  { path: "/coding-growth", label: "Coding spiritual growth into dense timelines" },
  { path: "/system-mastery", label: "Escaping the system vs mastering it" },
  { path: "/soul-archetypes", label: "Soul Archetype Map" },
  { path: "/archetype-triggers", label: "Explorer, Healer, Architect, Watcher, Rebel, etc." },
  { path: "/balancing-tools", label: "Triggers and balancing tools" },
  { path: "/emotional-mastery", label: "Emotional Mastery & Shadow Energy" },
  { path: "/emotional-sovereignty", label: "Reclaiming emotional sovereignty" },
  { path: "/energy-leaks", label: "Identifying energy leaks and distortions" },
  { path: "/relationship-lessons", label: "Romantic Detachment and Relationship Lessons" },
  { path: "/twin-flame", label: "Twin flame disillusionment" },
  { path: "/empowered-love", label: "Karmic connections vs empowered love" },
  { path: "/flowing-intimacy", label: "Flowing intimacy vs fixed partnership ideals" },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col md:flex-row ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <header className="p-4">
          <h1 className="text-2xl font-bold">Spiritual Docs</h1>
          <nav className="mt-4 space-y-2">
            {sections.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold underline" : ""
                  } block py-1 hover:text-indigo-600 transition-colors`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>

        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            {sections.map(({ path }) => (
              <Route
                key={path}
                path={path}
                element={<Placeholder title={sections.find((s) => s.path === path)?.label || "Content"} />}
              />
            ))}
            <Route
              path="*"
              element={<Placeholder title="Spiritual Sovereignty: Introduction & Purpose" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;