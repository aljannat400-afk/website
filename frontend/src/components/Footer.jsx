import React from "react";
import { footerLinks } from "../mock";
import { Twitter, MessageCircle, Send, Youtube, Apple, Play } from "lucide-react";

const Footer = () => {
  const socials = [Twitter, MessageCircle, Send, Youtube];
  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-extrabold text-lg"
                style={{ background: "rgba(168,85,247,0.18)", color: "#c084fc" }}>F</div>
            </div>
            <p className="text-white/80 font-medium mb-6">Prove your skills and get Rewards</p>
            <p className="text-sm text-white/45 leading-relaxed">
              Xybit Inc.<br />48, Wall Street New York 10005<br />support@thefundedroom.com
            </p>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mt-8 mb-4">Get The App</p>
            <div className="flex flex-col gap-3 max-w-[180px]">
              <button className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-left" style={{ background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Apple size={22} className="text-white" />
                <span className="text-white"><span className="block text-[9px] leading-none">Download on the</span><span className="block text-sm font-semibold">App Store</span></span>
              </button>
              <button className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-left" style={{ background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Play size={20} className="text-white" />
                <span className="text-white"><span className="block text-[9px] leading-none">GET IT ON</span><span className="block text-sm font-semibold">Google Play</span></span>
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-6">Quick Links</p>
            <ul className="flex flex-col gap-4">
              {footerLinks.quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-6">Connect</p>
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon size={16} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs text-white/35 leading-relaxed text-center max-w-3xl mx-auto">
            Funded Room operates as a trader evaluation platform using simulated accounts and virtual capital only. We do not accept deposits or manage external funds. All activities are for educational and skill-assessment purposes only—nothing here constitutes financial advice or guarantees returns. Trading involves significant risk. Past performance is not indicative of future results. Eligibility and availability may vary by jurisdiction.
          </p>
          <p className="text-xs text-white/40 text-center mt-6">© 2026 Funded Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
