"use client";

import { useState } from "react";
import { EngineIcon, PhoneIcon } from "./Icons";

const links = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-mark">
            <EngineIcon width={20} height={20} />
          </span>
          <span className="logo-text">
            Power<span>Source</span>
            <small>AUTO REPAIR</small>
          </span>
        </div>

        <nav className="nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="tel:8881234567" className="header-phone">
          <PhoneIcon width={16} height={16} /> (888) 123-4567
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger ${open ? "open" : ""}`}>
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={l.active ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="tel:8881234567"
          className="btn btn-red mobile-call"
          onClick={() => setOpen(false)}
        >
          <PhoneIcon width={16} height={16} /> (888) 123-4567
        </a>
      </div>
    </header>
  );
}
