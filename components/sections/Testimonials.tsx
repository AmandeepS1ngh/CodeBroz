"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "NexaFlow Inc.",
    avatar: "SM",
    avatarColor: "#3B82F6",
    rating: 5,
    text:
      "CodeBroz completely transformed our tech infrastructure. They delivered a production-grade CRM in 6 weeks that handles 10,000+ daily active users without a single downtime. The code quality is exceptional.",
  },
  {
    name: "Arjun Patel",
    role: "CTO",
    company: "AutoPulse AI",
    avatar: "AP",
    avatarColor: "#6366F1",
    rating: 5,
    text:
      "We needed an AI pipeline that could process thousands of documents daily with near-perfect accuracy. CodeBroz delivered exactly that — and the architecture they built lets us scale effortlessly.",
  },
  {
    name: "Emma Rodriguez",
    role: "Founder",
    company: "ShopStack",
    avatar: "ER",
    avatarColor: "#06B6D4",
    rating: 5,
    text:
      "Our Black Friday sale hit record numbers and the site didn't budge. Load times under 100ms globally. CodeBroz's technical expertise and proactive communication made this project a genuine pleasure.",
  },
  {
    name: "Marcus Chen",
    role: "Product Manager",
    company: "Techbridge Labs",
    avatar: "MC",
    avatarColor: "#8B5CF6",
    rating: 5,
    text:
      "What sets CodeBroz apart is their engineering mindset. They don't just build features — they think about scalability, maintainability, and business impact from day one. Highly recommended.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p className="section-label">Client Feedback</p>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            What Clients{" "}
            <span className="gradient-text">Say About Us.</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Main card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                padding: "52px 48px",
                borderRadius: "24px",
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(59, 130, 246, 0.1)",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  right: "40px",
                  color: "rgba(59, 130, 246, 0.15)",
                }}
              >
                <Quote size={64} />
              </div>

              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "300px",
                  height: "200px",
                  background: `radial-gradient(ellipse at top left, ${testimonials[current].avatarColor}10, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "28px" }}>
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#3B82F6" color="#3B82F6" />
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.75",
                  color: "#E2E8F0",
                  fontStyle: "italic",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${testimonials[current].avatarColor}, ${testimonials[current].avatarColor}88)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#fff",
                    flexShrink: 0,
                    boxShadow: `0 0 15px ${testimonials[current].avatarColor}40`,
                  }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#fff",
                      marginBottom: "2px",
                    }}
                  >
                    {testimonials[current].name}
                  </div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>
                    {testimonials[current].role} at{" "}
                    <span style={{ color: testimonials[current].avatarColor, fontWeight: "600" }}>
                      {testimonials[current].company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.2)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.2)";
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  animate={{
                    width: i === current ? "24px" : "8px",
                    background: i === current ? "#3B82F6" : "rgba(255,255,255,0.2)",
                  }}
                  style={{
                    height: "8px",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.2)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(59, 130, 246, 0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.2)";
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
