"use client";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CodeBrozLogo({
  showTagline = true,
  size = "md",
  className = "",
}: LogoProps) {
  // Dimensions based on size
  const scaleMap = {
    sm: 0.8,
    md: 1.0,
    lg: 1.3,
  };

  const scale = scaleMap[size];

  return (
    <div
      className={`inline-flex flex-col items-start ${className}`}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: `${12 * scale}px` }}>
        {/* SVG Vector Mark - Exact match to CodeBroz logo icon */}
        <svg
          width={48 * scale}
          height={32 * scale}
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 0 16px rgba(59, 130, 246, 0.4))",
            flexShrink: 0,
          }}
        >
          <defs>
            <linearGradient id="brozGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Outer Capsule / CB Joined Shape */}
          {/* Left 'C' half */}
          <path
            d="M45 10 C 20 10, 8 23, 8 40 C 8 57, 20 70, 45 70 L 52 70 L 62 10 Z"
            fill="url(#navyGrad)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
          />

          {/* Right 'B' half */}
          <path
            d="M66 10 L 56 70 L 85 70 C 102 70, 112 58, 112 47 C 112 40, 105 35, 96 34 C 103 32, 108 27, 108 21 C 108 13, 98 10, 82 10 Z"
            fill="url(#brozGrad)"
          />

          {/* Inner Slanted Separator with </> code symbol */}
          {/* Slant slash */}
          <line
            x1="63"
            y1="14"
            x2="55"
            y2="66"
            stroke="#070A14"
            strokeWidth="5"
          />
          <line
            x1="63"
            y1="14"
            x2="55"
            y2="66"
            stroke="#60A5FA"
            strokeWidth="2.5"
          />

          {/* '<' code bracket */}
          <path
            d="M 46 34 L 40 40 L 46 46"
            stroke="#60A5FA"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* '>' code bracket */}
          <path
            d="M 72 34 L 78 40 L 72 46"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Brand Text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: `${24 * scale}px`,
              fontWeight: "800",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Code</span>
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginLeft: "1px",
              }}
            >
              Broz
            </span>
          </div>

          {showTagline && (
            <span
              style={{
                fontSize: `${8.5 * scale}px`,
                fontWeight: "700",
                letterSpacing: "0.26em",
                color: "#94A3B8",
                textTransform: "uppercase",
                marginTop: `${4 * scale}px`,
              }}
            >
              BUILD • SOLVE • GROW
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
