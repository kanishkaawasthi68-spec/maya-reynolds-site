"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Specialties", href: "#specialties" },
  { label: "Methods", href: "#methods" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 bg-bg">
      <div className="flex items-center justify-between px-6 py-8 md:px-12 lg:min-h-[198px] lg:px-[6vw]">
        <Link href="/" className="leading-none">
          <span className="block font-heading text-4xl md:text-5xl">Conejo Valley</span>
          <span className="mt-2 block text-[0.7rem] uppercase tracking-[0.4em] text-accent md:text-sm">
            Family Counseling
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-12 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base uppercase tracking-[0.15em] hover:text-accent">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-text px-7 py-4 text-base uppercase tracking-[0.15em] hover:bg-text hover:text-bg"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-px w-10 bg-text" />
          <span className="mt-3 block h-px w-10 bg-text" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-6 px-6 pb-8 lg:hidden">
          {[...links, { label: "Contact", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base uppercase tracking-[0.15em]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}