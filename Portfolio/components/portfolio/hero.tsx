"use client";

import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "HTML/CSS",
  "Python",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
      aria-label="Introduction"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <p className="mb-4 font-mono text-sm tracking-wider text-primary">
            {"Hello, I'm"}
          </p>
          <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            <span className="text-balance">Shivam Shukla</span>
          </h1>
          <h2 className="mb-6 text-2xl font-medium text-muted-foreground md:text-3xl">
            Full-Stack Web Developer
          </h2>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Passionate developer with a strong foundation in Java, MERN stack
            technologies, and IoT. Building innovative web solutions and
            sharpening skills through competitive programming.
          </p>

          {/* Tech stack pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#resume">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
