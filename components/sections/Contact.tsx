"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  Link2,
  GitBranch,
  MessageCircle,
  Send,
} from "lucide-react";

const budgetOptions = [
  "Under ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹10L",
  "₹10L – ₹25L",
  "₹25L+",
  "Let's discuss",
];

const socials = [
  {
    icon: Mail,
    label: "hello@codebroz.dev",
    href: "mailto:hello@codebroz.dev",
    color: "#3B82F6",
  },
  {
    icon: Link2,
    label: "linkedin.com/company/codebroz",
    href: "https://linkedin.com",
    color: "#60A5FA",
  },
  {
    icon: GitBranch,
    label: "github.com/codebroz",
    href: "https://github.com",
    color: "#6366F1",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(59, 130, 246, 0.15)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" className="section" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label" style={{ marginBottom: "20px" }}>
              Start a Project
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: "800",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together.</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#94A3B8",
                lineHeight: "1.75",
                marginBottom: "48px",
              }}
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours
              with a tailored proposal.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 6 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(59, 130, 246, 0.12)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${color}50`;
                    (e.currentTarget as HTMLElement).style.background = `${color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.12)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.6)";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: `${color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <span style={{ fontSize: "14px", color: "#94A3B8" }}>
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Response time badge */}
            <div
              style={{
                marginTop: "32px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                borderRadius: "100px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#3B82F6",
                }}
              />
              <span style={{ fontSize: "13px", color: "#60A5FA", fontWeight: "600" }}>
                Typically responds within 24 hours
              </span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              padding: "44px",
              borderRadius: "24px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(59, 130, 246, 0.15)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(59, 130, 246, 0.1)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "400px",
                  textAlign: "center",
                  gap: "24px",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(59, 130, 246, 0.2)",
                    border: "2px solid rgba(59, 130, 246, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    color: "#3B82F6",
                  }}
                >
                  ✓
                </motion.div>
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#94A3B8", fontSize: "15px", lineHeight: "1.6" }}>
                    Thanks for reaching out. We&apos;ll review your project and get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "32px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Tell us about your project
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#94A3B8", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(59, 130, 246, 0.6)";
                        (e.target as HTMLInputElement).style.background = "rgba(59, 130, 246, 0.06)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(59, 130, 246, 0.15)";
                        (e.target as HTMLInputElement).style.background = "rgba(15, 23, 42, 0.6)";
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#94A3B8", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(59, 130, 246, 0.6)";
                        (e.target as HTMLInputElement).style.background = "rgba(59, 130, 246, 0.06)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(59, 130, 246, 0.15)";
                        (e.target as HTMLInputElement).style.background = "rgba(15, 23, 42, 0.6)";
                      }}
                    />
                  </div>
                </div>

                {/* Company */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#94A3B8", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(59, 130, 246, 0.6)";
                      (e.target as HTMLInputElement).style.background = "rgba(59, 130, 246, 0.06)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(59, 130, 246, 0.15)";
                      (e.target as HTMLInputElement).style.background = "rgba(15, 23, 42, 0.6)";
                    }}
                  />
                </div>

                {/* Budget */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#94A3B8", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Budget Range
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLSelectElement).style.borderColor = "rgba(59, 130, 246, 0.6)";
                      (e.target as HTMLSelectElement).style.background = "rgba(59, 130, 246, 0.06)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLSelectElement).style.borderColor = "rgba(59, 130, 246, 0.15)";
                      (e.target as HTMLSelectElement).style.background = "rgba(15, 23, 42, 0.6)";
                    }}
                  >
                    <option value="" style={{ background: "#0B1120" }}>Select budget range</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0B1120" }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#94A3B8", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project goals, challenges, and what you'd like to build..."
                    value={formState.description}
                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: "none",
                      lineHeight: "1.6",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "rgba(59, 130, 246, 0.6)";
                      (e.target as HTMLTextAreaElement).style.background = "rgba(59, 130, 246, 0.06)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "rgba(59, 130, 246, 0.15)";
                      (e.target as HTMLTextAreaElement).style.background = "rgba(15, 23, 42, 0.6)";
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: "16px",
                    padding: "16px",
                  }}
                >
                  Send Message
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 540px) {
          .contact-grid > div:last-child {
            padding: 28px !important;
          }
          .contact-grid form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
