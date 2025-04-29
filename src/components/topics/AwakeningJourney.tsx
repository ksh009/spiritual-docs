import { useState } from "react";
import { ChevronDown } from "lucide-react";
// import HealingDiagram from "../../assets/HealingDiagram.png"; // Future image import

export default function AwakeningJourney() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Title Banner */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
          🌟 The Awakening Journey: Beyond the Illusion
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Awakening isn't escaping the world — it's rewiring reality from the
          inside out.
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-6">
        {/* 1. What is True Awakening? */}
        <div className="border rounded-lg shadow-md p-4 dark:border-gray-700">
          <button
            onClick={() => toggleSection("what-is-awakening")}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-semibold flex-1 text-left">
              🌟 What is True Awakening?
            </span>
            <ChevronDown
              className={`transform transition-transform ${
                openSections["what-is-awakening"] ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>
          {openSections["what-is-awakening"] && (
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Awakening is not about escaping the world or achieving perfection.
              It's about seeing through the layers of conditioning, control
              systems, and limiting beliefs that once defined your reality.
              <br />
              <br />
              It’s the conscious realization that you are not your programming —
              you are an eternal soul choosing to remember your true nature.
            </div>
          )}
        </div>

        {/* 2. Signs You Are Awakening */}
        <div className="border rounded-lg shadow-md p-4 dark:border-gray-700">
          <button
            onClick={() => toggleSection("signs-of-awakening")}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-semibold flex-1 text-left">
              ✨ Signs You Are Awakening
            </span>
            <ChevronDown
              className={`transform transition-transform ${
                openSections["signs-of-awakening"] ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>
          {openSections["signs-of-awakening"] && (
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              - You feel a growing disillusionment with societal systems.
              <br />
              - You experience heightened intuition and sensitivity to energy.
              <br />
              - Emotional turbulence and questioning of old identities.
              <br />
              - Relationships that once defined you start to shift or dissolve.
              <br />- A deep longing to find your soul's true purpose beyond
              material success.
            </div>
          )}
        </div>

        {/* 3. The Illusion of the 3D Construct */}
        <div className="border rounded-lg shadow-md p-4 dark:border-gray-700">
          <button
            onClick={() => toggleSection("illusion-of-3d")}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-semibold flex-1 text-left">
              🌐 The Illusion of the 3D Construct
            </span>
            <ChevronDown
              className={`transform transition-transform ${
                openSections["illusion-of-3d"] ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>
          {openSections["illusion-of-3d"] && (
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              The 3D world is a training simulation — a dense, slowed-down
              mirror designed for soul evolution.
              <br />
              <br />
              Systems, roles, and societal rules are programmed constructs.
              Awakening is realizing that you were playing a character in a
              script, but now you have the choice to become the author of your
              own experience.
            </div>
          )}
        </div>

        {/* 4. Emotional and Mental Upheaval */}
        <div className="border rounded-lg shadow-md p-4 dark:border-gray-700 mb-6">
          <button
            onClick={() => toggleSection("emotional-mental-upheaval")}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-semibold flex-1 text-left">
              🔥 Emotional and Mental Upheaval
            </span>
            <ChevronDown
              className={`transform transition-transform ${
                openSections["emotional-mental-upheaval"] ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>
          {openSections["emotional-mental-upheaval"] && (
            <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Awakening often triggers intense emotional purging. Old traumas,
              beliefs, and identity attachments surface to be witnessed and
              healed.
              <br />
              <br />
              This phase can feel destabilizing — but it is sacred. It is the
              cracking open of the false self, making space for the true self to
              emerge.
            </div>
          )}
        </div>
      </div>

      {/* 5. The Shift from Avatar to Observer */}
      <div className="border rounded-lg shadow-md p-4 dark:border-gray-700 mb-6">
        <button
          onClick={() => toggleSection("avatar-to-observer")}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-lg font-semibold flex-1 text-left">
            👁️ The Shift from Avatar to Observer
          </span>
          <ChevronDown
            className={`transform transition-transform ${
              openSections["avatar-to-observer"] ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        {openSections["avatar-to-observer"] && (
          <div className="mt-4 text-gray-700 dark:text-gray-100 leading-relaxed">
            Awakening invites you to move from fully identifying with your Earth
            "avatar" — the body, the role, the story — to realizing you are the
            *observer* behind it.
            <br />
            <br />
            You are the eternal witness who chose this temporary experience for
            growth. This shift releases attachment and suffering at the root.
          </div>
        )}
      </div>

      {/* 6. Why Awakening Can Feel Lonely */}
      <div className="border rounded-lg shadow-md p-4 dark:border-gray-700 mb-6">
        <button
          onClick={() => toggleSection("awakening-loneliness")}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-lg font-semibold flex-1 text-left">
            🌙 Why Awakening Can Feel Lonely
          </span>
          <ChevronDown
            className={`transform transition-transform ${
              openSections["awakening-loneliness"] ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        {openSections["awakening-loneliness"] && (
          <div className="mt-4 text-gray-700 dark:text-gray-100 leading-relaxed">
            As you elevate your frequency, old relationships, environments, and
            goals naturally fall away.
            <br />
            <br />
            It’s not punishment — it’s space-making. Your soul clears the field
            to prepare you for new, higher-resonance alignments. Trust the
            space. It is sacred.
          </div>
        )}
      </div>

      {/* 7. Healing Inside to Reshape Outside (Healing Diagram) */}
      <div className="border rounded-lg shadow-md p-4 dark:border-gray-700 mb-6">
        <button
          onClick={() => toggleSection("healing-inside")}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-lg font-semibold flex-1 text-left">
            🛠️ Healing Inside to Reshape Outside
          </span>
          <ChevronDown
            className={`transform transition-transform ${
              openSections["healing-inside"] ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        {openSections["healing-inside"] && (
          <div className="mt-4 text-gray-700 dark:text-gray-100 leading-relaxed">
            The external world is a delayed mirror of your internal energetic
            state.
            <br />
            <br />
            Deep healing inside must precede lasting external change. Every
            shift within your field eventually reorganizes reality itself.
            <br />
            <br />
            {/* Healing Flow Diagram Insert */}
            <div className="flex justify-center my-6">
              {/* Uncomment this when you have the image ready */}
              {/* <img src={HealingDiagram} alt="Healing Flow Diagram" className="max-w-md w-full rounded-lg shadow-lg" /> */}
              <p className="italic text-center text-sm text-gray-500 dark:text-gray-400">
                [Healing Flow Diagram Placeholder]
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 8. Moving from Knowing ➔ Being */}
      <div className="border rounded-lg shadow-md p-4 dark:border-gray-700 mb-6">
        <button
          onClick={() => toggleSection("knowing-to-being")}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-lg font-semibold flex-1 text-left">
            🌀 Moving from Knowing ➔ Being
          </span>
          <ChevronDown
            className={`transform transition-transform ${
              openSections["knowing-to-being"] ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        {openSections["knowing-to-being"] && (
          <div className="mt-4 text-gray-700 dark:text-gray-100 leading-relaxed">
            Awakening isn’t about collecting more knowledge.
            <br />
            <br />
            It’s about *embodying* truth so deeply that it becomes your natural
            state. Less theorizing, more being. Less seeking, more remembering.
            Awakening moves from the mind to the bones — it becomes the way you
            walk, breathe, and create.
          </div>
        )}
      </div>

      {/* Healing Flow Diagram */}
      <div className="flex justify-center my-10">
        {/* <img src={HealingDiagram} alt="Healing Flow Diagram" className="max-w-md w-full rounded-lg shadow-lg" /> */}
      </div>

      {/* CTA to Blog */}
      <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg text-center mt-10">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Explore the full Awakening Journey breakdown on the blog.
        </p>
        <a
          href="/blog/awakening-journey"
          className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition"
        >
          Read Full Blog →
        </a>
      </div>
    </div>
  );
}
