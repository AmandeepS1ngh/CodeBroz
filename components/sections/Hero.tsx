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

const studioStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "< 50ms", label: "Global Edge Speed" },
  { value: "99.99%", label: "System Reliability" },
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
        paddingTop: "130px",
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
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Radial Spotlights */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "750px",
          height: "750px",
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 70%)",
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
              zIndex: 2,
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
                fontSize: "clamp(40px, 5.2vw, 72px)",
                fontWeight: "800",
                lineHeight: "1.06",
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
                marginBottom: "32px",
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

            {/* Studio Key Highlights Pills */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "28px",
                flexWrap: "wrap",
                paddingTop: "20px",
                borderTop: "1px solid rgba(59, 130, 246, 0.12)",
                width: "100%",
                maxWidth: "580px",
              }}
            >
              {studioStats.map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                      color: "#3B82F6",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "12px", color: "#64748B", fontWeight: "500" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Seamless Clean Founders Cutout ─── */}
          <motion.div
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 1.1,
              delay: 0.2,
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
            {/* Deep Atmospheric Backlight Glow */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.22) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)",
                filter: "blur(40px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Zoomed & Clean Cutout Image without dark square box masks */}
            <motion.div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "760px",
                transform: "scale(1.12)",
                transformOrigin: "center right",
              }}
            >
              <motion.img
                src="/founders-transparent.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/founders.jpg";
                }}
                alt="CodeBroz Founders"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.7))",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
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
          .hero-split-grid > div:last-child > div {
            transform: scale(1) !important;
          }
        }
      `}</style>
    </section>
  );
}
