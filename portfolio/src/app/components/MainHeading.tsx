export interface MainHeadingProps {
  headingText: string;
}

export default function MainHeading({ headingText }: MainHeadingProps) {
  return (
    <>
      <h1 className="mb-2 text-center font-mono text-4xl font-bold">
        {headingText.toLocaleUpperCase()}
      </h1>

      <div className="my-4 h-px w-full bg-zinc-700"></div>
    </>
  );
}
