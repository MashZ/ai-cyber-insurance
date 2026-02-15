import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Scale,
  Building2,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import AbstractHeroViz from '../components/AbstractHeroViz';

export default function Home() {
  return (
    <main className="pt-20 relative">
      {/* ─── Full-page animated background ─── */}
      <AbstractHeroViz />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(#0f2b46 1px, transparent 1px), linear-gradient(90deg, #0f2b46 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0f4377]" />
              <span className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase">
                AI Transition Advisory
              </span>
            </div>

            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-tight mb-3">
              Navigate the shift from legacy SaaS to AI-native operations.
              <span className="text-[#0f4377]/50"> Without breaking compliance.</span>
            </h1>
            <p className="text-sm text-slate-400 italic mb-6">
              discimen — Latin: peril, discriminating difference.
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Enterprise software is being repriced. AI-native platforms are replacing legacy systems.
              Discimen helps regulated enterprises manage the transition — governing the risk,
              measuring the ROI, and ensuring every move is defensible to your board, your
              regulators, and your insurers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0f2b46] rounded-lg hover:bg-[#0f4377] transition-colors duration-200"
              >
                Schedule a Briefing
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/straddle-framework"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0f2b46] bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-white transition-all duration-200"
              >
                Explore the Straddle Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Market Context Banner ─── */}
      <section className="bg-[#0f2b46]/95 backdrop-blur-sm text-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-8">
            The Inflection Point
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                stat: '$300B+',
                label: 'wiped from SaaS market caps in early 2026',
              },
              {
                stat: '50%',
                label: 'of IT tickets now automatable by AI-native platforms like Serval',
              },
              {
                stat: 'Aug 2026',
                label: 'EU AI Act general application deadline for high-risk systems',
              },
            ].map((item) => (
              <div key={item.stat}>
                <p className="font-fraunces text-3xl md:text-4xl font-semibold text-white mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Serve ─── */}
      <section className="py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Built for Decision-Makers
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              We speak the language of the C-suite, not the lab.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              AI transformation decisions are being made in the CFO&#39;s office and the CEO&#39;s
              boardroom — not the CTO&#39;s lab. Discimen translates technical AI risk into the
              financial, operational, and regulatory terms that drive executive action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CFO Card */}
            <div className="group bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0f2b46]/5 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-[#0f2b46]" size={22} />
                </div>
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-xl font-semibold mb-1">
                    For the CFO
                  </h3>
                  <p className="text-sm text-slate-500">
                    Financial risk clarity for AI investment decisions
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Total cost of ownership: legacy SaaS vs. AI-native alternatives',
                  'Risk-adjusted ROI models for platform migration decisions',
                  'Financial exposure quantification for regulatory non-compliance',
                  'Insurance-grade risk scoring for AI product liability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2
                      size={16}
                      className="text-[#0f4377] mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CEO Card */}
            <div className="group bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0f2b46]/5 flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#0f2b46]" size={22} />
                </div>
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-xl font-semibold mb-1">
                    For the CEO
                  </h3>
                  <p className="text-sm text-slate-500">
                    Strategic confidence for board-level AI transformation
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Independent evaluation of AI-native vs. legacy platform decisions',
                  'Board-ready governance frameworks that demonstrate fiduciary diligence',
                  'Competitive positioning analysis: who in your industry is moving and how',
                  'Transition roadmaps that balance operational continuity with modernization',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2
                      size={16}
                      className="text-[#0f4377] mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Four Service Lines ─── */}
      <section className="py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-slate-50/85 backdrop-blur-[2px]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Four capabilities. One integrated advisory.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From strategic transition planning to insurance-grade risk scoring, Discimen covers
              the full lifecycle of enterprise AI adoption for regulated industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'AI Transition Advisory',
                desc: 'Independent evaluation of whether to stay on legacy platforms, layer AI on top, or rip-and-replace with AI-native alternatives. We map the decision space, quantify the trade-offs, and build the business case.',
                tag: 'Strategic',
              },
              {
                icon: Scale,
                title: 'Straddle Framework',
                desc: 'A structured methodology for running legacy and AI-native systems in parallel — managing dual operations, migrating workloads incrementally, and governing both simultaneously without compliance gaps.',
                tag: 'Operational',
              },
              {
                icon: Shield,
                title: 'AI Governance Layer',
                desc: 'Productized governance assessments for agentic AI deployments — covering decision authority mapping, escalation protocols, audit trails, regulatory alignment, and operational risk exposure.',
                tag: 'Compliance',
              },
              {
                icon: Building2,
                title: 'AI Risk Assessment',
                desc: 'Insurance-grade risk evaluation for AI systems — model inventory, architecture review, vulnerability profiling, and actuarial risk scoring that underwriters and product liability insurers can price from.',
                tag: 'Insurance',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0f2b46]/5 flex items-center justify-center">
                    <item.icon className="text-[#0f2b46]" size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#0f4377]/60 uppercase px-2 py-1 bg-[#0f4377]/5 rounded">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-fraunces text-[#0f2b46] text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f4377] hover:text-[#0f2b46] transition-colors"
            >
              View full service details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Industry Focus
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Deep expertise in regulated industries where the stakes are highest.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Manufacturing', detail: 'Process safety, supply chain AI, quality systems' },
              { name: 'Healthcare', detail: 'Clinical AI, patient safety, HIPAA compliance' },
              { name: 'Energy & Utilities', detail: 'Grid operations, regulatory compliance, workforce AI' },
              { name: 'Automotive', detail: 'ADAS/AV systems, product liability, safety-critical AI' },
              { name: 'Financial Services', detail: 'Model risk, fair lending, algorithmic trading' },
            ].map((industry) => (
              <div
                key={industry.name}
                className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors group"
              >
                <p className="font-fraunces text-[#0f2b46] text-sm font-semibold mb-1.5">
                  {industry.name}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">{industry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Differentiator ─── */}
      <section className="py-20 lg:py-24 bg-[#0f2b46]/95 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
              Why Discimen
            </p>
            <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Independent. Operational. Sector-specific.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Strategy firms sell top-down frameworks. Technology vendors sell their own platform.
              Big Four sell audit hours. Discimen delivers hands-on AI transition advisory built
              on actual enterprise AI implementation experience — not theory.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Practitioner-led',
                  desc: 'Founded by leaders who have built and deployed enterprise AI systems at Fortune 500 scale — not observed from the outside.',
                },
                {
                  icon: Shield,
                  title: 'Vendor-independent',
                  desc: "We help you evaluate ServiceNow vs. Serval, Salesforce vs. AI-native CRM, legacy vs. modern. We don\u2019t sell platforms.",
                },
                {
                  icon: Scale,
                  title: 'Regulation-ready',
                  desc: 'Every assessment maps to EU AI Act, NIST AI RMF, ISO 42001, and sector-specific frameworks. Defensible by design.',
                },
              ].map((item) => (
                <div key={item.title} className="text-left">
                  <item.icon className="text-white/40 mb-4" size={24} />
                  <h3 className="font-fraunces text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              The window is open. Enterprises are making platform decisions now.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you&#39;re evaluating AI-native ITSM, building governance for agentic
              deployments, or quantifying AI risk for your insurers — Discimen can help you
              move with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#0f2b46] rounded-lg hover:bg-[#0f4377] transition-colors duration-200"
            >
              Schedule a Briefing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
