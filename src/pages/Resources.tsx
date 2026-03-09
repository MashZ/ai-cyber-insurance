import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Brain, BarChart3, Shield, Zap, Network, Bot, TrendingUp } from 'lucide-react';

export default function Resources() {
  return (
    <main className="pt-20">
      {/* ─── Hero ─── */}
      <section className="pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-4">
              Resources
            </p>
            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Frameworks, tools, and intelligence for the AI transition.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discimen publishes the research, interactive tools, and competitive intelligence
              that enterprise leaders need to make informed AI platform decisions. Everything
              here is built on practitioner experience, not theory.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Interactive Enablement Lab ─── */}
      <section className="py-16 lg:py-20 bg-[#0f2b46]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-6">
                <Brain size={14} className="text-white/60" />
                <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                  Interactive Tool
                </span>
              </div>
              <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight mb-4">
                Agentic AI Enablement Lab
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                An interactive demonstration of how first-principles decomposition and
                systems thinking transform enterprise operations. Built using the same
                methodology behind the GM HR transformation that took 47,000 cases from
                4-day resolution to 30 seconds.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Walk through a real IT service desk scenario to see how agentic AI patterns
                (reasoning loops, tool orchestration, escalation protocols) replace
                traditional workflow automation. The tool demonstrates why operational
                precision matters more than raw model power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://agenticaienablement.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0f2b46] bg-white rounded-lg hover:bg-slate-100 transition-colors duration-200"
                >
                  Launch the Lab
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-6">
                What the Lab Demonstrates
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Brain,
                    title: 'First-Principles Decomposition',
                    desc: 'Breaking complex operational problems into fundamental components before applying AI.',
                  },
                  {
                    icon: Network,
                    title: 'Systems Thinking Recomposition',
                    desc: 'Rebuilding workflows with feedback loops, leverage points, and productive tensions.',
                  },
                  {
                    icon: Bot,
                    title: 'Agentic Reasoning Patterns',
                    desc: 'Moving beyond simple RAG to agents that critique outputs, use tools, and solve multi-step problems.',
                  },
                  {
                    icon: Shield,
                    title: 'Governance by Design',
                    desc: 'Decision authority mapping, escalation protocols, and audit trails built into every workflow.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-white/40" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2026 Enterprise AI Landscape ─── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Market Intelligence
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Three shifts defining enterprise AI in 2026.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The global AI consulting market exceeds $30 billion this year, but raw model
              power matters less than operational precision. These are the dynamics shaping
              every platform decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Network,
                title: 'The Connectivity Paradox',
                stat: '27%',
                statLabel: 'of enterprise agents connected across systems',
                desc: 'Enterprises have agents, but most operate in silos. The real value lies in the orchestration layer that connects marketing agents to finance systems, HR bots to compliance workflows, and IT automation to security monitoring without human middleware.',
                implication: 'Winners will be "Agentic Mesh" architects, not point-solution builders.',
              },
              {
                icon: Brain,
                title: 'From RAG to Reasoning',
                stat: 'Commodity',
                statLabel: 'is what standard RAG has become',
                desc: 'Basic retrieval-augmented generation is now table stakes. The market has moved to agentic reasoning: agents that critique their own outputs, invoke tools autonomously (SQL, APIs, internal systems), and solve multi-step business problems through iterative loops.',
                implication: 'Enablement must build reasoning systems, not retrieval systems.',
              },
              {
                icon: Zap,
                title: 'The Capacity Crunch',
                stat: '25%',
                statLabel: 'of planned AI spend currently deferred',
                desc: 'Engineering teams cannot build bespoke agents fast enough to meet internal demand. Departments wait quarters for solutions that motivated individuals can prototype in days. The governance bottleneck is now slower than the build cycle itself.',
                implication: 'Scale functions by 60% without adding headcount, but governance must keep pace.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0f2b46]/5 flex items-center justify-center">
                    <item.icon className="text-[#0f2b46]" size={20} />
                  </div>
                </div>
                <h3 className="font-fraunces text-[#0f2b46] text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <div className="mb-4">
                  <span className="font-fraunces text-[#0f4377] text-3xl font-semibold">
                    {item.stat}
                  </span>
                  <span className="text-sm text-slate-500 ml-2">{item.statLabel}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                <p className="text-xs text-[#0f4377] font-semibold leading-relaxed">
                  {item.implication}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Competitive Battlecard ─── */}
      <section className="py-16 lg:py-20 bg-slate-50/80">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Competitive Intelligence
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              How Discimen compares to the Big Five.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              2026 is seeing a shift where operational precision outperforms raw consulting scale.
              Here is how Discimen&#39;s lean, business-centric approach stacks up against
              incumbent AI offerings.
            </p>
          </div>

          {/* Battlecard table — responsive */}
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-left text-sm border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-[#0f2b46]">
                  <th className="py-4 pr-4 font-fraunces text-[#0f2b46] font-semibold text-base w-[140px]">
                    Dimension
                  </th>
                  <th className="py-4 px-4 font-fraunces text-[#0f4377] font-semibold text-base bg-[#0f4377]/5 rounded-t-lg">
                    Discimen
                  </th>
                  <th className="py-4 px-4 text-slate-500 font-semibold">
                    McKinsey / QuantumBlack
                  </th>
                  <th className="py-4 px-4 text-slate-500 font-semibold">
                    Accenture AI Refinery
                  </th>
                  <th className="py-4 px-4 text-slate-500 font-semibold">
                    IBM Consulting
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  {
                    dim: 'Value Prop',
                    discimen: 'Business-led enablement for CFO/CMO. "Smarter, not bigger" agents.',
                    mckinsey: 'Hard-wiring AI into sovereign ecosystems.',
                    accenture: 'Industrial-scale deployment via Agent Builder.',
                    ibm: 'Multiagent orchestration via watsonx.',
                  },
                  {
                    dim: 'Methodology',
                    discimen: 'Straddle Framework: autonomous workflows with insured risk.',
                    mckinsey: 'Workflow redesign from "AI that chats" to "AI that settles."',
                    accenture: 'Cognitive network platforms and sovereign cloud.',
                    ibm: 'Policy enforcement and security-first scaling.',
                  },
                  {
                    dim: 'Governance',
                    discimen: 'Audit-ready assessments certified via Big Four partnerships.',
                    mckinsey: 'Verifiable actions and hard controls.',
                    accenture: 'Systematic responsible AI frameworks.',
                    ibm: 'watsonx.governance for observability.',
                  },
                  {
                    dim: 'Engagement',
                    discimen: 'Lean 3-month high-impact sprints.',
                    mckinsey: 'Long-term hybrid technical embedding.',
                    accenture: '784,000 people and pre-built platforms.',
                    ibm: 'Software-driven accelerators.',
                  },
                  {
                    dim: 'Independence',
                    discimen: 'Vendor-neutral. Evaluate platforms, not sell them.',
                    mckinsey: 'Platform-agnostic but implementation-heavy.',
                    accenture: 'Proprietary tooling bias.',
                    ibm: 'watsonx ecosystem bias.',
                  },
                ].map((row, i) => (
                  <tr key={row.dim} className={i % 2 === 0 ? '' : 'bg-slate-50/50'}>
                    <td className="py-3.5 pr-4 font-semibold text-[#0f2b46] text-xs uppercase tracking-wider">
                      {row.dim}
                    </td>
                    <td className="py-3.5 px-4 bg-[#0f4377]/5 font-medium text-[#0f2b46]">
                      {row.discimen}
                    </td>
                    <td className="py-3.5 px-4">{row.mckinsey}</td>
                    <td className="py-3.5 px-4">{row.accenture}</td>
                    <td className="py-3.5 px-4">{row.ibm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              <span className="font-semibold text-[#0f2b46]">The Discimen advantage:</span>{' '}
              While Deloitte reports only 25% of organizations have moved more than 40% of AI
              pilots into production, Discimen&#39;s lean approach skips the experimental bloat.
              74% of organizations plan to deploy autonomous agents this year, but only 21% have
              proper governance. Discimen&#39;s strategy of partnering with Big Four auditors to
              certify risk assessments provides insurance-grade trust that the Big Five struggle
              to deliver neutrally because they are often auditing their own implementations.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CFO's Decision Framework ─── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              CFO Framework
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              The CFO&#39;s AI transition decision framework.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              AI transition decisions live in the CFO&#39;s office. Every recommendation we make
              is grounded in the language finance leaders use: cost, ROI, risk, and capital efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'TCO Comparison',
                metric: '30% SaaS reduction',
                desc: 'Rigorous total cost of ownership modeling shows how AI-native transitions reduce or reallocate costs over the long term, freeing capital from legacy SaaS contracts.',
              },
              {
                icon: TrendingUp,
                title: 'Risk-Adjusted ROI',
                metric: '18% over 36 months',
                desc: 'Clear, quantifiable upside that compensates for upfront spend and technology uncertainty. Every business case includes scenario modeling and sensitivity analysis.',
              },
              {
                icon: Zap,
                title: 'Capital Reallocation',
                metric: '25% cloud spend freed',
                desc: 'In the current SaaS-crash climate, CFOs are tightening vendor stacks. We position transitions as capital unlocks for higher-impact strategic initiatives.',
              },
              {
                icon: Shield,
                title: 'Regulatory Exposure',
                metric: '40% risk reduction',
                desc: 'Regulatory penalties can far exceed technology upgrade costs. We quantify potential fines vs. the cost of compliance to build the financial case for governance investment.',
              },
              {
                icon: Brain,
                title: 'Governance as Product',
                metric: 'Audit-ready scorecard',
                desc: 'A concrete, measurable assessment that serves as a decision-making tool: a ready-made governance scorecard that drives go/no-go approvals for agentic deployments.',
              },
              {
                icon: Network,
                title: 'Migration Roadmap',
                metric: '24-month phased plan',
                desc: 'CFOs need assurance that transitions will not disrupt revenue-generating operations. Every roadmap keeps core services live and meets quarterly KPI targets.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
              >
                <item.icon size={20} className="text-[#0f4377] mb-4" />
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[#0f4377] mb-3">{item.metric}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0f2b46]/5 border border-[#0f2b46]/10 rounded-xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed italic">
              &#34;We help finance leaders move from legacy SaaS to AI-native platforms by delivering
              a total cost-of-ownership advantage, risk-adjusted ROI above 15% in under three years,
              and a governance assessment that turns regulatory uncertainty into a quantifiable risk
              metric. By freeing up 20% of your cloud spend, you can reallocate capital to high-growth
              initiatives while keeping compliance penalties well below potential fines.&#34;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Key Market Data ─── */}
      <section className="py-16 lg:py-20 bg-[#0f2b46]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-10">
            2026 Market Intelligence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '74%', label: 'of organizations plan to deploy autonomous agents in 2026' },
              { stat: '21%', label: 'have proper governance frameworks in place' },
              { stat: '$470B+', label: 'hyperscaler AI infrastructure spend redirected from SaaS budgets' },
              { stat: '66%', label: 'of board directors report limited or no AI knowledge' },
            ].map((item) => (
              <div key={item.stat}>
                <p className="font-fraunces text-3xl md:text-4xl font-semibold text-white mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Ready to navigate the transition?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              These frameworks and tools inform every Discimen engagement. Schedule a briefing
              to see how they apply to your specific portfolio, contracts, and regulatory landscape.
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
