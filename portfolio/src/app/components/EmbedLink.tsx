import React from "react";
import Link from "next/link";

interface EmbedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const EmbedLink: React.FC<EmbedLinkProps> = ({
  href,
  children,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer"
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`text-blue-300 decoration-sky-500 transition-colors duration-200 hover:underline ${className} `}>
      {children}
    </Link>
  );
};

export default EmbedLink;
