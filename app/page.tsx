"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import WhyCodeBroz from "@/components/sections/WhyCodeBroz";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Lenis smooth scroll
  useEffect(() => {
    let lenis: any;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    initLenis();
    return () => lenis?.destroy();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX, width: "100%" }}
      />

      <FloatingParticles />
      <Header />

      <main>
        <Hero />
        <Problem />
        <Services />
        <WhyCodeBroz />
        <Projects />
        <TechStack />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
