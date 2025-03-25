import Image from "next/image";
import Link from "next/link";
import { getLinksData } from "@/lib/info";

export default async function Home() {
  const links: any = await getLinksData();
  if (!links) console.error("Failed to render links data");

  const resumeUrl: string = links["resume"];
  // const githubUrl: string = links["github"];
  // const linkedinUrl: string = links["linkedin"];

  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="relative mb-12 flex w-full justify-center">
          <div className="relative">
            <div className="absolute inset-0 rotate-3 transform border-2 border-zinc-700 opacity-50"></div>
            <div className="relative overflow-hidden border-4 border-zinc-800 shadow-xl">
              <Image
                src="/john.jpg"
                alt="Profile Photo"
                width={400}
                height={300}
                priority
                className="h-48 w-full max-w-3xl origin-center transform object-cover transition-all duration-500 md:h-64"
              />
            </div>
          </div>
        </div>

        <div className="relative mb-16">
          <div className="absolute -left-6 -top-6 h-12 w-12 border-l-2 border-t-2 border-zinc-500 opacity-70"></div>
          <div className="absolute -bottom-6 -right-6 h-12 w-12 border-b-2 border-r-2 border-zinc-500 opacity-70"></div>

          <div className="py-8">
            <div className="space-y-4">
              <h1 className="text-center font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
                John Carlo Manuel
              </h1>

              <p className="text-center text-xl font-light tracking-wide text-zinc-400">
                <span className="text-zinc-300">&#62;</span> Software
                Engineer{" "}
              </p>

              <div className="my-4 h-px w-full bg-zinc-700"></div>

              <div className="prose prose-invert max-w-none">
                <p className="text-center leading-relaxed text-zinc-300">
                  Software engineer and computer science student at California
                  State University, Fullerton. I'm interested in full-stack
                  development, game development, and distributed systems.
                  Outside of engineering, I enjoy diving into creative endeavors
                  such as writing and worldbuilding. I like to play plays
                  (MMO)RPGs and narrative-driven games.
                </p>
              </div>

              <div className="flex justify-center gap-x-6 pt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-200 transition-colors duration-200 hover:bg-zinc-700">
                  <span>About</span>
                  <span className="ml-2 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href={resumeUrl}
                  target="_blank"
                  className="group inline-flex items-center border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-200 transition-colors duration-200 hover:bg-zinc-700">
                  <span>Resume</span>
                  <span className="ml-2 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
