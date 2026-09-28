import React, { useState } from "react";
import { challengeTypes, capitalOptions, planDetails } from "../mock";

const Stat = ({ label, value, highlight }) => (
  <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
    <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-2">{label}</p>
    <p className="font-display font-semibold text-xl" style={{ color: highlight || "#ffffff" }}>{value}</p>
  </div>
);

const FundingChallenges = () => {
  const [type, setType] = useState("Instant Funding");
  const [capital, setCapital] = useState("$5,000");
  const d = planDetails.base;
  const fee = planDetails.fees[type][capital];

  return (
    <section id="rules" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c6f03c" }}>
          Funding Challenges
        </p>
        <h2 className="font-display font-bold text-white mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Choose Your <span style={{ color: "#a855f7" }} className="italic">Path</span>
        </h2>

        {/* Type tabs */}
        <div className="inline-flex flex-wrap gap-1 p-1 rounded-xl mb-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {challengeTypes.map((t) => (
            <button key={t} onClick={() => setType(t)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={type === t
                ? { background: "#c6f03c", color: "#14100a" }
                : { background: "transparent", color: "rgba(255,255,255,0.6)" }}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-6">
          {/* Capital selector */}
          <div className="flex flex-col gap-3">
            {capitalOptions.map((c) => (
              <button key={c} onClick={() => setCapital(c)}
                className="w-full text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-all"
                style={capital === c
                  ? { background: "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(124,58,237,0.25))", border: "1px solid rgba(198,240,60,0.4)", color: "#fff" }
                  : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
                {c}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="glass-card rounded-2xl p-8" style={{ transform: "none" }}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-2">Trading Capital</p>
                <p className="font-display font-bold text-4xl text-white">{capital}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-2">Entry Fee</p>
                <p className="font-display font-bold text-4xl" style={{ color: "#a855f7" }}>{fee}</p>
              </div>
            </div>

            <div className="h-px my-8" style={{ background: "rgba(255,255,255,0.08)" }} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="Max Daily Loss" value={d.maxDailyLoss} />
              <Stat label="Max Total Loss" value={d.maxTotalLoss} />
              <Stat label="Min Trading Days" value={d.minTradingDays} />
              <Stat label="Consistency Rule" value={d.consistencyRule} />
              <Stat label="Trading Period" value={d.tradingPeriod} highlight="#4ade80" />
              <Stat label="Max Leverage" value={d.maxLeverage} />
            </div>

            <div className="h-px my-8" style={{ background: "rgba(255,255,255,0.08)" }} />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-1">Reward Split</p>
                <p className="font-display font-bold text-3xl" style={{ color: "#4ade80" }}>{d.rewardSplit}</p>
              </div>
              <a href="#get-started" className="lime-btn rounded-xl px-7 py-3.5 text-sm font-semibold">
                {planDetails.cta[type]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingChallenges;
