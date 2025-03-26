"use client";
import { type Project } from "./ProjectsPage";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

// TODO: fill in details for outcome and challenges for each project
export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group overflow-hidden border border-zinc-700 bg-zinc-800/20 transition-colors duration-300 hover:bg-zinc-800/30`}>
      <div className="relative h-64 w-full overflow-hidden border-b border-zinc-700">
        <Image
          src={project.img_url}
          alt={`Screenshot of ${project.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-5">
          <h3 className="font-mono text-xl font-bold text-white drop-shadow-lg">
            {project.name}
          </h3>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center text-sm text-zinc-300 transition-colors hover:text-white"
            aria-label={`Visit ${project.name}'s GitHub repository`}>
            <span>GitHub</span>
            <FaExternalLinkAlt className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-4 text-zinc-300">{project.desc}</p>

        <div className="mb-4">
          <h4 className="mb-2 font-mono text-sm text-zinc-400">
            TECHNOLOGIES USED:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="border border-zinc-700 bg-zinc-800 px-2 py-1 font-mono text-xs text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-2 flex items-center font-mono text-sm text-zinc-400 transition-colors hover:text-white">
          {isExpanded ? (
            <>
              <span>HIDE DETAILS</span>
              <FaChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <span>SHOW DETAILS</span>
              <FaChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>

        {isExpanded && project.challenges && project.outcomes && (
          <div className="mt-4 space-y-4 border-t border-zinc-700 pt-4 text-sm">
            <div>
              <h4 className="mb-2 font-mono text-sm text-zinc-400">
                CHALLENGES FACED:
              </h4>
              <ul className="list-disc space-y-1 pl-5 text-zinc-300">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-sm text-zinc-400">
                OUTCOMES:
              </h4>
              <ul className="list-disc space-y-1 pl-5 text-zinc-300">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
