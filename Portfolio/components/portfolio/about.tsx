"use client";

import React from "react"

import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "./section-header";

const highlights = [
  {
    label: "CGPA",
    value: "8.0",
  },
  {
    label: "Projects Built",
    value: "5+",
  },
  {
    label: "Technologies",
    value: "10+",
  },
];

export function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="px-6 py-24 md:py-32" aria-label="About me">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="01. About"
          title="About Me"
          description="A passionate and fast-learning developer pursuing B.Tech in ECE (IoT) at MMMUT."
        />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid gap-12 md:grid-cols-2 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              {
                "I'm a passionate and fast-learning individual, currently pursuing a B.Tech in Electronics and Communication Engineering (Internet of Things) at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur."
              }
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I have a strong foundation in Java, MERN stack technologies,
              and I am currently expanding my expertise in DSA and Competitive
              Programming using Java. I am adept at problem-solving, coding,
              and analytical thinking.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                What drives me:
              </span>{" "}
              Full-Stack Web Development and IoT implementation with embedded
              devices. I am dedicated to refining algorithmic efficiency
              through Competitive Programming and leveraging networking
              fundamentals for robust systems.
            </p>
          </div>

          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick info */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Quick Info
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Location", value: "Gorakhpur, UP, India" },
                  { label: "Education", value: "B.Tech ECE (IoT), MMMUT" },
                  { label: "Focus", value: "MERN Stack & IoT" },
                  { label: "Availability", value: "Open to opportunities" },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
