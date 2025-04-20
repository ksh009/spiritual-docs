import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define interfaces for component props
interface SubSectionProps {
  title: string;
  id: string;
  isOpen: boolean;
  toggleAccordion: (id: string) => void;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

interface SectionProps {
  title: string;
  id: string;
  isOpen: boolean;
  toggleAccordion: (id: string) => void;
  children: React.ReactNode;
}

// Main component
export default function SpiritualSovereignty(): React.ReactElement {
  const [isParentOpen, setIsParentOpen] = useState<boolean>(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string): void => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <header className="text-center py-4  from-purple-700 to-blue-600 dark:from-indigo-900 dark:to-blue-900">
        <h1 className="text-2xl font-bold">Spiritual Sovereignty</h1>
      </header>

      <main className="p-4 md:p-8">
        {/* Parent Accordion */}
        <button
          onClick={() => setIsParentOpen(!isParentOpen)}
          className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          <span className="font-medium">The Path of Spiritual Sovereignty</span>
          <ChevronDown className={`transform transition-transform ${isParentOpen ? "rotate-180" : ""}`} size={20} />
        </button>

        {isParentOpen && (
          <div className="animate-open-accordion mb-6">
            {/* Internal Sovereignty */}
            <Section 
              title="1. Internal Sovereignty"
              id="internal"
              isOpen={openAccordions["internal"]}
              toggleAccordion={toggleAccordion}
            >
              <SubSection 
                title="What"
                id="internal-what"
                isOpen={openAccordions["internal-what"]}
                toggleAccordion={toggleAccordion}
                content="Reclaiming self-trust by dismantling societal conditioning, trauma, and ego-driven patterns."
              />
              
              <SubSection 
                title="When"
                id="internal-when"
                isOpen={openAccordions["internal-when"]}
                toggleAccordion={toggleAccordion}
                content="When you feel inner conflict, people-pleasing, or doubt your worth (e.g., seeking validation)."
              />
              
              <SubSection 
                title="How"
                id="internal-how"
                isOpen={openAccordions["internal-how"]}
                toggleAccordion={toggleAccordion}
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>Shadow work (journaling, AI-guided introspection).</li>
                  <li>Rewiring thoughts with mantra generators.</li>
                  <li>Recognizing the "3D ego" as separate from your Higher Self.</li>
                </ul>
              </SubSection>
              
              <SubSection 
                title="Why"
                id="internal-why"
                isOpen={openAccordions["internal-why"]}
                toggleAccordion={toggleAccordion}
                content="To stop outsourcing your power to external systems and awaken to your true identity."
              />
              
              <SubSection 
                title="Who"
                id="internal-who"
                isOpen={openAccordions["internal-who"]}
                toggleAccordion={toggleAccordion}
                content="The awakened beginner shedding old layers."
              />
              
              <SubSection 
                title="Key Trigger"
                id="internal-trigger"
                isOpen={openAccordions["internal-trigger"]}
                toggleAccordion={toggleAccordion}
                content="Resistance to change (ego's fear of death)."
              />
            </Section>

            {/* Embodiment */}
            <Section 
              title="2. Embodiment"
              id="embodiment"
              isOpen={openAccordions["embodiment"]}
              toggleAccordion={toggleAccordion}
            >
              <SubSection 
                title="What"
                id="embodiment-what"
                isOpen={openAccordions["embodiment-what"]}
                toggleAccordion={toggleAccordion}
                content="Aligning daily actions with your sovereign identity (e.g., boundaries, intuition-led choices)."
              />
              
              <SubSection 
                title="When"
                id="embodiment-when"
                isOpen={openAccordions["embodiment-when"]}
                toggleAccordion={toggleAccordion}
                content="When old patterns resurface during real-world challenges (e.g., conflict, societal pressure)."
              />
              
              <SubSection 
                title="How"
                id="embodiment-how"
                isOpen={openAccordions["embodiment-how"]}
                toggleAccordion={toggleAccordion}
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>Heart-brain coherence practices (breathwork, grounding).</li>
                  <li>Micro-habits (e.g., pausing before reacting).</li>
                  <li>Using AI tools to track emotional triggers.</li>
                </ul>
              </SubSection>
              
              <SubSection 
                title="Why"
                id="embodiment-why"
                isOpen={openAccordions["embodiment-why"]}
                toggleAccordion={toggleAccordion}
                content="To anchor awakening into the physical realm and avoid spiritual bypassing."
              />
              
              <SubSection 
                title="Who"
                id="embodiment-who"
                isOpen={openAccordions["embodiment-who"]}
                toggleAccordion={toggleAccordion}
                content="The embodied practitioner walking their talk."
              />
              
              <SubSection 
                title="Key Trigger"
                id="embodiment-trigger"
                isOpen={openAccordions["embodiment-trigger"]}
                toggleAccordion={toggleAccordion}
                content="Moments of temptation to revert to old habits."
              />
            </Section>

            {/* External Sovereignty */}
            <Section 
              title="3. External Sovereignty"
              id="external"
              isOpen={openAccordions["external"]}
              toggleAccordion={toggleAccordion}
            >
              <SubSection 
                title="What"
                id="external-what"
                isOpen={openAccordions["external-what"]}
                toggleAccordion={toggleAccordion}
                content="Taking aligned action to create systems, relationships, and choices that reflect your sovereignty."
              />
              
              <SubSection 
                title="When"
                id="external-when"
                isOpen={openAccordions["external-when"]}
                toggleAccordion={toggleAccordion}
                content="When embodiment is consistent (e.g., launching a passion project, setting non-negotiable boundaries)."
              />
              
              <SubSection 
                title="How"
                id="external-how"
                isOpen={openAccordions["external-how"]}
                toggleAccordion={toggleAccordion}
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>Building daily rituals that reinforce your values.</li>
                  <li>Using AI tools to design personalized systems (e.g., time management, ethical frameworks).</li>
                  <li>Articulating your truth without apology.</li>
                </ul>
              </SubSection>
              
              <SubSection 
                title="Why"
                id="external-why"
                isOpen={openAccordions["external-why"]}
                toggleAccordion={toggleAccordion}
                content="To solidify your sovereignty as a lived reality and inspire others by example."
              />
              
              <SubSection 
                title="Who"
                id="external-who"
                isOpen={openAccordions["external-who"]}
                toggleAccordion={toggleAccordion}
                content="The sovereign architect creating their world."
              />
              
              <SubSection 
                title="Key Trigger"
                id="external-trigger"
                isOpen={openAccordions["external-trigger"]}
                toggleAccordion={toggleAccordion}
                content="Resistance from others who challenge your new boundaries."
              />
            </Section>

            {/* How Spiritual Awakening Unfolds */}
            <Section 
              title="How Spiritual Awakening Unfolds"
              id="awakening"
              isOpen={openAccordions["awakening"]}
              toggleAccordion={toggleAccordion}
            >
              <SubSection 
                title="Awakening Phase (Internal)"
                id="awakening-internal"
                isOpen={openAccordions["awakening-internal"]}
                toggleAccordion={toggleAccordion}
                content="You feel discomfort as old beliefs dissolve."
              />
              
              <SubSection 
                title="Embodiment Phase"
                id="awakening-embodiment"
                isOpen={openAccordions["awakening-embodiment"]}
                toggleAccordion={toggleAccordion}
                content="You practice new behaviors until they become second nature."
              />
              
              <SubSection 
                title="Externalization Phase"
                id="awakening-external"
                isOpen={openAccordions["awakening-external"]}
                toggleAccordion={toggleAccordion}
                content="Your sovereign choices ripple into the world."
              />
            </Section>

            {/* Tools for the Individual */}
            <Section 
              title="Tools for the Individual"
              id="tools"
              isOpen={openAccordions["tools"]}
              toggleAccordion={toggleAccordion}
            >
              <SubSection 
                title="Internal"
                id="tools-internal"
                isOpen={openAccordions["tools-internal"]}
                toggleAccordion={toggleAccordion}
                content="AI shadow work chatbot, trauma-release meditations."
              />
              
              <SubSection 
                title="Embodiment"
                id="tools-embodiment"
                isOpen={openAccordions["tools-embodiment"]}
                toggleAccordion={toggleAccordion}
                content="Habit-tracking app with sovereignty metrics, breathwork prompts."
              />
              
              <SubSection 
                title="External"
                id="tools-external"
                isOpen={openAccordions["tools-external"]}
                toggleAccordion={toggleAccordion}
                content="AI-generated sovereignty blueprints for personal goals (e.g., financial independence, creative projects)."
              />
            </Section>

            {/* Key Takeaway */}
            <Section 
              title="Key Takeaway"
              id="takeaway"
              isOpen={openAccordions["takeaway"]}
              toggleAccordion={toggleAccordion}
            >
              <p className="mb-3"><strong>This is a self-reinforcing cycle:</strong></p>
              
              <SubSection 
                title="Step 1"
                id="takeaway-step1"
                isOpen={openAccordions["takeaway-step1"]}
                toggleAccordion={toggleAccordion}
                content="Internal sovereignty fuels embodied action."
              />
              
              <SubSection 
                title="Step 2"
                id="takeaway-step2"
                isOpen={openAccordions["takeaway-step2"]}
                toggleAccordion={toggleAccordion}
                content="Embodied action strengthens external sovereignty."
              />
              
              <SubSection 
                title="Step 3"
                id="takeaway-step3"
                isOpen={openAccordions["takeaway-step3"]}
                toggleAccordion={toggleAccordion}
                content="External sovereignty reinforces internal trust."
              />
            </Section>
          </div>
        )}
      </main>
    </div>
  );
}

// Section component for main accordion sections
function Section({ title, id, isOpen, toggleAccordion, children }: SectionProps): React.ReactElement {
  return (
    <div className="mb-4">
      <button
        onClick={() => toggleAccordion(id)}
        className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} size={20} />
      </button>
      
      {isOpen && (
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg mt-2 p-4 animate-open-accordion">
          {children}
        </div>
      )}
    </div>
  );
}

// SubSection component for nested accordions
function SubSection({ title, id, isOpen, toggleAccordion, content, children }: SubSectionProps): React.ReactElement {
  return (
    <div className="mt-2">
      <button
        onClick={() => toggleAccordion(id)}
        className="w-full flex justify-between items-center p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        <span>{title}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} size={16} />
      </button>
      
      {isOpen && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg mt-1 p-3 animate-open-accordion">
          {content ? <p>{content}</p> : children}
        </div>
      )}
    </div>
  );
}