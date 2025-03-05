import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information to reach me",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
