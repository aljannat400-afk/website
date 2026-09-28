import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FundingChallenges from "./components/FundingChallenges";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="App relative">
      {/* Global background gradient */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, #1a0f33 0%, #150c28 30%, #0f0920 60%, #0a0612 100%)",
      }} />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <FundingChallenges />
        <WhyUs />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
