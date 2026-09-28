// Mock data for The Funded Room clone

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rules", href: "#rules" },
  { label: "Terms and Conditions", href: "#terms" },
];

export const steps = [
  {
    num: "01",
    title: "Choose Your Evaluation",
    desc: "Select from One-Step, Two-Step, or Instant Funding based on your trading style.",
    tag: "Start in minutes",
  },
  {
    num: "02",
    title: "Prove Your Skills",
    desc: "Trade within our risk parameters and hit your target. No time pressure.",
    tag: "No time limits",
  },
  {
    num: "03",
    title: "Get Rewarded",
    desc: "Trade with skills and get 80% of rewards. Claim anytime.",
    tag: "80% split",
  },
];

export const challengeTypes = ["Instant Funding", "One-Step", "Two-Step"];

export const capitalOptions = ["$5,000", "$10,000", "$25,000", "$50,000", "$100,000"];

// Plan details keyed by "type|capital"
export const planDetails = {
  base: {
    maxDailyLoss: "3%",
    maxTotalLoss: "6%",
    minTradingDays: "7",
    consistencyRule: "15%",
    tradingPeriod: "Unlimited",
    maxLeverage: "1:100",
    rewardSplit: "80%",
  },
  fees: {
    "Instant Funding": { "$5,000": "$69", "$10,000": "$129", "$25,000": "$289", "$50,000": "$529", "$100,000": "$999" },
    "One-Step": { "$5,000": "$49", "$10,000": "$89", "$25,000": "$189", "$50,000": "$349", "$100,000": "$649" },
    "Two-Step": { "$5,000": "$39", "$10,000": "$69", "$25,000": "$149", "$50,000": "$279", "$100,000": "$519" },
  },
  cta: {
    "Instant Funding": "Get Funded Instantly",
    "One-Step": "Start One-Step",
    "Two-Step": "Start Two-Step",
  },
};

export const features = [
  {
    icon: "Zap",
    title: "Instant Rewards",
    desc: "No waiting periods. Request your rewards and receive them directly to your wallet within hours.",
  },
  {
    icon: "ShieldCheck",
    title: "On-Chain Transparency",
    desc: "Every transaction recorded on blockchain. Complete visibility and immutable records.",
  },
  {
    icon: "Clock",
    title: "No Time Limits",
    desc: "Trade at your own pace. No deadline pressure—focus on making smart trades.",
  },
  {
    icon: "MessageSquare",
    title: "24/7 Support",
    desc: "Our dedicated team is available around the clock via Telegram and WhatsApp.",
  },
  {
    icon: "BarChart3",
    title: "Pro-Grade Platform",
    desc: "Advanced charting, real-time data, and institutional-level execution.",
  },
  {
    icon: "DollarSign",
    title: "80% Reward Split",
    desc: "Keep the lion's share of your earnings. One of the highest splits in the industry.",
  },
];

export const faqs = [
  {
    num: "01",
    q: "How quickly can I claim my rewards?",
    a: "Immediately. Once you're funded and earn rewards, you can request them anytime. There are no arbitrary waiting periods or complex approval processes—your earnings, your timeline.",
  },
  {
    num: "02",
    q: "What makes Funded Room different from other prop firms?",
    a: "We're built for transparency and speed. Our on-chain infrastructure means every transaction is verifiable. No hidden rules, no surprise rejections—just clear objectives and fair rewards.",
  },
  {
    num: "03",
    q: "What happens if I fail the evaluation?",
    a: "No problem—trading is a journey. You can purchase another evaluation and try again. Many of our most successful traders needed multiple attempts to refine their strategy.",
  },
  {
    num: "04",
    q: "Is there a time limit on the evaluation?",
    a: "None. Take as long as you need to hit your targets. We believe consistency beats speed, so there's no rush. Just meet the minimum trading days and prove your skills.",
  },
  {
    num: "05",
    q: "What markets can I trade?",
    a: "Trade Forex, Crypto, Commodities, and Indices. Our platform supports all major pairs and assets with competitive spreads and reliable execution.",
  },
];

export const footerLinks = {
  quick: [
    { label: "Battle Clash", href: "#battle" },
    { label: "Rules", href: "#rules" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Affiliates", href: "#affiliates" },
  ],
};
