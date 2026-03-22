/* ============================================================
   FOREVER HOME PLACEMENT — Navbar
   Elder-friendly: large text, high contrast, simple navigation
   Sticky warm white bar with sage green accents
   ============================================================ */

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import TreeIcon from "@/components/TreeIcon";

interface NavbarProps {
  onConsult: () => void;
}

export default function Navbar({ onConsult }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Our Services", id: "services" },
    { label: "How We Help", id: "how-we-help" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "white", borderBottom: "2px solid oklch(0.88 0.04 155)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between" style={{ minHeight: "72px" }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Forever Home Placement — Go to top"
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.55 0.08 155)" }}
            >
              <TreeIcon className="w-5 h-5" color="white" />
            </div>
            <div className="text-left">
              <span
                className="block leading-tight"
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  color: "oklch(0.42 0.09 155)",
                  letterSpacing: "-0.01em",
                }}
              >
                Forever Home
              </span>
              <span
                className="block leading-tight"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  color: "oklch(0.50 0.01 80)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Placement
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-semibold transition-colors hover:text-green-700"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.30 0.01 240)",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+14809399731"
              className="flex items-center gap-2 font-bold transition-colors hover:opacity-80"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1.05rem",
                color: "oklch(0.42 0.09 155)",
              }}
              aria-label="Call us at (480) 939-9731"
            >
              <Phone className="w-5 h-5" />
              (480) 939-9731
            </a>
            <button
              onClick={onConsult}
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "0.75rem 1.5rem", minHeight: "48px" }}
              aria-label="Request a free consultation"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "oklch(0.42 0.09 155)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: "oklch(0.98 0.015 80)",
            borderColor: "oklch(0.88 0.04 155)",
          }}
        >
          <div className="container py-5 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-3 px-2 font-semibold rounded-lg transition-colors hover:bg-green-50"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1.1rem",
                  color: "oklch(0.30 0.01 240)",
                  borderBottom: "1px solid oklch(0.90 0.02 80)",
                }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+14809399731"
                className="flex items-center gap-3 font-bold"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1.15rem",
                  color: "oklch(0.42 0.09 155)",
                }}
              >
                <Phone className="w-5 h-5" />
                (480) 939-9731
              </a>
              <button
                onClick={() => { setMobileOpen(false); onConsult(); }}
                className="btn-primary w-full"
                style={{ fontSize: "1.05rem" }}
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
