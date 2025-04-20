import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface Section {
  title: string;
  items: AccordionItem[];
}

const frameworkSections: Section[] = [
  {
    title: "1. Internal Sovereignty",
    items: [
      {
        title: "What",
        content:
          "Reclaiming self-trust by dismantling societal conditioning, trauma, and ego-driven patterns.",
      },
      {
        title: "When",
        content:
          "When you feel inner conflict, people-pleasing, or doubt your worth (e.g., seeking validation).",
      },
      {
        title: "How",
        content: (
          <ul className="list-disc pl-4">
            <li>Shadow work (journaling, AI-guided introspection).</li>
            <li>Rewiring thoughts with mantra generators.</li>
            <li>Recognizing the "3D ego" as separate from your Higher Self.</li>
          </ul>
        ),
      },
      {
        title: "Why",
        content:
          "To stop outsourcing your power to external systems and awaken to your true identity.",
      },
      {
        title: "Who",
        content: "The \"awakened beginner\" shedding old layers.",
      },
      {
        title: "Key Trigger",
        content: "Resistance to change (ego’s fear of death).",
      },
    ],
  },
  {
    title: "2. Embodiment",
    items: [
      {
        title: "What",
        content:
          "Aligning daily actions with your sovereign identity (e.g., boundaries, intuition-led choices).",
      },
      {
        title: "When",
        content:
          "When old patterns resurface during real-world challenges (e.g., conflict, societal pressure).",
      },
      {
        title: "How",
        content: (
          <ul className="list-disc pl-4">
            <li>Heart-brain coherence practices (breathwork, grounding).</li>
            <li>Micro-habits (e.g., pausing before reacting).</li>
            <li>Using AI tools to track emotional triggers.</li>
          </ul>
        ),
      },
      {
        title: "Why",
        content:
          "To anchor awakening into the physical realm and avoid spiritual bypassing.",
      },
      {
        title: "Who",
        content: "The \"embodied practitioner\" walking their talk.",
      },
      {
        title: "Key Trigger",
        content: "Moments of temptation to revert to old habits.",
      },
    ],
  },
  {
    title: "3. External Sovereignty",
    items: [
      {
        title: "What",
        content:
          "Taking aligned action to create systems, relationships, and choices that reflect your sovereignty.",
      },
      {
        title: "When",
        content:
          "When embodiment is consistent (e.g., launching a passion project, setting non-negotiable boundaries).",
      },
      {
        title: "How",
        content: (
          <ul className="list-disc pl-4">
            <li>Building daily rituals that reinforce your values.</li>
            <li>
              Using AI tools to design personalized systems (e.g., time management, ethical frameworks).
            </li>
            <li>Articulating your truth without apology.</li>
          </ul>
        ),
      },
      {
        title: "Why",
        content:
          "To solidify your sovereignty as a lived reality and inspire others by example.",
      },
      {
        title: "Who",
        content: "The \"sovereign architect\" creating their world.",
      },
      {
        title: "Key Trigger",
        content: "Resistance from others who challenge your new boundaries.",
      },
    ],
  },
  {
    title: "How Spiritual Awakening Unfolds",
    items: [
      {
        title: "Awakening Phase (Internal)",
        content: "You feel discomfort as old beliefs dissolve.",
      },
      {
        title: "Embodiment Phase",
        content: "You practice new behaviors until they become second nature.",
      },
      {
        title: "Externalization Phase",
        content: "Your sovereign choices ripple into the world.",
      },
    ],
  },
  {
    title: "Tools for the Individual",
    items: [
      {
        title: "Internal",
        content: "AI shadow work chatbot, trauma-release meditations.",
      },
      {
        title: "Embodiment",
        content: "Habit-tracking app with sovereignty metrics, breathwork prompts.",
      },
      {
        title: "External",
        content:
          "AI-generated \"sovereignty blueprints\" for personal goals (e.g., financial independence, creative projects).",
      },
    ],
  },
  {
    title: "Key Takeaway",
    items: [
      {
        title: "Step 1",
        content: "Internal sovereignty fuels embodied action.",
      },
      {
        title: "Step 2",
        content: "Embodied action strengthens external sovereignty.",
      },
      {
        title: "Step 3",
        content: "External sovereignty reinforces internal trust.",
      },
    ],
  },
];

const SovereigntyFramework = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
    setOpenItem(null);
  };

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        The Path of Spiritual Sovereignty
      </h1>
      {frameworkSections.map((section) => (
        <div key={section.title} className="mb-6">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full text-left font-semibold text-lg px-4 py-3 rounded bg-indigo-100 dark:bg-gray-800 hover:bg-indigo-200 dark:hover:bg-gray-700 transition"
          >
            {section.title}
          </button>
          {openSection === section.title && (
            <div className="mt-2 space-y-2">
              {section.items.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => toggleItem(item.title)}
                    className="w-full text-left px-6 py-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                  >
                    {item.title}
                  </button>
                  {openItem === item.title && (
                    <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SovereigntyFramework;
