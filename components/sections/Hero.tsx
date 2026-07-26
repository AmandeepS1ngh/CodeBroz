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

          {/* ─── RIGHT: Founders Photo Showcase ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Ambient Background Glow Ring */}
            <div
              style={{
                position: "absolute",
                width: "90%",
                height: "90%",
                borderRadius: "32px",
                background: "radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, rgba(99,102,241,0.15) 50%, transparent 80%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Founder Card Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                borderRadius: "28px",
                background: "rgba(11, 17, 32, 0.75)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(59, 130, 246, 0.15)",
                padding: "16px",
                overflow: "hidden",
              }}
            >
              {/* Photo Wrapper */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 17, 32, 0.95) 100%)",
                }}
              >
                {/* Founders Image */}
                <img
                  src="/founders-transparent.png"
                  onError={(e) => {
                    // Fallback to founders.jpg if transparent png isn't loaded yet
                    (e.currentTarget as HTMLImageElement).src = "/founders.jpg";
                  }}
                  alt="CodeBroz Founders"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 14px",
                    borderRadius: "100px",
                    background: "rgba(11, 17, 32, 0.85)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Users size={14} color="#3B82F6" />
                  <span style={{ fontSize: "12px", color: "#fff", fontWeight: "600" }}>
                    Founders &amp; Engineering Leads
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    background: "rgba(15, 23, 42, 0.85)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    backdropFilter: "blur(16px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#fff" }}>
                      Amandeep &amp; Co-Founder
                    </div>
                    <div style={{ fontSize: "12px", color: "#60A5FA", fontWeight: "500" }}>
                      CodeBroz Engineering Leadership
                    </div>
                  </div>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(59, 130, 246, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#3B82F6",
                    }}
                  >
                    <Award size={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
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
