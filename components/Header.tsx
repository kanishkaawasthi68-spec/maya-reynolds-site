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
      <div className="flex items-center justify-between px-[8vw] py-8 lg:min-h-49.5 lg:px-[6vw]">
        <Link href="/" className="leading-none">
          <span className="block font-heading text-[2.45rem] lg:text-[2.65rem]">Conejo Valley</span>
          <span className="mt-2 block text-[0.77rem] uppercase tracking-[0.4em] text-accent lg:text-[0.83rem]">
            Family Counseling
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.8rem] uppercase tracking-[0.15em] hover:text-accent">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-text px-6 py-3.5 text-[0.8rem] uppercase tracking-[0.15em] hover:bg-text hover:text-bg"
          >
            Contact
          </a>
        </nav>

        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-px w-9 bg-text" />
          <span className="mt-4 block h-px w-9 bg-text" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 px-[8vw] pb-8 lg:hidden">
          {[...links, { label: "Contact", href: "#contact" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base uppercase tracking-[0.15em]">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}