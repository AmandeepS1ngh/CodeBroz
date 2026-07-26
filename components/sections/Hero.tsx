"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const trustBadges = [
  "Clean Architecture",
  "Transparent Communication",
  "Modern Tech Stack",
  "Long-Term Support",
];

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "140px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        className="hero-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      {/* Radial Spotlights */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Centered Hero Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: "28px" }}>
            <span className="badge">
              <Sparkles size={13} />
              Boutique Software Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(44px, 6.5vw, 82px)",
              fontWeight: "800",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "28px",
            }}
          >
            Engineering Software That{" "}
            <span className="gradient-text">Businesses Can Rely On.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: "#94A3B8",
              lineHeight: "1.75",
              maxWidth: "760px",
              marginBottom: "44px",
            }}
          >
            We build scalable web applications, AI-powered solutions, SaaS
            platforms, and automation tools engineered for high speed, bank-grade reliability, and exponential growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ padding: "18px 36px", fontSize: "16px" }}
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ padding: "18px 36px", fontSize: "16px" }}
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px 32px",
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px",
                  color: "#CBD5E1",
                  fontWeight: "500",
                }}
              >
                <CheckCircle2 size={16} color="#3B82F6" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            marginTop: "64px",
          }}
        >
          <span style={{ fontSize: "11px", color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Scroll To Discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, #3B82F6, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
