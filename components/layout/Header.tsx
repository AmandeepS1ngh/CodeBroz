"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CodeBrozLogo from "@/components/ui/CodeBrozLogo";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: "0 28px",
          height: "84px",
          display: "flex",
          alignItems: "center",
          background: scrolled
            ? "rgba(6, 9, 19, 0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(59, 130, 246, 0.15)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo (Zoomed in & clear) */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <CodeBrozLogo size="md" showTagline={true} />
          </motion.button>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary hidden-mobile"
              style={{ padding: "12px 24px", fontSize: "15px" }}
            >
              Book a Call
              <ArrowUpRight size={16} />
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-only"
              style={{
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                borderRadius: "12px",
                padding: "10px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "84px",
              left: "16px",
              right: "16px",
              zIndex: 998,
              background: "rgba(11, 17, 32, 0.98)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#94A3B8",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background =
                      "rgba(59,130,246,0.1)";
                    (e.target as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = "none";
                    (e.target as HTMLElement).style.color = "#94A3B8";
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary"
                style={{ marginTop: "12px", justifyContent: "center" }}
              >
                Book a Call
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
