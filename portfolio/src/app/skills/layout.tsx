import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills I have",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
