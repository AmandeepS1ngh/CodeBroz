"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Link2, Mail, Share2 } from "lucide-react";
import CodeBrozLogo from "@/components/ui/CodeBrozLogo";

const footerLinks = {
  Services: [
    "Web Development",
    "AI Integration",
    "SaaS Development",
    "Automation",
    "Backend APIs",
    "Cloud Deployment",
  ],
  Company: ["About", "Projects", "Process", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const socials = [
  { icon: GitBranch, href: "https://github.com", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Share2, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@codebroz.dev", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(59, 130, 246, 0.12)",
        padding: "80px 24px 40px",
        position: "relative",
        overflow: "hidden",
        background: "#040711",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "64px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <CodeBrozLogo size="md" showTagline={true} />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#94A3B8",
                lineHeight: "1.7",
                maxWidth: "280px",
                marginBottom: "28px",
              }}
            >
              A boutique software development studio engineering scalable
              software solutions for ambitious businesses.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(59, 130, 246, 0.05)",
                    border: "1px solid rgba(59, 130, 246, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#3B82F6";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(59, 130, 246, 0.4)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(59, 130, 246, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(59, 130, 246, 0.15)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(59, 130, 246, 0.05)";
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "#94A3B8",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#60A5FA")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#94A3B8")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(59, 130, 246, 0.12)",
            marginBottom: "32px",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#64748B" }}>
            © {new Date().getFullYear()} CodeBroz. All rights reserved. BUILD • SOLVE • GROW.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#94A3B8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#64748B")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
