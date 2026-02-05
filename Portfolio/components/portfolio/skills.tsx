"use client";

import React from "react"

import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "./section-header";

interface Skill {
  name: string;
  level: number;
  concepts?: string[];
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        level: 85,
        concepts: ["OOP", "DSA", "Competitive Programming", "Collections"],
      },
      {
        name: "JavaScript (ES6+)",
        level: 82,
        concepts: [
          "DOM Manipulation",
          "Async/Await",
          "Fetch API",
          "Event Handling",
        ],
      },
      {
        name: "Python",
        level: 70,
        concepts: ["Scripting", "Automation", "Data Handling"],
      },
      {
        name: "HTML5 / CSS3",
        level: 88,
        concepts: ["Semantic HTML", "Flexbox & Grid", "Responsive Design", "Animations"],
      },
    ],
  },
  {
    title: "MERN Stack",
    skills: [
      {
        name: "React.js",
        level: 75,
        concepts: ["Components", "Hooks", "State Management", "JSX"],
      },
      {
        name: "Node.js",
        level: 72,
        concepts: ["Express.js", "REST APIs", "Middleware", "Routing"],
      },
      {
        name: "MongoDB",
        level: 70,
        concepts: ["CRUD Operations", "Mongoose", "Aggregation", "Atlas"],
      },
      {
        name: "Express.js",
        level: 72,
        concepts: ["Routing", "Middleware", "REST APIs", "Error Handling"],
      },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      {
        name: "Git & GitHub",
        level: 80,
        concepts: ["Branching", "Pull Requests", "Version Control", "Collaboration"],
      },
      {
        name: "IoT & Embedded Systems",
        level: 75,
        concepts: ["Microcontrollers", "Sensors", "Networking", "Protocols"],
      },
      {
        name: "DSA & CP",
        level: 78,
        concepts: ["Arrays", "Strings", "Sorting", "Problem Solving"],
      },
      {
        name: "Networking",
        level: 68,
        concepts: ["TCP/IP", "HTTP", "DNS", "OSI Model"],
      },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: isInView ? `${skill.level}%` : "0%" }}
        />
      </div>
      {skill.concepts && (
        <div className="mt-2 flex flex-wrap gap-1">
          {skill.concepts.map((concept) => (
            <span
              key={concept}
              className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
            >
              {concept}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-card/50 px-6 py-24 md:py-32"
      aria-label="Skills"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="02. Skills"
          title="Technical Skills"
          description="Proficiency in Java, MERN stack technologies, and IoT with a focus on problem-solving and full-stack development."
        />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
                <span className="h-px w-6 bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 100} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
