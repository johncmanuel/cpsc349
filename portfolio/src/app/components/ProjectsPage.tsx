import { getSelfData } from "@/lib/info";
import ProjectCard from "./ProjectCard";
import MainHeading from "./MainHeading";

export type Project = {
  name: string;
  url: string;
  desc: string;
  tags: string[];
  img_url: string;
  challenges: string[];
  outcomes: string[];
};

export default async function ProjectsPage() {
  const data = await getSelfData();
  if (!data) console.error("No data found");

  const projects: Project[] = data.projects;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-12">
        <div className="relative">
          <MainHeading headingText="Projects" />
        </div>

        <section>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
