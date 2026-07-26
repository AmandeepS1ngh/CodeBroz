"use client";

import { useEffect, useRef } from "react";

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 22;

    // Electric Blue particles
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 20 + 15;
      const opacity = Math.random() * 0.4 + 0.15;

      const el = document.createElement("div");
      el.style.cssText = `
        position: fixed;
        left: ${x}%;
        bottom: -10px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, ${opacity}), transparent);
        animation: float-up ${duration}s ${delay}s linear infinite;
        pointer-events: none;
        z-index: 0;
      `;
      container.appendChild(el);
    }

    // Indigo / Cyan particles
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 25 + 20;
      const opacity = Math.random() * 0.35 + 0.1;

      const el = document.createElement("div");
      el.style.cssText = `
        position: fixed;
        left: ${x}%;
        bottom: -10px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, ${opacity}), transparent);
        animation: float-up ${duration}s ${delay}s linear infinite;
        pointer-events: none;
        z-index: 0;
      `;
      container.appendChild(el);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
