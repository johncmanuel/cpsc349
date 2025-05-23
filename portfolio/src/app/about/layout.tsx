import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "All about me",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
