import React from "react";

const CTA = () => {
  return (
    <section id="get-started" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl px-8 py-20 md:py-24 text-center overflow-hidden"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.28), rgba(20,12,40,0.2))", border: "1px solid rgba(139,92,246,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.12]"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative">
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
              Ready to start your evaluation?
            </h2>
            <p className="text-white/60 text-lg mb-10">Join thousands of traders already funded with up to $100K</p>
            <a href="#home" className="lime-btn inline-flex items-center gap-2 rounded-xl px-9 py-4 text-base font-semibold">
              Start Your Evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
