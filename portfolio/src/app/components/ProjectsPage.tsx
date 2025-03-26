import { useState } from "react";
import Link from "next/link";
import { getSelfData } from "@/lib/info";
import { FaExternalLinkAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";

export type Project = {
  name: string;
  url: string;
  desc: string;
  tags: string[];
  challenges: string[];
  outcomes: string[];
};

export default async function Projects() {
  const data = await getSelfData();
  if (!data) console.error("No data found");

  const projects = data.projects;
}
