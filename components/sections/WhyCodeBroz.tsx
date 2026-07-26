"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, CheckCircle2 } from "lucide-react";

const comparisons = [
  {
    bad: "Generic Templates",
    good: "Custom Engineering",
  },
  {
    bad: "Poor Communication",
    good: "Transparent Communication",
  },
  {
    bad: "Quick Fixes & Hacks",
    good: "Scalable Architecture",
  },
  {
    bad: "Messy, Undocumented Code",
    good: "Clean, Maintainable Code",
  },
  {
    bad: "Disappears After Launch",
    good: "Long-Term Partnership",
  },
  {
    bad: "Missed Deadlines",
    good: "Agile, On-Time Delivery",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "3×", label: "Avg. Performance Boost" },
  { number: "24/7", label: "Support Available" },
];

export default function WhyCodeBroz() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            The CodeBroz{" "}
            <span className="gradient-text">Difference.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We don&apos;t just write code. We engineer solutions that scale, perform, and last.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            background: "rgba(15, 23, 42, 0.5)",
            marginBottom: "80px",
          }}
        >
          {/* Column Headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 60px 1fr",
              background: "rgba(59, 130, 246, 0.05)",
              borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
            }}
          >
            <div
              style={{
                padding: "20px 32px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#64748B",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Others
            </div>
            <div />
            <div
              style={{
                padding: "20px 32px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#3B82F6",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              CodeBroz ✦
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={row.bad}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 60px 1fr",
                borderBottom:
                  i < comparisons.length - 1
                    ? "1px solid rgba(59, 130, 246, 0.08)"
                    : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(59, 130, 246, 0.02)",
                transition: "background 0.2s ease",
              }}
              whileHover={{ background: "rgba(59, 130, 246, 0.05)" }}
            >
              {/* Bad */}
              <div
                style={{
                  padding: "20px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <X size={16} color="#EF4444" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "15px", color: "#64748B", textDecoration: "line-through" }}>
                  {row.bad}
                </span>
              </div>

              {/* VS Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderLeft: "1px solid rgba(59, 130, 246, 0.08)",
                  borderRight: "1px solid rgba(59, 130, 246, 0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "#475569",
                    letterSpacing: "0.05em",
                  }}
                >
                  VS
                </span>
              </div>

              {/* Good */}
              <div
                style={{
                  padding: "20px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <CheckCircle2 size={16} color="#3B82F6" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "15px",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  {row.good}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              style={{
                padding: "32px 24px",
                borderRadius: "20px",
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(59, 130, 246, 0.12)",
                textAlign: "center",
              }}
              whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.3)" }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                  marginBottom: "8px",
                  background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #93C5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#94A3B8",
                  fontWeight: "500",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
