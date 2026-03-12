import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  GitBranch,
  Shield,
  Eye,
  BarChart3,
  Clock,
  ArrowUpRight,
  Users,
  Scale,
} from 'lucide-react';

export default function EquipoiseFramework() {
  return (
    <main className="pt-20">
      {/* ─── Hero ─── */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(#0f2b46 1px, transparent 1px), linear-gradient(90deg, #0f2b46 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2b46]/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0f4377]" />
              <span className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase">
                Proprietary Methodology
              </span>
            </div>

            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl font-semibold leading-tight mb-3">
              The Equipoise Framework
            </h1>
            <p className="text-sm text-slate-400 italic mb-6">
              equipoise — balanced tension between opposing forces.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              A structured methodology for navigating the transition from legacy SaaS to AI-native
              operations — resolving C-suite jurisdictional competition, assigning decision rights,
              and maintaining operational continuity through deliberate equilibrium.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Developed from enterprise AI transformation engagements across manufacturing,
              healthcare, and energy utilities — industries where operational continuity isn&#39;t
              optional and regulatory compliance spans both the old and new systems simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Jurisdictional Challenge ─── */}
      <section className="py-20 lg:py-24 bg-[#0f2b46]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
              The Core Challenge
            </p>
            <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Six executives. One AI agent. No clear owner.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              An AI agent that autonomously processes claims is simultaneously a technology system
              (CIO), an operational workflow (COO), a risk exposure (CRO), a financial
              decision-maker with P&amp;L impact (CFO), a novel form of labor (CHRO), and a
              consumer of governed data (CDO). Whoever governs the agents — their roles,
              permissions, guardrails, evaluation, escalation, and budgets — controls what and
              how the company decides.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              The Equipoise Framework resolves this by shifting the question from &#34;who owns
              AI?&#34; to &#34;who owns which AI-related decisions?&#34; — and building the
              coordination layer that makes those assignments explicit, actionable, and revisable
              as the technology evolves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Clock,
                label: 'Multi-year contracts',
                desc: 'ServiceNow, Salesforce, and Workday contracts lock enterprises in for 3-5 years with significant exit penalties.',
              },
              {
                icon: Layers,
                label: 'Deeply embedded data',
                desc: 'Years of operational data, custom workflows, and institutional knowledge inside legacy systems.',
              },
              {
                icon: Shield,
                label: 'Regulatory obligations',
                desc: 'Compliance frameworks map to existing systems. Migration creates governance gaps that regulators will scrutinize.',
              },
              {
                icon: AlertTriangle,
                label: 'Operational risk',
                desc: 'Disrupting service desk, HR, or finance operations during transition creates real business harm.',
              },
              {
                icon: Users,
                label: 'Jurisdictional competition',
                desc: 'CIO, COO, CFO, CHRO, CRO, and CDO all have legitimate claims to AI governance. No default resolution works.',
              },
              {
                icon: Scale,
                label: 'Decision rights vacuum',
                desc: 'Without explicit assignment, organizations default to politics, committees, or the squeakiest wheel. None scale for agentic AI.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <item.icon className="text-white/40 mb-3" size={20} />
                <h3 className="text-white text-sm font-semibold mb-1.5">{item.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Five Phases ─── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              The Methodology
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Five phases. Decision rights at every step.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The Equipoise Framework is not a theoretical model — it is a sequenced engagement
              methodology with specific deliverables, decision gates, and explicit ownership
              assignments at each phase. Every phase answers not just &#34;what should we do?&#34;
              but &#34;who decides, who executes, and who is accountable?&#34;
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                phase: '01',
                title: 'Landscape Assessment',
                duration: '2–3 weeks',
                desc: 'Map the current state: every SaaS platform, contract term, data dependency, workflow integration, and governance mechanism. Identify which systems are candidates for AI-native replacement and which must remain. Surface the jurisdictional landscape — which C-suite leaders currently own which decisions, and where gaps exist.',
                deliverables: [
                  'Complete SaaS platform inventory with contract terms and exit provisions',
                  'Data dependency map showing cross-system flows and integration points',
                  'Governance gap analysis between current controls and dual-system requirements',
                  'Jurisdictional map: current AI decision ownership across CIO, COO, CFO, CHRO, CRO, CDO',
                ],
              },
              {
                phase: '02',
                title: 'Decision Architecture',
                duration: '2–4 weeks',
                desc: 'Build the decision framework for each platform: stay, layer AI on top, or rip-and-replace. Critically, define the decision rights map — who owns model selection (CIO), who sets risk thresholds (CRO), who controls spend and ROI measurement (CFO), who governs human-agent workflows (CHRO), who manages data access (CDO), and who determines what agents should accomplish (COO/P&amp;L owner).',
                deliverables: [
                  'Per-platform decision matrix with risk-adjusted cost modeling',
                  'Decision rights map: explicit assignment of AI-related decisions to C-suite owners',
                  'Regulatory impact assessment for each migration path',
                  'Board-ready executive briefing with recommendation and rationale',
                ],
              },
              {
                phase: '03',
                title: 'Parallel Operations Design',
                duration: '3–6 weeks',
                desc: 'Design the dual-system architecture for the transition period. Define how legacy and AI-native systems coexist, how data flows between them, how governance applies to both, and how workloads migrate incrementally. The coordination layer — the novel jurisdiction that sits above any single function — is formalized here.',
                deliverables: [
                  'Dual-system architecture with integration specifications',
                  'Workload migration sequence with parallel-run validation criteria',
                  'Unified governance framework covering both legacy and AI-native systems',
                  'Coordination layer design: cross-functional escalation protocols for hybrid operations',
                ],
              },
              {
                phase: '04',
                title: 'Controlled Migration',
                duration: 'Ongoing',
                desc: 'Execute the migration in governed phases. Each workload moves through a defined sequence: pilot, parallel-run, validation, cutover. Rollback criteria are pre-defined. Decision rights are tested and revised as real operational data reveals where assignments need adjustment.',
                deliverables: [
                  'Phase-gated migration execution with documented decision records',
                  'Real-time monitoring dashboards for dual-system operations',
                  'Continuous compliance validation during transition',
                  'Decision rights revision log: what changed, why, and what triggered the change',
                ],
              },
              {
                phase: '05',
                title: 'Legacy Decommission &amp; Optimization',
                duration: '4–8 weeks per system',
                desc: 'Decommission legacy systems as workloads complete migration. Archive data per retention requirements. Optimize AI-native operations based on transition learnings. Finalize the steady-state decision rights map for the AI-native operating model.',
                deliverables: [
                  'System decommission plan with data archival and retention compliance',
                  'Contract exit execution and vendor relationship closure',
                  'Steady-state governance framework for AI-native operations',
                  'Final decision rights map and coordination layer charter for ongoing operations',
                ],
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-fraunces text-4xl font-bold text-[#0f4377]/15">
                        {item.phase}
                      </span>
                      <div>
                        <h3 className="font-fraunces text-[#0f2b46] text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                      Key Deliverables
                    </p>
                    <div className="space-y-2.5">
                      {item.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={15}
                            className="text-[#0f4377] mt-0.5 flex-shrink-0"
                          />
                          <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Design Principles ─── */}
      <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Design Principles
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
              Built for regulated industries where operational continuity is non-negotiable.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: 'Governance-first',
                desc: 'Every phase is governed. Every decision is documented. Every migration gate has explicit criteria. The framework produces the audit trail that regulators, boards, and insurers expect.',
              },
              {
                icon: BarChart3,
                title: 'Financially grounded',
                desc: 'Each phase ties to measurable financial outcomes — cost savings, productivity gains, risk reduction. The CFO tracks the transition&#39;s ROI in real time, not after the fact.',
              },
              {
                icon: GitBranch,
                title: 'Reversible by design',
                desc: 'Pre-defined rollback criteria at every phase. If an AI-native system doesn&#39;t meet operational standards, you revert without data loss or governance gaps.',
              },
              {
                icon: Users,
                title: 'Decision rights clarity',
                desc: 'Explicit assignment of every AI-related decision to the executive best positioned to make it. No land grabs, no committees, no ambiguity. Revisable as circumstances change.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <item.icon className="text-[#0f4377] mb-4" size={24} />
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Your industry peers are already evaluating AI-native platforms. Are you?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              The Equipoise Framework starts with a Landscape Assessment — a 2-3 week engagement
              that maps your current SaaS portfolio, surfaces jurisdictional gaps, identifies
              transition candidates, and quantifies the opportunity. No commitment beyond the
              assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#0f2b46] rounded-lg hover:bg-[#0f4377] transition-colors duration-200"
              >
                Start a Landscape Assessment
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#0f2b46] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200"
              >
                View All Services
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
