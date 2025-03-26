import { SkillCategory } from "@/data/skills";

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="border border-zinc-700 bg-zinc-800/20 transition-colors duration-300 hover:bg-zinc-800/30">
      <div className="p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="text-zinc-400">{category.icon}</div>
          <h3 className="font-mono text-lg font-bold">{category.name}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => (
            <span
              key={index}
              className="border border-zinc-700 bg-zinc-800 px-2 py-1 font-mono text-xs text-zinc-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
