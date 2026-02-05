"use client";

import React from "react"

import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "./section-header";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  type: string;
  description: string;
  impact: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Apr 2025 -- Present",
    title: "Junior Executive",
    company: "ECES (Electronics and Communication Engineering Society)",
    type: "Leadership",
    description:
      "Serving on the core committee of ECES, contributing to strategic planning and operational logistics for departmental initiatives and technical competitions at MMMUT.",
    impact: [
      "Designed engaging and impactful posters to represent ECES events and initiatives",
      "Contributed to strategic planning and operational logistics for departmental initiatives",
      "Organized and coordinated technical competitions and events",
    ],
    techStack: ["Leadership", "Event Management", "Design", "Communication"],
  },
  {
    period: "Nov 2024",
    title: "Weather App",
    company: "Personal Project",
    type: "Project",
    description:
      "Built a responsive web application to display real-time weather information for any city using HTML, CSS, JavaScript, and the OpenWeatherMap API.",
    impact: [
      "Implemented API integration using Fetch and async/await for smooth data retrieval",
      "Built responsive layout that works seamlessly across all device sizes",
      "Handled error states for invalid city names and network failures",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  },
  {
    period: "Apr 2024",
    title: "Todo App",
    company: "Personal Project",
    type: "Project",
    description:
      "Created a functional to-do application with all basic task management functionalities using vanilla HTML, CSS, and JavaScript.",
    impact: [
      "Built complete CRUD functionality for task management",
      "Designed a clean, intuitive user interface focused on usability",
      "Deployed successfully on Vercel for public access",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative grid gap-4 transition-all duration-700 md:grid-cols-[200px_1fr] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-start md:items-end md:text-right">
        <span className="font-mono text-sm text-muted-foreground">
          {experience.period}
        </span>
        <span className="mt-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
          {experience.type}
        </span>
      </div>

      {/* Content */}
      <div className="relative border-l-2 border-border pb-10 pl-8 last:pb-0">
        {/* Dot */}
        <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />

        <h3 className="text-lg font-semibold text-foreground">
          {experience.title}
          <span className="text-muted-foreground">
            {" "}
            {"· "}
            {experience.company}
          </span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        {/* Impact points */}
        <ul className="mt-3 space-y-1.5">
          {experience.impact.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-card/50 px-6 py-24 md:py-32"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="04. Experience"
          title="Experience & Involvement"
          description="Leadership roles, projects, and initiatives that showcase my skills and involvement."
        />

        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title + experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
