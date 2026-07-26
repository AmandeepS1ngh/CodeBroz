"use client";

import { motion } from "framer-motion";

const layers = [
  { label: "Browser", icon: "🌐", color: "#3B82F6" },
  { label: "Frontend", icon: "⚛️", color: "#60A5FA" },
  { label: "API Layer", icon: "🔗", color: "#6366F1" },
  { label: "Backend", icon: "⚙️", color: "#06B6D4" },
  { label: "Database", icon: "🗄️", color: "#8B5CF6" },
  { label: "Cloud", icon: "☁️", color: "#2563EB" },
];

export default function ArchitectureDiagram() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0",
        width: "100%",
        maxWidth: "340px",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: "-40px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.06) 50%, transparent 80%)",
          pointerEvents: "none",
          borderRadius: "40px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "0",
          width: "100%",
          position: "relative",
        }}
      >
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ x: 6, scale: 1.02 }}
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "14px",
                background: "rgba(15, 23, 42, 0.7)",
                border: `1px solid ${layer.color}30`,
                display: "flex",
                alignItems: "center",
                gap: "14px",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left accent line */}
              <div
                style={{
                  position: "absolute",
                  left: 0, top: 0, bottom: 0,
                  width: "3px",
                  background: layer.color,
                  borderRadius: "0 2px 2px 0",
                  opacity: 0.8,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "36px", height: "36px",
                  borderRadius: "10px",
                  background: `${layer.color}20`,
                  border: `1px solid ${layer.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", flexShrink: 0,
                }}
              >
                {layer.icon}
              </div>

              {/* Label */}
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#fff", letterSpacing: "-0.01em" }}>
                  {layer.label}
                </div>
                <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>
                  {i === 0 && "User Interface"}
                  {i === 1 && "React / Next.js"}
                  {i === 2 && "REST / GraphQL"}
                  {i === 3 && "Node.js / Python"}
                  {i === 4 && "PostgreSQL / Redis"}
                  {i === 5 && "AWS / GCP / Vercel"}
                </div>
              </div>

              {/* Status dot */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{
                  marginLeft: "auto",
                  width: "6px", height: "6px",
                  borderRadius: "50%",
                  background: layer.color,
                  flexShrink: 0,
                }}
              />
            </motion.div>

            {/* Connector arrow */}
            {i < layers.length - 1 && (
              <div
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "4px 0", position: "relative",
                }}
              >
                {/* Animated data packets */}
                <motion.div
                  animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    width: "5px", height: "5px",
                    borderRadius: "50%",
                    background: layers[i + 1].color,
                    top: "2px",
                  }}
                />
                <div
                  style={{
                    width: "1px", height: "28px",
                    background: `linear-gradient(to bottom, ${layer.color}50, ${layers[i + 1].color}50)`,
                  }}
                />
                <div
                  style={{
                    width: 0, height: 0,
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderTop: `5px solid ${layers[i + 1].color}70`,
                    marginTop: "-2px",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Live indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: "20px",
          display: "flex", alignItems: "center", gap: "8px",
          padding: "8px 16px",
          borderRadius: "100px",
          background: "rgba(59, 130, 246, 0.1)",
          border: "1px solid rgba(59, 130, 246, 0.25)",
          alignSelf: "flex-start",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B82F6" }}
        />
        <span style={{ fontSize: "11px", color: "#60A5FA", fontWeight: "600" }}>
          System Online — 99.9% Uptime
        </span>
      </motion.div>
    </div>
  );
}
