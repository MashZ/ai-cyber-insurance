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
  Activity,
  Quote,
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
                AI Transition &amp; Cyber Risk Advisory
              </span>
            </div>

            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-tight mb-3">
              Rethinking deep expertise and structure around AI.
            </h1>
            <p className="text-sm text-slate-400 italic mb-6">
              discimen — Latin: peril, discriminating difference.
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              AI transformation isn&#39;t a technology decision. It&#39;s a question about who owns what, who decides what, and what your company becomes. These questions can&#39;t be delegated to the CTO.
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
                to="/tensegrity-framework"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0f2b46] bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-white transition-all duration-200"
              >
                Explore the Tensegrity Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Market Context Banner ─── */}
      <section className="bg-[#0f2b46]/95 backdrop-blur-sm text-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-8">
            The 2026 Inflection Point
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                stat: '$300B+',
                label: 'wiped from SaaS market caps in early 2026',
              },
              {
                stat: '74%',
                label: 'of organizations plan to deploy autonomous agents this year',
              },
              {
                stat: '21%',
                label: 'have proper AI governance frameworks in place',
              },
              {
                stat: 'Soft Market',
                label: 'AI cyber policies are currently underpriced -- the window to lock in correct coverage is open now',
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

      {/* ─── Anonymized Proof Band ─── */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-slate-50/85 backdrop-blur-[2px]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
                Proof Point
              </p>
              <h2 className="font-fraunces text-[#0f2b46] text-2xl md:text-3xl font-semibold leading-tight mb-4">
                Enterprise AI transformation, measured in outcomes.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                For a Fortune 25 automotive manufacturer, Discimen&#39;s founding principal led an
                HR service operations redesign that reset the economics of back-office AI. It is
                the kind of end-to-end workflow reinvention that ranks among the highest-correlated
                practices for realizing AI value at enterprise scale.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-slate-200 pt-10">
              {[
                {
                  stat: '47,000',
                  label: 'annual HR cases brought inside the redesigned workflow',
                },
                {
                  stat: '4 days → 30s',
                  label: 'Tier 1 resolution time, compressed by agentic automation',
                },
                {
                  stat: '67%',
                  label: 'first-contact resolution, up from prior 55% baseline',
                },
                {
                  stat: '$30–40M+',
                  label: 'annualized run-rate operating savings at full deployment',
                },
              ].map((item) => (
                <div key={item.stat}>
                  <p className="font-fraunces text-3xl md:text-4xl font-semibold text-[#0f2b46] mb-2">
                    {item.stat}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 italic mt-10 pt-6 border-t border-slate-100">
              Client identity withheld by discretion. Engagement references available under NDA
              to qualified enterprise and insurance counterparties.
            </p>
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
              boardroom, not the CTO&#39;s lab. Discimen translates technical AI risk into the
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
              One framework. Four operational capabilities.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The Tensegrity Framework is the structural method. The capabilities below are the
              work it orchestrates, from strategic transition through insurance-grade risk
              valuation for regulated industries.
            </p>
          </div>

          {/* Tensegrity umbrella card */}
          <Link
            to="/tensegrity-framework"
            className="block mb-10 bg-[#0f2b46] border border-[#0f2b46] rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Scale className="text-white" size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase px-2 py-1 bg-white/10 rounded">
                    Organizing Framework
                  </span>
                </div>
                <h3 className="font-fraunces text-white text-2xl md:text-3xl font-semibold mb-3">
                  The Tensegrity Framework
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  A structured methodology for running legacy and AI-native systems in parallel:
                  mapping decision rights across the C-suite, resolving jurisdictional competition
                  over agentic AI, and governing dual operations without compliance gaps. Every
                  Discimen engagement is sequenced against it.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors flex-shrink-0">
                Explore the framework
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'AI Transition Advisory',
                desc: 'Independent evaluation of whether to stay on legacy platforms, layer AI on top, or rip-and-replace with AI-native alternatives. We map the decision space, quantify the trade-offs, and build the business case.',
                tag: 'Strategic',
                span: false,
              },
              {
                icon: Shield,
                title: 'AI Governance Layer',
                desc: 'Productized governance assessments for agentic AI deployments -- covering decision authority mapping, escalation protocols, audit trails, regulatory alignment, and operational risk exposure.',
                tag: 'Compliance',
                span: false,
              },
              {
                icon: Building2,
                title: 'AI Risk Assessment',
                desc: 'Insurance-grade risk evaluation for AI systems -- model inventory, architecture review, vulnerability profiling, and actuarial risk scoring that underwriters and product liability insurers can price from.',
                tag: 'Insurance',
                span: false,
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

            {/* 4th capability -- AI Cyber Risk Valuation, featured full-width */}
            <div className="md:col-span-2 bg-[#0f2b46] border border-[#0f2b46] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Activity className="text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase px-2 py-1 bg-white/10 rounded">
                  Risk Valuation
                </span>
              </div>
              <h3 className="font-fraunces text-white text-xl font-semibold mb-3">
                AI Cyber Risk Valuation
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
                The AI cyber insurance market is in a soft cycle. Carriers are competing for
                premium, coverage terms are favorable, and the window to lock in correctly priced
                policies is open -- but it will close as agentic AI claims begin to materialize.
                Discimen provides the independent pre-underwriting assessment that lets enterprises
                bring a defensible risk profile to their broker, closing coverage gaps before the
                market hardens.
              </p>
            </div>
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

      {/* ─── Market Signals ─── */}
      <section className="py-20 lg:py-24 bg-[#0f2b46]/95 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-3">
              What Practitioners Are Saying
            </p>
            <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight">
              The risk landscape has shifted. Most enterprises haven&#39;t caught up.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'AI has gone from being the asset we protect to being the attack vector itself. This cannot be fixed through a security ticket. It requires an entirely different strategic posture.',
                context: 'Enterprise cybersecurity practitioner',
              },
              {
                quote: 'Mid-market companies can no longer hide behind the noise. Threat actors are targeting organizations of that size the way they used to target only state-level enterprises five years ago.',
                context: 'Insurance risk professional, regulated industry',
              },
              {
                quote: 'The agentic layer is where the real exposure lives. Autonomous systems making operational decisions without human authorization in the moment -- that is a class of risk that no existing framework has yet priced.',
                context: 'Enterprise AI transformation leader',
              },
            ].map((item) => (
              <div
                key={item.context}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <Quote className="text-white/20 mb-4 flex-shrink-0" size={24} />
                <p className="text-white/80 text-sm leading-relaxed italic mb-6 flex-1">
                  {item.quote}
                </p>
                <p className="text-white/30 text-xs font-semibold tracking-wide uppercase">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Resources Teaser ─── */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-slate-50/85 backdrop-blur-[2px]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
                Resources
              </p>
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
                Interactive tools and market intelligence for the AI transition.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Explore the Agentic AI Enablement Lab, the 2026 competitive battlecard
                vs. the Big Five consultancies, and the CFO decision framework that
                grounds every Discimen engagement.
              </p>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f4377] hover:text-[#0f2b46] transition-colors"
              >
                Explore all resources
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Enablement Lab', desc: 'Interactive first-principles AI demo' },
                { label: 'Battlecard', desc: 'Discimen vs. McKinsey, Accenture, IBM' },
                { label: 'CFO Framework', desc: 'TCO, ROI, and governance metrics' },
                { label: 'Market Data', desc: '2026 enterprise AI intelligence' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to="/resources"
                  className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-sm transition-all group"
                >
                  <p className="font-fraunces text-[#0f2b46] text-sm font-semibold mb-1 group-hover:text-[#0f4377] transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </Link>
              ))}
            </div>
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
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Strategy firms sell top-down frameworks. Technology vendors sell their own platform.
              Big Four sell audit hours. Discimen delivers hands-on AI transition advisory built
              on actual enterprise AI implementation experience, not theory.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              McKinsey&#39;s <em>Rewired</em> names the brittleness problem in enterprise AI stacks:
              point solutions that fracture under the weight of end-to-end workflow reinvention.
              The Tensegrity Framework is the structural answer, built by the people who have
              deployed it inside Fortune 500 operations.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Practitioner-led',
                  desc: 'Founded by leaders who have built and deployed enterprise AI systems at Fortune 500 scale, not observed from the outside.',
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

            {/* OpenAI Academy credential stamp */}
            <div className="mt-14 pt-10 border-t border-white/10">
              <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                  On Stage
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-sm text-white/70">
                  Framework presented at <span className="font-semibold text-white/90">OpenAI Academy</span>: <em>Scaling Enterprise AI Through Systems Thinking</em>
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs font-semibold text-white/50">6,846 attendees</span>
              </div>
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
              The window is open. Enterprises are making platform and risk decisions now.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you&#39;re evaluating AI-native ITSM, building governance for agentic
              deployments, or locking in correctly priced AI cyber coverage before the soft
              market closes -- Discimen can help you move with confidence.
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
