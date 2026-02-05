"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Developer-Shivam-Shukla", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/developer-shivam-shukla/", icon: Linkedin },
  { label: "Email", href: "mailto:shivamshukla.web01@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            {"Designed & Built by "}
            <span className="font-medium text-foreground">Shivam Shukla</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Built with Next.js, React, TypeScript & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
