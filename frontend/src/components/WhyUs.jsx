import React from "react";
import { features } from "../mock";
import { Zap, ShieldCheck, Clock, MessageSquare, BarChart3, DollarSign } from "lucide-react";

const iconMap = { Zap, ShieldCheck, Clock, MessageSquare, BarChart3, DollarSign };

const WhyUs = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c6f03c" }}>
          Why Funded Room
        </p>
        <h2 className="font-display font-bold text-white mb-16" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Built for <span style={{ color: "#a855f7" }} className="italic">Serious Traders</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={f.title} className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}>
                  <Icon size={22} className="text-purple-300" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">{f.title}</h3>
                <p className="text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
