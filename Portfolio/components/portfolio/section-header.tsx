"use client";

import React from "react"

import { useInView } from "@/hooks/use-in-view";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mb-16 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="mb-2 font-mono text-sm tracking-wider text-primary">{label}</p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
