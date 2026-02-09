# AI & Cyber Insurance Risk Assessment

**Expert valuation services for insurance carriers, enterprises, and regulators navigating AI liability and cybersecurity exposure.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-cyber-insurance-venture)

## Overview

This website showcases specialized risk assessment and valuation services for the rapidly emerging AI and cyber insurance market ($4.8B projected by 2032, 80% CAGR).

### Our Value Proposition

We bridge the critical gap between:
- **Insurance carriers** seeking to underwrite AI/cyber risks they don't fully understand
- **Enterprises** deploying AI systems without clear risk quantification
- **Regulators** demanding governance frameworks that don't yet exist

## Technology Stack

Built with the same professional design system as DerivLab:

- **Framework**: React 18.3.1 with TypeScript 5.8+
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4+ with navy (#1a2332) and gold (#d4af37) theme
- **Routing**: React Router DOM 6.30+
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## Design System

**Color Palette:**
- **Primary**: Navy (#1a2332) - Professional, trustworthy
- **Accent**: Gold (#d4af37) - Premium, expertise
- **Typography**: Inter font family
- **Inspiration**: Bloomberg/Goldman Sachs professional interfaces

## Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-cyber-insurance-venture

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## Project Structure

```
ai-cyber-insurance-venture/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
├── vercel.json          # Vercel deployment config
└── README.md            # This file
```

## Core Features

### Pages

1. **Home** - Value proposition, market stats, coverage areas
2. **Services** - Detailed breakdown of 5 coverage areas with pricing
3. **About** - Founder profiles and thought leadership positioning
4. **Contact** - Multi-channel contact information and consultation request

### Coverage Areas

1. **AI Performance Risks** - Model errors, hallucinations, output accuracy
2. **Privacy & Data Leakage** - PII exposure, regulatory violations
3. **Regulatory Compliance** - EU AI Act, NAIC, state laws
4. **Model Output Liability** - Bias, harmful content, discrimination
5. **IP & Copyright** - Training data provenance, infringement

## Customization

### Updating Content

Edit the respective page files in `src/pages/`:
- `Home.tsx` - Update stats, messaging
- `Services.tsx` - Modify service offerings and pricing
- `About.tsx` - Update founder bios and credentials
- `Contact.tsx` - Change contact information

### Updating Branding

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: { DEFAULT: '#1a2332', ... },  // Navy
  accent: { DEFAULT: '#d4af37', ... },   // Gold
}
```

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## Performance

- **Lighthouse Score**: Target >90 across all metrics
- **Initial Load**: <3 seconds
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format with fallbacks

## SEO

The site includes:
- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags (ready for social sharing)
- Structured data markup (future enhancement)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a professional services website. For updates:

1. Create a feature branch
2. Make changes with clear commit messages
3. Test locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`
5. Deploy via Vercel

## License

© 2026 AI & Cyber Insurance Valuation. All rights reserved.

## Contact

- **Website**: [To be deployed]
- **Email**: info@aicyberinsurance.com
- **LinkedIn**: 
  - [Mashruk Zahid](https://www.linkedin.com/in/mashruk-zahid/)
  - [Reddhi Mitra](https://www.linkedin.com/in/reddhimitra/)

## Founders

**Mashruk (Mash) Zahid** - Technical & Delivery Lead  
Global AI Strategy leader, former IBM Associate Partner, Chicago Booth MBA

**Reddhi Mitra** - Commercial & Operations Lead  
20-year management consultant, FTI Consulting and IBM veteran, Duke Fuqua MBA

---

Built with React, TypeScript, and Tailwind CSS. Designed for trust, expertise, and clarity.
