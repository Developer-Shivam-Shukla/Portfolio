"use client";

import React from "react"

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "./section-header";

interface Project {
  title: string;
  problem: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  challenges: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    problem:
      "Users need a simple, fast way to check real-time weather conditions for any city worldwide.",
    description:
      "A responsive web application that displays real-time weather information for any city using the OpenWeatherMap API. Features clean UI with dynamic weather data display.",
    features: [
      "Real-time weather data for any city",
      "Dynamic temperature & conditions display",
      "Responsive design for all devices",
      "API integration with Fetch & async/await",
      "Smooth data retrieval and error handling",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    image: "/images/project-weatherpulse.jpg",
    liveUrl: "https://weather-app-eight-xi-52.vercel.app/",
    githubUrl: "https://github.com/Developer-Shivam-Shukla",
    challenges:
      "Implemented API integration using Fetch and async/await, ensuring smooth data retrieval and display. Handled edge cases like invalid city names and network errors gracefully.",
    category: "API-Based Project",
  },
  {
    title: "Todo App",
    problem:
      "People need a straightforward tool to organize and track their daily tasks efficiently.",
    description:
      "A clean and functional to-do application built with vanilla JavaScript, featuring all essential task management functionalities including add, remove, and task completion tracking.",
    features: [
      "Add and remove tasks",
      "Mark tasks as complete",
      "Clean and intuitive UI",
      "Persistent task storage",
      "Responsive layout",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-taskflow.jpg",
    liveUrl: "https://todo-app-tau-lyart-32.vercel.app/",
    githubUrl: "https://github.com/Developer-Shivam-Shukla",
    challenges:
      "Built a clean state management approach using vanilla JavaScript to handle task CRUD operations. Focused on creating an intuitive, distraction-free UI for maximum productivity.",
    category: "JavaScript Project",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group grid items-center gap-8 transition-all duration-700 lg:grid-cols-2 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-lg border border-border bg-secondary">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={720}
            height={420}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1" : ""}`}>
        <span className="mb-2 inline-block font-mono text-xs tracking-wider text-primary">
          {project.category}
        </span>
        <h3 className="mb-3 text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <div className="mb-4 rounded-lg border border-border bg-card p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Problem
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            {project.problem}
          </p>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key Features
          </p>
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Interview talking point */}
        <details className="mb-4 rounded-lg border border-border bg-card">
          <summary className="cursor-pointer px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">
            Challenges & Solutions (Interview Talking Point)
          </summary>
          <p className="px-4 pb-3 text-sm leading-relaxed text-muted-foreground">
            {project.challenges}
          </p>
        </details>

        {/* Links */}
        <div className="flex gap-3">
          <Button size="sm" asChild>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-3.5 w-3.5" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 md:py-32"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="03. Projects"
          title="Featured Projects"
          description="A selection of projects that demonstrate my technical skills, problem-solving approach, and code quality."
        />

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
