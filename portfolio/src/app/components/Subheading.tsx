export interface SubheadingProps {
  headingText: string;
  additionalClassNames?: string;
}

export default function Subheading({
  headingText,
  additionalClassNames
}: SubheadingProps) {
  return (
    <h2
      className={`mb-4 flex items-center font-mono text-xl ${additionalClassNames}`}>
      <span className="mr-2 text-zinc-400">{">"}</span>
      {headingText.toLocaleUpperCase()}
    </h2>
  );
}
