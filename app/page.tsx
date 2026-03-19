"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosStrip from "@/components/LogosStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Cases from "@/components/Cases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Header />
      <main>
        <Hero />
        <LogosStrip />
        <About />
        <Services />
        <HowItWorks />
        <Cases />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
