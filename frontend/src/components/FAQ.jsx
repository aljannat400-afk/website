import React, { useState } from "react";
import { faqs } from "../mock";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="terms" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c6f03c" }}>
            FAQ
          </p>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Got <span style={{ color: "#a855f7" }} className="italic">Questions?</span>
          </h2>
          <p className="text-white/55 leading-relaxed">Everything you need to know about getting started.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.num} className="rounded-2xl overflow-hidden transition-all"
                style={{ background: isOpen ? "rgba(45,28,80,0.5)" : "rgba(30,20,55,0.4)", border: "1px solid rgba(139,92,246,0.18)" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left">
                  <span className="text-sm font-semibold" style={{ color: "#a855f7" }}>{f.num}</span>
                  <span className="flex-1 font-medium text-white">{f.q}</span>
                  <span className="shrink-0 text-white/70">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
                </button>
                <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pl-16 text-white/55 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
