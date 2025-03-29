import { nonTechnicalSkills, technicalSkills } from "@/data/skills";
import SkillCard from "./SkillCard";
import Subheading from "./Subheading";
import MainHeading from "./MainHeading";

export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-12">
        <div className="relative">
          <MainHeading headingText="My Skills" />
        </div>

        <section>
          <Subheading headingText="technical skills" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {technicalSkills.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </section>

        <section>
          <Subheading headingText="non-technical skills" />
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
