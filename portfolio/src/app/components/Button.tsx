import Link from "next/link";

interface ExternalLinkButton {
  href: string;
  text: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

const ExternalLinkButton = ({
  href,
  text,
  showArrow,
  children
}: ExternalLinkButton) => {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center border border-zinc-600 bg-zinc-700 px-6 py-3 text-zinc-200 transition-colors duration-200 hover:bg-zinc-600 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}>
      {children}
      {showArrow && (
        <span className="ml-2 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
};

export default ExternalLinkButton;
