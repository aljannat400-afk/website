import React, { useState, useEffect } from "react";
import { Sun, ChevronRight, Menu, X } from "lucide-react";
import { navLinks } from "../mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <nav
        className="w-full max-w-5xl rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled
            ? "linear-gradient(90deg, rgba(30,18,55,0.92), rgba(45,26,80,0.92))"
            : "linear-gradient(90deg, #7c3aed, #a855f7 55%, #9333ea)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-extrabold text-lg"
            style={{ background: "rgba(255,255,255,0.14)", color: "#e9d5ff" }}>
            F
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label="toggle theme"
          >
            <Sun size={17} className="text-white" />
          </button>
          <a
            href="#get-started"
            className="lime-btn hidden sm:flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold"
          >
            Sign In <ChevronRight size={15} />
          </a>
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-20 left-4 right-4 rounded-2xl p-4 flex flex-col gap-3"
          style={{
            background: "linear-gradient(180deg, rgba(30,18,55,0.98), rgba(20,12,40,0.98))",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="text-white/90 py-2 text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="#get-started" className="lime-btn rounded-xl px-4 py-2.5 text-sm font-semibold text-center mt-1">
            Sign In
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
