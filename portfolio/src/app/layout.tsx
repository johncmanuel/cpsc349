import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PreloadResources } from "@/lib/preloadResources";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Carlo Manuel",
  description: "John's Portfolio Website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-zinc-900 text-white antialiased`}>
        <PreloadResources />
        <Navbar />
        <div className="flex-grow">{children}</div>
        <div className="container mx-auto max-w-4xl px-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
