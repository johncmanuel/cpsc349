import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-zinc-800 py-8">
      <div className="flex items-center justify-between">
        <div className="font-mono text-sm text-zinc-500">
          © {new Date().getFullYear()} John Carlo Manuel. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/johncmanuel/cpsc349"
            className="text-zinc-400 transition-colors duration-200 hover:text-white">
            Source Code
          </Link>
        </div>
      </div>
    </footer>
  );
};
