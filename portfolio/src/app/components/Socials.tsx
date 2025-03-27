import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { getLinksData } from "@/lib/info";

export type SocialLink = {
  name: string;
  label?: string;
  url: string;
  icon: React.ReactNode;
};

export default async function Socials() {
  const links = await getLinksData();
  const github = links.github;
  const linkedin = links.linkedin;
  const email = links.email;

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: github,
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub"
    },
    {
      name: "LinkedIn",
      url: linkedin,
      icon: <FaLinkedinIn className="h-5 w-5" />,
      label: "LinkedIn"
    },
    {
      name: "Email",
      url: email,
      icon: <MdOutlineEmail className="h-5 w-5" />,
      label: "Email"
    }
  ];

  return (
    <section id="socials">
      <div className="mb-4 flex flex-wrap justify-center gap-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center text-zinc-300 transition-colors duration-200 hover:text-white">
            <div className="text-zinc-400 transition-colors duration-200 group-hover:text-white">
              {link.icon}
            </div>
            <span className="ml-2 font-mono text-sm">
              {link.label || link.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="my-6 h-px w-full bg-zinc-800"></div>
    </section>
  );
}
