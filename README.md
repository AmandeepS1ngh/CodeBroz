# CodeBroz — Boutique Software Development Studio

> **BUILD • SOLVE • GROW**  
> *Engineering Software That Businesses Can Rely On.*

[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

## 🌟 Overview

**CodeBroz** is a modern, high-performance portfolio website built for a boutique software development studio. Inspired by world-class tech agencies such as **Linear**, **Vercel**, **Stripe**, and **Framer**, the site showcases custom web application engineering, AI/ML integrations, SaaS product development, enterprise automation, and cloud solutions.

### 🎨 Brand Identity & Design System
* **Primary Color Palette:** Electric Blue (`#3B82F6` / `#2563EB`) & Indigo (`#6366F1`)
* **Background Theme:** Deep Midnight Navy (`#060913` / `#0B1120`)
* **Aesthetics:** Glassmorphism, subtle radial spotlights, ambient glowing borders, responsive typography, and smooth micro-animations.

---

## ✨ Features & Included Sections (10/10)

1. **Header & Navigation:** Sticky glassmorphism bar with smooth blur on scroll, mobile drawer menu, and clean vector SVG logo mark.
2. **Hero Section:** High-impact statement typography, founders portrait integration with smooth slide-in animations, trust badges, and primary/secondary CTAs.
3. **Problem Statement:** 4 interactive problem-to-solution cards with "CodeBroz Fix" dividers and hover glow effects.
4. **Services Grid:** 8 service cards covering Web Development, AI Integration, SaaS, Automation, APIs, Database Engineering, Cloud, and Maintenance.
5. **Why CodeBroz:** Side-by-side comparison table (*Others vs CodeBroz*) paired with an animated key metrics statistics bar.
6. **Featured Projects:** Case studies showcasing real-world impact with gradient visual panels, tech badges, and performance highlights.
7. **Tech Stack Matrix:** Categorized technology grids (Frontend, Backend, Database, Cloud, AI/ML, DevOps) with hover slide-in interactions.
8. **Development Process:** 7-step interactive timeline with glowing numbered badges and duration pills.
9. **Testimonials Carousel:** Glass card carousel powered by `AnimatePresence` with slide controls, star ratings, and avatar glows.
10. **FAQ Accordion:** 7 collapsible questions with height transitions and active electric blue highlight borders.
11. **Contact Section:** Full project inquiry form with validation, budget selection, response badge, and success confirmation state.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16.2](https://nextjs.org/) (App Router & Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens (`globals.css`) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis 1.3](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

Follow these simple steps to set up and run the project locally on your machine.

### 📋 Prerequisites

Ensure you have the following installed:
* **Node.js** (v18.17.0 or higher recommended)
* **npm** (v9.x or higher) or **yarn** / **pnpm** / **bun**

---

### 📥 Step-by-Step Installation & Execution

#### 1. Clone the Repository
```bash
git clone https://github.com/AmandeepS1ngh/CodeBroz.git
cd CodeBroz
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start the Development Server
```bash
npm run dev
```

Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)** to view the application live with Hot Module Replacement (HMR).

---

## ⚙️ Available Scripts

In the project directory, you can run:

* `npm run dev` — Runs the app in development mode using Next.js Turbopack at `http://localhost:3000`.
* `npm run build` — Builds the optimized production bundle and runs TypeScript type checks.
* `npm start` — Starts the production server after running `npm run build`.
* `npm run lint` — Runs ESLint to inspect code formatting and syntax consistency.

---

## 📂 Project Structure

```
codebroz-site/
├── app/
│   ├── globals.css          # Core design system tokens, animations & glass styles
│   ├── layout.tsx           # Root layout with SEO metadata & Inter font setup
│   └── page.tsx             # Main landing page assembling all sections & Lenis smooth scroll
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky blur navigation & mobile drawer
│   │   └── Footer.tsx       # Minimal studio footer with brand links & social icons
│   ├── sections/
│   │   ├── Hero.tsx         # Headline, CTAs, trust badges & founders photo
│   │   ├── Problem.tsx      # Problem-to-solution matrix
│   │   ├── Services.tsx     # 8 service cards grid
│   │   ├── WhyCodeBroz.tsx  # Comparison table & stats
│   │   ├── Projects.tsx     # Featured case studies with gradient panels
│   │   ├── TechStack.tsx    # 6 categorized technology grids
│   │   ├── Process.tsx      # 7-step vertical timeline
│   │   ├── Testimonials.tsx # Glass card carousel
│   │   ├── FAQ.tsx          # Animated accordion
│   │   └── Contact.tsx      # Interactive contact & project request form
│   └── ui/
│       ├── CodeBrozLogo.tsx        # Vector SVG brand mark & text
│       ├── FloatingParticles.tsx   # Ambient electric blue & cyan particles
│       └── ArchitectureDiagram.tsx # Flow diagram component
├── public/
│   ├── logo.png             # Official brand logo
│   └── founders-transparent.png # Founders cutout image
├── lib/
│   └── utils.ts             # Helper utilities (clsx & tailwind-merge)
└── package.json             # Dependencies & scripts
```

---

## 🌐 Public Tunneling (Sharing Local Dev Site)

If you want to create a temporary shareable URL for your local development server, run:

```bash
# Using Localtunnel
npx localtunnel --port 3000

# Or using Cloudflare Tunnel
npx @cloudflare/cloudflared tunnel --url http://localhost:3000
```

---

## 🚢 Deployment

The easiest way to deploy this application is to use **[Vercel](https://vercel.com/)**:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import your project into Vercel.
3. Vercel will automatically detect Next.js and deploy your application.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

### 👨‍💻 Created by CodeBroz
Engineering Software That Scales.  
**Contact:** [hello@codebroz.dev](mailto:hello@codebroz.dev) • **Website:** [codebroz.dev](https://codebroz.dev)
