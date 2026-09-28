import React from "react";
import { steps } from "../mock";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c6f03c" }}>
          How It Works
        </p>
        <h2 className="font-display font-bold text-white mb-16" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          From Evaluation to <span style={{ color: "#a855f7" }} className="italic">Rewards</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="glass-card rounded-2xl p-8 relative">
              <span className="font-display font-extrabold text-6xl block mb-6"
                style={{ color: "rgba(168,85,247,0.25)" }}>
                {s.num}
              </span>
              <h3 className="font-display font-semibold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-white/55 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#c6f03c" }}>
                <ArrowRight size={15} />
                {s.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
