"use client";

import React from "react"

import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useInView } from "@/hooks/use-in-view";
import { SectionHeader } from "./section-header";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const socialLinks = [
  {
    label: "Email",
    href: "mailto:shivamshukla.web01@gmail.com",
    icon: Mail,
    value: "shivamshukla.web01@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Developer-Shivam-Shukla",
    icon: Github,
    value: "github.com/Developer-Shivam-Shukla",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/developer-shivam-shukla/",
    icon: Linkedin,
    value: "linkedin.com/in/developer-shivam-shukla",
  },
];

export function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="bg-card/50 px-6 py-24 md:py-32"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="06. Contact"
          title="Get In Touch"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid gap-12 md:grid-cols-[1fr_300px] transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-primary/30 bg-primary/5 px-6 py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {
                    "Thank you for reaching out. I'll get back to you within 24 hours."
                  }
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-xs text-destructive"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-xs text-destructive"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-xs text-destructive"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Social links sidebar */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {
                  "I'm currently open to internships, full-stack developer roles, and collaborative projects. Feel free to reach out!"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
