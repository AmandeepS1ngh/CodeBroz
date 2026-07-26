"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Brain, Layers, Zap, Server, Database, Cloud, Shield
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description:
      "Blazing-fast, SEO-optimised web applications built with Next.js, React, and modern tooling that scale with your business.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Embed AI into your product — chatbots, recommendation engines, document processing, and LLM-powered workflows.",
    tags: ["OpenAI", "LangChain", "Python"],
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "Full-cycle SaaS platforms from auth and billing to multi-tenancy — built to acquire, convert, and retain users.",
    tags: ["Stripe", "Auth", "Multi-tenant"],
  },
  {
    icon: Zap,
    title: "Automation & Workflows",
    description:
      "Eliminate manual work with intelligent automation pipelines, webhooks, and custom integrations.",
    tags: ["n8n", "Zapier", "Puppeteer"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Production-grade REST & GraphQL APIs, microservices, and real-time systems engineered for reliability.",
    tags: ["Node.js", "FastAPI", "GraphQL"],
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "Optimised schemas, query performance tuning, data migrations, and real-time sync for any scale.",
    tags: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Infrastructure-as-code, CI/CD pipelines, container orchestration, and zero-downtime deployments.",
    tags: ["AWS", "GCP", "Docker"],
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing security updates, performance monitoring, bug fixes, and feature additions — we're your long-term partner.",
    tags: ["Monitoring", "Security", "24/7"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section" ref={ref} style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "72px" }}
        >
          <p className="section-label">What We Build</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h2 className="section-title" style={{ maxWidth: "560px" }}>
              Services Built for{" "}
              <span className="gradient-text">Real-World Scale.</span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#94A3B8",
                maxWidth: "340px",
                lineHeight: "1.7",
              }}
            >
              From solo startups to scaling enterprises, we deliver solutions
              that work in production — not just in demos.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="services-grid"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: "easeOut",
                }}
                className="service-card glass-hover"
                style={{
                  padding: "28px 24px",
                  borderRadius: "20px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(59, 130, 246, 0.12)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Hover gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at top left, rgba(59,130,246,0.12), transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                  className="card-glow"
                />

                {/* Icon */}
                <div className="service-icon-wrap" style={{ marginBottom: "20px" }}>
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#94A3B8",
                    lineHeight: "1.65",
                    marginBottom: "20px",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: "500",
                        color: "#60A5FA",
                        background: "rgba(59, 130, 246, 0.1)",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .service-card:hover .card-glow {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
