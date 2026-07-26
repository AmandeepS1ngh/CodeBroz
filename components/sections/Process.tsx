"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your business, goals, and challenges. A thorough discovery session ensures we build the right thing.",
    duration: "1–2 days",
    color: "#3B82F6",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Technical architecture, project roadmap, milestones, and tech stack decisions — all documented transparently.",
    duration: "2–3 days",
    color: "#60A5FA",
  },
  {
    number: "03",
    title: "Design",
    description:
      "UI/UX wireframes and high-fidelity prototypes reviewed with you before a single line of code is written.",
    duration: "3–5 days",
    color: "#6366F1",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Agile sprints with daily updates. Clean code, TypeScript-strict, fully tested, and peer-reviewed at every step.",
    duration: "2–8 weeks",
    color: "#8B5CF6",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Comprehensive QA — unit, integration, E2E, performance, and security testing across all target devices.",
    duration: "1 week",
    color: "#06B6D4",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Zero-downtime deployment to production with monitoring, error tracking, and rollback strategies in place.",
    duration: "1–2 days",
    color: "#38BDF8",
  },
  {
    number: "07",
    title: "Support",
    description:
      "Ongoing maintenance, feature additions, and performance monitoring. We're your long-term engineering partner.",
    duration: "Ongoing",
    color: "#3B82F6",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section" ref={ref} style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <p className="section-label">How We Work</p>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Our Development{" "}
            <span className="gradient-text">Process.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A battle-tested process that ensures every project is delivered on time,
            on budget, and above expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            style={{
              position: "absolute",
              left: "28px",
              top: "28px",
              bottom: "28px",
              width: "1px",
              background: "linear-gradient(to bottom, #3B82F6, rgba(99,102,241,0.3), transparent)",
              transformOrigin: "top",
            }}
          />

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                style={{
                  display: "flex",
                  gap: "32px",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                {/* Number badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: "800",
                    color: step.color,
                    flexShrink: 0,
                    zIndex: 1,
                    letterSpacing: "-0.01em",
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    flex: 1,
                    padding: "20px 28px",
                    borderRadius: "16px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(59, 130, 246, 0.12)",
                    marginBottom: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${step.color}40`;
                    (e.currentTarget as HTMLElement).style.background = `${step.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.12)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.6)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "#fff",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: step.color,
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                        padding: "3px 10px",
                        borderRadius: "100px",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#94A3B8",
                      lineHeight: "1.65",
                    }}
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
