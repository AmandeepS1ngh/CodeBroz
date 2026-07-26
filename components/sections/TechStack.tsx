"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    name: "Frontend",
    color: "#3B82F6",
    techs: [
      { name: "React", emoji: "⚛️" },
      { name: "Next.js", emoji: "▲" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "Tailwind", emoji: "🎨" },
      { name: "Framer", emoji: "🌀" },
    ],
  },
  {
    name: "Backend",
    color: "#60A5FA",
    techs: [
      { name: "Node.js", emoji: "🟢" },
      { name: "Python", emoji: "🐍" },
      { name: "FastAPI", emoji: "⚡" },
      { name: "GraphQL", emoji: "◈" },
      { name: "tRPC", emoji: "🔗" },
    ],
  },
  {
    name: "Database",
    color: "#6366F1",
    techs: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "Redis", emoji: "🔴" },
      { name: "Supabase", emoji: "⚡" },
      { name: "Prisma", emoji: "◆" },
    ],
  },
  {
    name: "Cloud",
    color: "#8B5CF6",
    techs: [
      { name: "AWS", emoji: "☁️" },
      { name: "GCP", emoji: "🌐" },
      { name: "Vercel", emoji: "▲" },
      { name: "Docker", emoji: "🐳" },
      { name: "Kubernetes", emoji: "⎈" },
    ],
  },
  {
    name: "AI / ML",
    color: "#06B6D4",
    techs: [
      { name: "OpenAI", emoji: "🤖" },
      { name: "LangChain", emoji: "🔗" },
      { name: "Hugging Face", emoji: "🤗" },
      { name: "Pinecone", emoji: "🌲" },
      { name: "Whisper", emoji: "🎤" },
    ],
  },
  {
    name: "DevOps",
    color: "#38BDF8",
    techs: [
      { name: "GitHub Actions", emoji: "⚙️" },
      { name: "Terraform", emoji: "🏗️" },
      { name: "Nginx", emoji: "🛡️" },
      { name: "Prometheus", emoji: "📊" },
      { name: "Grafana", emoji: "📈" },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p className="section-label">Technologies</p>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Built With the{" "}
            <span className="gradient-text">Best Tools.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We pick the right technology for each challenge — not just the popular one.
          </p>
        </motion.div>

        {/* Categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="tech-grid"
        >
          {techCategories.map((cat, catI) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catI * 0.1 }}
              style={{
                padding: "28px",
                borderRadius: "20px",
                background: "rgba(15, 23, 42, 0.6)",
                border: `1px solid ${cat.color}25`,
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ borderColor: `${cat.color}50`, y: -4 }}
            >
              {/* Background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "150px",
                  height: "150px",
                  background: `radial-gradient(ellipse, ${cat.color}15, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: cat.color,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }}
                />
                <h3
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: cat.color,
                  }}
                >
                  {cat.name}
                </h3>
              </div>

              {/* Techs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {cat.techs.map((tech, techI) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catI * 0.1 + techI * 0.05 + 0.3 }}
                    whileHover={{ x: 6 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      background: "rgba(59, 130, 246, 0.03)",
                      border: "1px solid rgba(59, 130, 246, 0.08)",
                      cursor: "default",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${cat.color}15`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}35`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.08)";
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{tech.emoji}</span>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#E2E8F0" }}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .tech-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
