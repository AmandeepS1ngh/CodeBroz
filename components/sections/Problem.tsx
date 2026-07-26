"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, TrendingDown, Puzzle, Sparkles } from "lucide-react";

const problems = [
  {
    icon: Clock,
    problem: "Slow, Outdated Websites",
    description: "Legacy code and poor architecture drag your business to a halt.",
    solution: "We build high-performance apps with modern frameworks like Next.js, optimized for speed and Core Web Vitals.",
    color: "#3B82F6",
  },
  {
    icon: AlertTriangle,
    problem: "Manual Repetitive Work",
    description: "Hours wasted on tasks that could be fully automated.",
    solution: "Custom automation pipelines using AI and modern tooling that save you 100s of hours monthly.",
    color: "#6366F1",
  },
  {
    icon: TrendingDown,
    problem: "Poor Scalability",
    description: "Systems that crash under load and can't grow with your business.",
    solution: "Cloud-native, horizontally scalable architectures designed to handle millions of users.",
    color: "#06B6D4",
  },
  {
    icon: Puzzle,
    problem: "Disconnected Systems",
    description: "Data siloed across tools with no unified workflow.",
    solution: "Seamless API integrations and custom dashboards that connect your entire tech ecosystem.",
    color: "#8B5CF6",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p className="section-label">The Problem</p>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Software Should Solve Problems,{" "}
            <span className="gradient-text">Not Create Them.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Most businesses struggle with software that holds them back. We fix that.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
          className="problem-grid"
        >
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                style={{
                  padding: "32px",
                  borderRadius: "20px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(59, 130, 246, 0.12)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -6,
                  borderColor: `${item.color}50`,
                  boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${item.color}15`,
                }}
              >
                {/* Background accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "200px",
                    height: "200px",
                    background: `radial-gradient(ellipse at top right, ${item.color}10, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={20} />
                </div>

                {/* Problem */}
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.problem}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#94A3B8",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                  }}
                >
                  {item.description}
                </p>

                {/* Divider with arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      height: "1px",
                      flex: 1,
                      background: `linear-gradient(to right, ${item.color}50, transparent)`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#60A5FA",
                    }}
                  >
                    <Sparkles size={12} />
                    CodeBroz Fix
                  </div>
                  <div
                    style={{
                      height: "1px",
                      flex: 1,
                      background: `linear-gradient(to left, transparent, rgba(59,130,246,0.3))`,
                    }}
                  />
                </div>

                {/* Solution */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#E2E8F0",
                    lineHeight: "1.65",
                    borderLeft: "2px solid #3B82F6",
                    paddingLeft: "14px",
                  }}
                >
                  {item.solution}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
