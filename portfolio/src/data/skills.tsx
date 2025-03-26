import { FaGamepad, FaCode, FaDatabase, FaInfinity } from "react-icons/fa";
import { AiOutlineLayout } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";

export type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  type: "technical" | "non-technical";
};

// hard code the skills rather than using the one from getSelfData()
export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <FaCode className="h-5 w-5" />,
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
      "SQL",
      "Go",
      "x86 Assembly",
      "C#"
    ],
    type: "technical"
  },
  {
    name: "Frontend",
    icon: <AiOutlineLayout className="h-5 w-5" />,
    skills: ["React", "Next.js", "Tailwind CSS", "SvelteKit"],
    type: "technical"
  },
  {
    name: "Backend",
    icon: <CiServer className="h-5 w-5" />,
    skills: ["Node.js", "Express", "FastAPI", "Deno", "Gin"],
    type: "technical"
  },
  {
    name: "Databases",
    icon: <FaDatabase className="h-5 w-5" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Redis",
      "Prisma ORM"
    ],
    type: "technical"
  },
  {
    name: "DevOps & Programming Tools",
    icon: <FaInfinity className="h-5 w-5" />,
    skills: ["Git", "GitHub", "Docker", "Vercel"],
    type: "technical"
  },
  {
    name: "Game Development",
    icon: <FaGamepad className="h-5 w-5" />,
    skills: ["Unity", "C#", "Phaser.js"],
    type: "technical"
  },

  // non technical
  {
    name: "Soft Skills",
    icon: <IoPerson className="h-5 w-5" />,
    skills: [
      "Technical Writing",
      "Public Speaking",
      "Team Collaboration",
      "Documentation"
    ],
    type: "non-technical"
  }
];

export const technicalSkills = skillCategories.filter(
  (category) => category.type === "technical"
);

export const nonTechnicalSkills = skillCategories.filter(
  (category) => category.type === "non-technical"
);
