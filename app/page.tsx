"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosStrip from "@/components/LogosStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Cases from "@/components/Cases";
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
        <Services />
        <HowItWorks />
        <Cases />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
