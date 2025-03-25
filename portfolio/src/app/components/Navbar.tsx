"use client";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" }
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "SKILLS", href: "/skills" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <nav className="w-full border-b border-zinc-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="font-mono text-xl font-bold text-white">
          John Carlo Manuel
        </Link>

        <div className="hidden space-x-6 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative font-mono text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-zinc-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <button
          className="text-zinc-400 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* todo: find a good icon  */}
        </button>
      </div>

      {/* for mobile */}
      {isMenuOpen && (
        <div className="absolute z-10 w-full border-b border-zinc-800 bg-zinc-900 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="border-b border-zinc-800 py-2 font-mono text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}>
                  <span className="mr-2 text-zinc-500">&#62;</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
