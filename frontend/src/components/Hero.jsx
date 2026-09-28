import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-44 pb-28 md:pt-52 md:pb-40 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(147,90,230,0.35) 0%, rgba(88,44,150,0.12) 40%, transparent 70%)",
        }}
      />
      {/* Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Live badge */}
        <a href="#battle" className="animate-fade-up flex items-center gap-2 rounded-full pl-2 pr-4 py-1.5 mb-8"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <span className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide"
            style={{ background: "rgba(198,240,60,0.15)", color: "#c6f03c" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#c6f03c", boxShadow: "0 0 8px #c6f03c" }} />
            LIVE NOW
          </span>
          <span className="text-sm text-white/85">Battle Clash September</span>
        </a>

        <h1 className="animate-fade-up font-display font-extrabold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)", animationDelay: "0.1s" }}>
          <span className="text-white">Scale Up Your</span>
          <br />
          <span className="glow-text" style={{ color: "#c6f03c" }}>Trading</span>
        </h1>

        <p className="animate-fade-up mt-8 text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
          style={{ animationDelay: "0.2s" }}>
          Prove your skills and earn up to $100K evaluation capital. Keep 80% of every reward — no waiting, no limits.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center gap-4" style={{ animationDelay: "0.3s" }}>
          <a href="#get-started" className="lime-btn flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold">
            Get Started <ArrowRight size={18} />
          </a>
          <a href="#how" className="dark-btn flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
