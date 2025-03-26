import { nonTechnicalSkills, technicalSkills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-12">
        <div className="relative">
          <h1 className="mb-2 text-center font-mono text-4xl font-bold">
            MY SKILLS
          </h1>
          <div className="my-4 h-px w-full bg-zinc-700"></div>
        </div>

        <section>
          <h2 className="mb-6 flex items-center font-mono text-xl">
            <span className="mr-2 text-zinc-400">&#62;</span>
            TECHNICAL SKILLS
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {technicalSkills.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 flex items-center font-mono text-xl">
            <span className="mr-2 text-zinc-400">&#62;</span>
            NON-TECHNICAL SKILLS
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {nonTechnicalSkills.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
