# Discimen — AI Transition Advisory for Regulated Enterprises

The marketing and thought-leadership website for **Discimen**, an independent advisory
firm that helps regulated enterprises make the transition from legacy SaaS to AI-native
operations. Live at **[discimen.com](https://discimen.com)**.

> A React + TypeScript single-page application, built with Vite and Tailwind CSS,
> deployed on Vercel.

---

## Contents

- [Mission](#mission)
- [What This Repository Is](#what-this-repository-is)
- [Technical Architecture](#technical-architecture)
- [Design System & Choices](#design-system--choices)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [How Discimen Operates](#how-discimen-operates)
- [Founders](#founders)
- [Maintenance Notes](#maintenance-notes)

---

## Mission

**Enterprise AI doesn't fail in the model. It fails in the org chart.**

Most large enterprises now *have* AI — pilots, copilots, proofs-of-concept. Almost none
have an AI-native operating model. The result is *momentum without movement*: the tools
change, the structure of the work does not.

Adoption is not the work. **Adaptation is the work.**

Discimen exists to close that gap. We help CFOs, CEOs, boards, and general counsel in
**energy & utilities, healthcare, manufacturing, automotive, and financial services**
navigate the shift from legacy SaaS to AI-native operations — with the risk discipline,
governance, and financial rigor a regulated enterprise actually requires.

We are deliberately **independent**. We do not resell a platform. We do not bill audit
hours. We do not hand over a top-down framework and leave. We are practitioners who have
designed and deployed agentic AI at Fortune scale — and that independence is the product.

### Proof point

Discimen's founding principal led an enterprise HR service-operations redesign for a
Fortune 25 automotive manufacturer:

| Outcome | Result |
|---|---|
| Annual HR cases brought into the redesigned workflow | **47,000** |
| Tier-1 resolution time | **4 days → 30 seconds** |
| First-contact resolution | **55% → 67%** |
| Operating savings | **$30–40M+ annualized run-rate at full deployment** |

This is end-to-end workflow reinvention — the practice McKinsey's *Rewired* research
ranks as the highest-correlated with realizing AI value at scale.

---

## What This Repository Is

This repository is the **Discimen website**: a single-page application that carries the
firm's mission, methodology, service lines, and founder credentials. It is the primary
digital front door for enterprise and insurance counterparties — and a live artifact
reviewed during supplier vetting.

It is, by design, a **content site**: fast, static, no backend, no database. Every
technology choice below serves one goal — a credible, quick, maintainable site that a
small firm fully controls.

---

## Technical Architecture

### Stack

| Layer | Choice | Version | Why |
|---|---|---|---|
| UI framework | **React** | 18.3 | Mature, universally understood, deep ecosystem |
| Language | **TypeScript** | 5.8 | Type safety across a growing multi-page site |
| Build tool | **Vite** | 6.4 | Near-instant dev server and HMR; fast production builds |
| Styling | **Tailwind CSS** | 3.4 | Utility-first; the design system lives in config, not CSS sprawl |
| Routing | **React Router DOM** | 6.30 | Client-side routing for the SPA |
| Icons | **lucide-react** | 0.263 | Consistent, lightweight, tree-shakeable |
| Class composition | **clsx**, **tailwind-merge**, **class-variance-authority** | — | Conditional, conflict-free class handling — no UI megaframework |
| Hosting | **Vercel** | — | Git-connected CI/CD, global edge CDN, zero-ops |

The dependency list is deliberately short. No Material UI, no Chakra, no component
megaframework — just React, Tailwind, and three small class-composition utilities. The
result is a tiny bundle, fast loads, and nothing to maintain that the firm did not
deliberately choose.

### Routing & page architecture

Routing is defined in `src/App.tsx`. A `<ScrollToTop />` helper resets scroll position
on every navigation. Six pages are live:

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Mission, the 2026 inflection-point thesis, the anonymized proof band, who Discimen serves |
| `/services` | **Services** | The four service lines, in delivery detail |
| `/tensegrity-framework` | **Tensegrity Framework** | The proprietary methodology — phases, decision gates, deliverables |
| `/resources` | **Resources** | Thought leadership and market data — the practitioner's point of view |
| `/about` | **About** | Founder profiles and credentials |
| `/contact` | **Contact** | Engagement pathways for enterprises, insurers, and regulators |

A seventh component, `src/pages/EnablementLab.tsx`, is an interactive "Agentic AI
Enablement Lab" demo. **It is not currently wired into routing** — see
[Maintenance Notes](#maintenance-notes).

### The four service lines

| Service line | Focus |
|---|---|
| **AI Transition Advisory** | Independent stay / layer / replace platform decisions, TCO modeling, business cases, vendor due diligence, migration roadmaps |
| **Tensegrity Framework** | The firm's methodology for running legacy and AI-native systems in productive tension during transition — dual governance, workload migration sequencing, operational continuity |
| **AI Governance Layer** | Agentic-AI readiness, regulatory alignment (EU AI Act, NIST AI RMF, ISO 42001, NERC CIP, HIPAA), shadow-AI detection, board oversight |
| **AI Risk Assessment** | Insurance-grade risk evaluation — pre-underwriting, ongoing compliance monitoring, claims & loss analysis |

---

## Design System & Choices

The visual language is set centrally in `tailwind.config.ts` and `src/index.css`. Pages
compose from these tokens — no ad-hoc colors, no inline-style sprawl.

### Color

| Token | Hex | Role |
|---|---|---|
| `primary` — Deep Navy | `#0f2b46` | Headlines, primary surfaces, authority |
| `accent` — Steel Blue | `#0f4377` | Links, accents, emphasis |
| Background | `#ffffff` | Clean white throughout |
| Body text | `gray-900` | Maximum legibility |

`primary` ships as a full 50–900 tonal scale and `accent` carries `light` / `dark`
variants, so depth and hierarchy come from one disciplined palette.

**The choice:** deep navy and steel blue on white is a deliberate rejection of the
AI-startup visual cliché — dark mode, neon gradients, glassmorphism. Discimen's buyers
are CFOs, general counsel, and boards in regulated industries. They trust restraint. The
palette reads in a financial-services and management-consulting register, not a hype one.

### Typography

| Family | Role | Loaded via |
|---|---|---|
| **Fraunces** | Display / headings (`h1`–`h3`) | Google Fonts |
| **DM Sans** | Body and UI | Google Fonts |

Fraunces — a soft serif with optical sizing — gives headings editorial gravitas, the
register of a keynote or a McKinsey paper. DM Sans is a humanist sans: highly legible,
modern without being trendy. Headings adopt the display face globally via an
`@layer base` rule, so hierarchy is consistent without per-component effort.

### Layout & motion

- A shared `.section-padding` utility standardizes vertical rhythm.
- `scroll-smooth` for in-page navigation.
- `AbstractHeroViz.tsx` is a **custom animated `<canvas>` visualization** anchoring the
  hero — a generated abstract structural motif that mirrors the Tensegrity metaphor
  (distributed elements held in tension). It is generated, not licensed stock:
  distinctive, lightweight, and on-brand.

---

## Project Structure

```
ai-cyber-insurance/
├── public/                       # static assets served at site root
│   ├── discimen_logo_new.png     #   logo + favicon
│   ├── mash-zahid.jpg            #   founder photo
│   └── reddhi-mitra.jpg          #   founder photo
├── src/
│   ├── components/
│   │   ├── Header.tsx            # sticky navigation
│   │   ├── Footer.tsx            # footer + links
│   │   └── AbstractHeroViz.tsx   # custom animated canvas hero visual
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── TensegrityFramework.tsx
│   │   ├── Resources.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── EnablementLab.tsx      # interactive demo — NOT currently routed
│   ├── lib/
│   │   └── utils.ts              # cn() — clsx + tailwind-merge helper
│   ├── App.tsx                   # router + layout shell
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Tailwind layers + Google Font imports
├── index.html                    # HTML shell + meta tags
├── vite.config.ts                # Vite config (@ alias, dev port 8080)
├── tailwind.config.ts            # design tokens
├── vercel.json                   # SPA rewrites + security headers
├── package.json
└── .github/workflows/codeql.yml  # CodeQL security scan
```

---

## Local Development

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/MashZ/ai-cyber-insurance.git
cd ai-cyber-insurance
npm install

npm run dev       # dev server  → http://localhost:8080
npm run build     # production build → dist/
npm run preview   # preview the build → http://localhost:4173
```

The `@` import alias maps to `src/` — e.g. `import { cn } from '@/lib/utils'`.

---

## Deployment

The site is hosted on **Vercel**, connected to the `main` branch of this repository.

- **Every push to `main`** triggers an automatic production deployment: `npm install` →
  `npm run build` → serve `dist/` from Vercel's edge CDN.
- `vercel.json` rewrites all routes to `index.html` (required for client-side routing)
  and sets security headers (CSP, CORS).
- Because Vercel builds from source on every deploy, **`node_modules/` and `dist/` are
  git-ignored and must never be committed.**

To ship a change — commit to `main`, push, and Vercel deploys in ~1–2 minutes:

```bash
git add <files>                    # add files explicitly; never `git add -A`
git commit -m 'your message'       # single quotes — $-signs expand under double quotes
git push
```

---

## How Discimen Operates

The firm runs on a small set of principles — visible, deliberately, in this repository:

- **Independence is the product.** No platform to sell, no audit hours to protect.
  Discimen's only incentive is the client's outcome.
- **Practitioners, not theorists.** Every recommendation comes from someone who has
  built and deployed the thing at scale.
- **The methodology is published, not hidden.** The Tensegrity Framework is open on the
  site. Credible IP earns trust by being inspectable.
- **Decisions in the language of capital.** Discimen frames AI choices the way a CFO
  does — conviction, exposure, the cost of a closing window — not the way a vendor does.
- **Restraint as discipline.** A lean build, a quiet palette, no bloat — the same
  restraint the firm brings to a client's architecture.

> The detailed growth strategy and operating playbook are maintained privately, outside
> this repository.

---

## Founders

**Mash Zahid** — Co-Founder, Technical & Delivery Lead. Global AI strategy leader;
former IBM Associate Partner (GenAI Practice); led agentic-AI transformation at
Fortune scale; Moveworks Architecture Review Board; OpenAI Academy keynote speaker;
Chicago Booth MBA.

**Reddhi Mitra** — Co-Founder, Commercial & Operations Lead. 20-year management
consultant; FTI Consulting and IBM veteran; operational transformation, risk
management, and commercial strategy; Duke Fuqua MBA.

---

## Maintenance Notes

- **`EnablementLab.tsx` is unrouted.** The interactive lab page (876 lines) exists but
  is not reachable from `App.tsx`. Decide whether to route, finish, or remove it.
- **Methodology naming.** Confirm one canonical name across all materials — the live
  site uses *Tensegrity Framework*.
- **Keep the build clean.** `node_modules/`, `dist/`, and `.DS_Store` are git-ignored.
  Never `git add -A` blindly; add files explicitly so build artifacts stay out of git.

---

## Contact

- **Website:** [discimen.com](https://discimen.com)
- **Email:** info@discimen.com

---

*© 2026 Discimen · MLKND Ventures LLC. Proprietary — all rights reserved.*
