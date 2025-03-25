// import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-zinc-800 pt-8">
      <div className="flex items-center justify-between">
        <div className="font-mono text-sm text-zinc-500">
          © {new Date().getFullYear()} John Carlo Manuel. All rights reserved.
        </div>
        {/* todo: put socials here <div className="flex space-x-4"></div> */}
      </div>
    </footer>
  );
};
