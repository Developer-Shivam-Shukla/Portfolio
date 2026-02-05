"use client";

import React from "react"

import { Download, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "./section-header";

const education = [
  {
    degree: "B.Tech ECE (Internet of Things)",
    institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    period: "2024 -- 2028",
    gpa: "8.0 / 10.0",
    highlights: [
      "Branch: Electronics and Communication Engineering (IoT)",
      "Focus: MERN Stack, Java, DSA, IoT & Embedded Systems",
    ],
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Children Senior Secondary School, Azamgarh",
    period: "2024",
    gpa: "85.4%",
    highlights: [
      "Completed senior secondary education with strong academic performance",
    ],
  },
  {
    degree: "Class X (CBSE)",
    institution: "Children Senior Secondary School, Azamgarh",
    period: "2022",
    gpa: "94.5%",
    highlights: [
      "Achieved outstanding results in secondary school examinations",
    ],
  },
];

const achievements = [
  {
    name: "Top 3 in C-Quiz",
    issuer: "Technical Competition",
    year: "2024",
  },
  {
    name: "Top 3 in Bomb Diffusion",
    issuer: "Robotics & Strategy Competition",
    year: "2024",
  },
  {
    name: "Core Committee Member, ECES",
    issuer: "MMMUT Gorakhpur",
    year: "2025",
  },
];

export function Resume() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="resume"
      className="px-6 py-24 md:py-32"
      aria-label="Resume"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="05. Resume"
          title="Education & Achievements"
          description="My academic background and notable achievements."
        />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`space-y-10 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Download button */}
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {edu.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-foreground">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4"
                >
                  <div>
                    <h4 className="text-sm font-medium text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
