"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of projects does CodeBroz take on?",
    a: "We specialise in custom web applications, SaaS platforms, AI/ML integrations, backend APIs, and automation workflows. We work with startups, SMBs, and enterprises across any industry that needs world-class software engineering.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A focused MVP typically takes 4–8 weeks. A full-scale SaaS platform can range from 2–6 months. After our discovery call, we provide a detailed roadmap with clear milestones before we start.",
  },
  {
    q: "What does your pricing look like?",
    a: "We offer project-based pricing and retainer packages. Projects start from ₹2L for focused MVPs. Retainers for ongoing development and support start from ₹80K/month. We're transparent about costs from day one — no surprises.",
  },
  {
    q: "Will I own the code and IP?",
    a: "Absolutely. You own 100% of the code, intellectual property, and infrastructure. We hand over everything upon project completion — full source code, documentation, and deployment access.",
  },
  {
    q: "How do you handle communication during a project?",
    a: "We use a dedicated Slack channel, weekly video check-ins, and a shared project dashboard. You'll have complete visibility into every sprint, every commit, and every decision. No black boxes.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer structured maintenance retainers that include bug fixes, security updates, performance monitoring, and feature development. We're built to be your long-term engineering partner, not a one-and-done vendor.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Yes. We're experienced in code audits, refactoring legacy systems, and adding new features to existing codebases. We'll do a thorough technical review first and give you an honest assessment of what's needed.",
  },
];

function FAQItem({ item, i, inView }: { item: typeof faqs[0]; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      style={{
        borderRadius: "16px",
        border: open ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.12)",
        overflow: "hidden",
        background: open ? "rgba(59, 130, 246, 0.06)" : "rgba(15, 23, 42, 0.6)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "24px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: open ? "#60A5FA" : "#E2E8F0",
            lineHeight: "1.4",
            transition: "color 0.2s ease",
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: open ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.06)",
            border: open ? "1px solid rgba(59, 130, 246, 0.4)" : "1px solid rgba(59, 130, 246, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? "#3B82F6" : "#94A3B8",
            transition: "all 0.3s ease",
          }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 28px 24px",
                fontSize: "15px",
                color: "#94A3B8",
                lineHeight: "1.75",
                borderTop: "1px solid rgba(59, 130, 246, 0.1)",
                paddingTop: "20px",
              }}
            >
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section" ref={ref} style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p className="section-label">FAQ</p>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Frequently Asked{" "}
            <span className="gradient-text">Questions.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Everything you need to know about working with CodeBroz.
          </p>
        </motion.div>

        {/* Accordion */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
