"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NexaFlow CRM",
    category: "SaaS Platform",
    description:
      "A full-stack CRM platform for real estate agencies with AI-powered lead scoring, automated follow-ups, and a real-time analytics dashboard.",
    tags: ["Next.js", "PostgreSQL", "AI", "Stripe"],
    gradient: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
    accentColor: "#3B82F6",
    stats: ["+340% Lead Conversion", "50K+ Records"],
  },
  {
    title: "AutoPulse AI",
    category: "AI Automation",
    description:
      "Intelligent document processing pipeline using GPT-4 Vision to extract, classify, and route business documents with 98% accuracy.",
    tags: ["Python", "OpenAI", "FastAPI", "Redis"],
    gradient: "linear-gradient(135deg, #3730A3 0%, #6366F1 100%)",
    accentColor: "#6366F1",
    stats: ["98% Accuracy", "10K+ docs/day"],
  },
  {
    title: "ShopStack Commerce",
    category: "E-Commerce",
    description:
      "High-performance headless e-commerce platform handling Black Friday traffic spikes with sub-100ms load times globally.",
    tags: ["Next.js", "Shopify", "Vercel", "Edge"],
    gradient: "linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)",
    accentColor: "#06B6D4",
    stats: ["<100ms Load", "99.99% Uptime"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section" ref={ref} style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "72px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p className="section-label">Featured Work</p>
            <h2 className="section-title">
              Projects That{" "}
              <span className="gradient-text">Drive Results.</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "#94A3B8",
              maxWidth: "300px",
              lineHeight: "1.7",
            }}
          >
            Hand-picked case studies showing real impact delivered to real businesses.
          </p>
        </motion.div>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(59, 130, 246, 0.12)",
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1.2fr 0.8fr" : "0.8fr 1.2fr",
                minHeight: "320px",
                transition: "border-color 0.3s ease",
                cursor: "default",
              }}
              className="project-card"
              whileHover={{ borderColor: `${project.accentColor}50` }}
            >
              {/* Content panel */}
              <div
                style={{
                  padding: "48px",
                  background: "rgba(15, 23, 42, 0.6)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  order: i % 2 === 0 ? 1 : 2,
                }}
              >
                <div>
                  {/* Category */}
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "100px",
                      fontSize: "11px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: project.accentColor,
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}30`,
                      display: "inline-block",
                      marginBottom: "20px",
                    }}
                  >
                    {project.category}
                  </span>

                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      color: "#fff",
                      marginBottom: "16px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "#94A3B8",
                      lineHeight: "1.75",
                      marginBottom: "24px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "5px 12px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#94A3B8",
                          background: "rgba(59, 130, 246, 0.06)",
                          border: "1px solid rgba(59, 130, 246, 0.12)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "24px" }}>
                    {project.stats.map((stat) => (
                      <div key={stat} style={{ fontSize: "13px", color: project.accentColor, fontWeight: "600" }}>
                        ↑ {stat}
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ x: 4, scale: 1.02 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#fff",
                      background: "none",
                      border: `1px solid ${project.accentColor}50`,
                      borderRadius: "10px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = project.accentColor;
                      (e.currentTarget as HTMLElement).style.background = `${project.accentColor}20`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${project.accentColor}50`;
                      (e.currentTarget as HTMLElement).style.background = "none";
                    }}
                  >
                    View Case Study
                    <ArrowUpRight size={14} />
                  </motion.button>
                </div>
              </div>

              {/* Visual panel */}
              <div
                style={{
                  background: project.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  order: i % 2 === 0 ? 2 : 1,
                  minHeight: "200px",
                }}
              >
                {/* Decorative elements */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.15), transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30%",
                    right: "-20%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.2)",
                  }}
                />

                {/* Project number */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    fontSize: "96px",
                    fontWeight: "900",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  0{i + 1}
                </div>

                {/* Tech icon cluster */}
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: "600",
                        background: "rgba(0,0,0,0.4)",
                        color: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
          .project-card > div:last-child {
            min-height: 160px !important;
            order: 1 !important;
          }
          .project-card > div:first-child {
            order: 2 !important;
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
