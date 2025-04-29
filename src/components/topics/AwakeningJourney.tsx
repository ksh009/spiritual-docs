// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
import HealingDiagram from "../../assets/HealingDiagram.png"; // Example

export default function AwakeningJourney() {
  // Accordion state
//   const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

//   const toggleSection = (id: string) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

  return (
    <div className="min-h-screen p-6 md:p-12 text-gray-800 dark:text-gray-100">
      {/* Title Banner */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
          🌟 The Awakening Journey: Beyond the Illusion
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Awakening isn't escaping the world — it's rewiring reality from the inside out.
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-6">
        {/* Each section will be added here */}
      </div>

      {/* Healing Flow Diagram */}
      <div className="flex justify-center my-10">
        <img src={HealingDiagram} alt="Healing Flow Diagram" className="max-w-md w-full rounded-lg shadow-lg" />
      </div>

      {/* CTA to Blog */}
      <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg text-center mt-10">
        <h2 className="text-2xl font-semibold mb-2">Ready to Dive Deeper?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Explore the full Awakening Journey breakdown on the blog.
        </p>
        <a href="/blog/awakening-journey" className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition">
          Read Full Blog →
        </a>
      </div>
    </div>
  );
}
