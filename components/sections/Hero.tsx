"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
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
          left: "-5%",
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(ellipse, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "-5%",
          width: "550px",
          height: "550px",
          background:
            "radial-gradient(ellipse, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-split-grid">
          {/* ─── LEFT: Hero Content ─── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: "24px" }}>
              <span className="badge">
                <Sparkles size={13} />
                Boutique Software Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(38px, 4.8vw, 68px)",
                fontWeight: "800",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Engineering Software That{" "}
              <span className="gradient-text">Businesses Can Rely On.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "#94A3B8",
                lineHeight: "1.75",
                maxWidth: "580px",
                marginBottom: "36px",
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
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "40px",
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
                style={{ padding: "16px 32px", fontSize: "16px" }}
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
                style={{ padding: "16px 32px", fontSize: "16px" }}
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
                gap: "14px 24px",
              }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
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

          {/* ─── RIGHT: Clean Founders Image Showcase (Increased Size & Smooth Slide-in) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 160, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Ambient Backstage Radial Blue Glow */}
            <div
              style={{
                position: "absolute",
                width: "90%",
                height: "90%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at center, rgba(59, 130, 246, 0.22) 0%, rgba(99, 102, 241, 0.08) 60%, transparent 80%)",
                filter: "blur(60px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Large Clean Founders Cutout Image */}
            <motion.img
              src="/founders-transparent.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/founders_pic.png";
              }}
              alt="CodeBroz Founders"
              style={{
                width: "100%",
                maxWidth: "680px",
                height: "auto",
                display: "block",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.7))",
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-split-grid > div:first-child {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
