import Link from "next/link";
import { getLinksData, getSelfData } from "@/lib/info";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import EmbedLink from "./EmbedLink";
import Subheading from "./Subheading";
import MainHeading from "./MainHeading";

export default async function AboutPage() {
  const links: any = await getLinksData();
  const self: any = await getSelfData();
  if (!links || !self) console.error("Failed to render links or self data");

  const resume = links.resume;

  const education = [
    {
      degree: "Bachelor's Degree, Computer Science",
      school: "California State University, Fullerton",
      year: "Fall 2025",
      description:
        "Focused on web development, game development, and software engineering."
    },
    {
      degree: "Transfer",
      school: "Skyline College",
      year: "Spring 2020",
      description:
        "Finished general education and lower-division computer science and engineering courses."
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-12">
        <div className="relative">
          <MainHeading headingText="About Me" />
        </div>
        <Subheading headingText="Background" />
        <section className="relative md:mt-8">
          <div className="border border-zinc-700 bg-zinc-800/30 p-6">
            <div className="prose prose-invert max-w-none space-y-2">
              <p>
                I first started self-teaching myself programming since high
                school and built a few, small projects such as a calculator for
                trigonometry class using C++ and the first version of my
                personal website using HTML, CSS, and JS.
              </p>
              <p>
                After high school, I attended{" "}
                <EmbedLink href="https://skylinecollege.edu/">
                  Skyline College
                </EmbedLink>{" "}
                and studied there for 3 years before transferring to{" "}
                <EmbedLink href="https://www.fullerton.edu/">
                  Cal State Fullerton
                </EmbedLink>
                . During my time there,{" "}
                <EmbedLink href="https://www.skycs.club/">
                  I co-founded the computer science club
                </EmbedLink>
                , taught myself more web development and other computer science
                topics,{" "}
                <EmbedLink href="https://devpost.com/software/unipals-l8jd7z">
                  attended a virtual hackathon
                </EmbedLink>
                ,{" "}
                <EmbedLink href="http://sfsu-miclab.org/">
                  performed research in computer vision at SFSU
                </EmbedLink>
                ,{" "}
                <EmbedLink href="https://registers.johncarlomanuel.com/research-in-nexo/">
                  contributed to nEXO
                </EmbedLink>
                , and did{" "}
                <EmbedLink href="https://skylinecollege.edu/stemcenter/index.php">
                  part-time tutoring
                </EmbedLink>{" "}
                for CS classes.
              </p>
              <p>
                I continued my studies at Cal State Fullerton and specialized in
                web development and game development. I became involved in{" "}
                <EmbedLink href="https://acmcsuf.com/">ACM</EmbedLink>, where I
                helped contribute to{" "}
                <EmbedLink href="https://github.com/acmcsufoss/">
                  open source
                </EmbedLink>{" "}
                and{" "}
                <EmbedLink href="https://fullyhacks.acmcsuf.com/">
                  FullyHacks
                </EmbedLink>{" "}
                as a web developer.
              </p>
            </div>
          </div>
        </section>

        <section id="education">
          <Subheading headingText="Education" />
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border border-zinc-700 bg-zinc-800/20 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <span className="font-mono text-sm text-zinc-400">
                    {edu.year}
                  </span>
                </div>
                <p className="text-zinc-300">{edu.school}</p>
                <p className="mt-2 text-sm text-zinc-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="flex justify-center">
          <div className="w-full max-w-md border border-zinc-700 bg-zinc-800/30 p-6 text-center">
            <Subheading
              headingText="Skills"
              additionalClassNames="justify-center"
            />
            <p className="mb-6 text-zinc-300">
              Explore my current skillset, both technical and non-technical{" "}
            </p>
            <Link
              href="/skills"
              className="group inline-flex items-center border border-zinc-600 bg-zinc-700 px-6 py-3 text-zinc-200 transition-colors duration-200 hover:bg-zinc-600">
              <FaCode className="mr-2 h-5 w-5" />
              <span>View Skills</span>
              <span className="ml-2 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>
        <section>
          <Subheading headingText="Interests" />
          <div className="border border-zinc-700 bg-zinc-800/30 p-6">
            <div className="prose prose-invert max-w-none space-y-2">
              <p>
                Aside from software engineering, I like to play games, write
                fiction and anything that comes to mind for my{" "}
                <EmbedLink href="https://registers.johncarlomanuel.com/">
                  blog site
                </EmbedLink>
                , and read interesting articles, books, and even manga (I'll
                also watch anime adaptations if they exist)!
              </p>
            </div>
          </div>
        </section>

        <section id="resume" className="flex justify-center">
          <div className="w-full max-w-md border border-zinc-700 bg-zinc-800/50 p-8 text-center">
            <h2 className="mb-4 font-mono text-xl">VIEW RESUME</h2>
            <p className="mb-6 text-zinc-400">
              Check out my resume down below!{" "}
            </p>
            <Link
              href={resume}
              className="group inline-flex items-center border border-zinc-600 bg-zinc-700 px-6 py-3 text-zinc-200 transition-colors duration-200 hover:bg-zinc-600"
              target="_blank"
              rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-2 h-5 w-5" />
              <span>Resume</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
