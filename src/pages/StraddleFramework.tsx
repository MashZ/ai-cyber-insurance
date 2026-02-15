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
} from 'lucide-react';

export default function StraddleFramework() {
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

            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl font-semibold leading-tight mb-6">
              The Straddle Framework
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              A structured methodology for navigating the transition from legacy SaaS to AI-native
              operations — without disrupting the business you need to run today.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Developed from enterprise AI transformation engagements across manufacturing,
              healthcare, and energy utilities — industries where operational continuity isn't
              optional and regulatory compliance spans both the old and new systems simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section className="py-20 lg:py-24 bg-[#0f2b46]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
              The Core Challenge
            </p>
            <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
              You have to make money today to make money tomorrow.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              AI-native platforms like Serval are replacing entire ITSM stacks. Enterprises want
              to move. But the reality is more complex than any vendor admits.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Clock,
                  label: 'Multi-year contracts',
                  desc: 'ServiceNow, Salesforce, and Workday contracts often lock enterprises in for 3-5 years with significant exit penalties.',
                },
                {
                  icon: Layers,
                  label: 'Deeply embedded data',
                  desc: 'Years of operational data, custom workflows, and institutional knowledge live inside legacy systems that cannot be migrated overnight.',
                },
                {
                  icon: Shield,
                  label: 'Regulatory obligations',
                  desc: 'Compliance frameworks map to existing systems. Migration creates governance gaps that regulators and auditors will scrutinize.',
                },
                {
                  icon: AlertTriangle,
                  label: 'Operational risk',
                  desc: 'Employees depend on current tools daily. Disrupting service desk, HR, or finance operations during transition creates real business harm.',
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
              Five phases. Governed at every step.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The Straddle Framework is not a theoretical model — it is a sequenced engagement
              methodology with specific deliverables, decision gates, and governance checkpoints
              at each phase.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                phase: '01',
                title: 'Landscape Assessment',
                duration: '2–3 weeks',
                desc: 'Map the current state: every SaaS platform, contract term, data dependency, workflow integration, and governance mechanism. Identify which systems are candidates for AI-native replacement and which must remain.',
                deliverables: [
                  'Complete SaaS platform inventory with contract terms and exit provisions',
                  'Data dependency map showing cross-system flows and integration points',
                  'Governance gap analysis between current controls and dual-system requirements',
                  'Initial prioritization of workloads by migration readiness and business impact',
                ],
              },
              {
                phase: '02',
                title: 'Decision Architecture',
                duration: '2–4 weeks',
                desc: 'Build the decision framework for each platform: stay, layer AI on top, or rip-and-replace. Model the financial, operational, and compliance implications of each path. Present board-ready analysis.',
                deliverables: [
                  'Per-platform decision matrix with risk-adjusted cost modeling',
                  'Scenario analysis for different migration timelines and sequencing',
                  'Regulatory impact assessment for each migration path',
                  'Board-ready executive briefing with recommendation and rationale',
                ],
              },
              {
                phase: '03',
                title: 'Parallel Operations Design',
                duration: '3–6 weeks',
                desc: 'Design the dual-system architecture for the transition period. Define how legacy and AI-native systems coexist, how data flows between them, how governance applies to both, and how workloads migrate incrementally.',
                deliverables: [
                  'Dual-system architecture with integration specifications',
                  'Workload migration sequence with parallel-run validation criteria',
                  'Unified governance framework covering both legacy and AI-native systems',
                  'Incident management and escalation protocols for hybrid operations',
                ],
              },
              {
                phase: '04',
                title: 'Controlled Migration',
                duration: 'Ongoing',
                desc: 'Execute the migration in governed phases. Each workload moves through a defined sequence: pilot, parallel-run, validation, cutover. Rollback criteria are pre-defined. Governance checkpoints gate every transition.',
                deliverables: [
                  'Phase-gated migration execution with documented decision records',
                  'Real-time monitoring dashboards for dual-system operations',
                  'Continuous compliance validation during transition',
                  'Performance benchmarking: AI-native vs. legacy for migrated workloads',
                ],
              },
              {
                phase: '05',
                title: 'Legacy Decommission & Optimization',
                duration: '4–8 weeks per system',
                desc: 'Decommission legacy systems as workloads complete migration. Archive data per retention requirements. Optimize AI-native operations based on transition learnings. Update governance frameworks for steady-state.',
                deliverables: [
                  'System decommission plan with data archival and retention compliance',
                  'Contract exit execution and vendor relationship closure',
                  'Steady-state governance framework for AI-native operations',
                  'Post-migration ROI analysis and lessons learned documentation',
                ],
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Phase header */}
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

                  {/* Deliverables */}
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

      {/* ─── Why It Works ─── */}
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: 'Governance-first',
                desc: 'Every phase is governed. Every decision is documented. Every migration gate has explicit criteria. The framework produces the audit trail that regulators, boards, and insurers expect.',
              },
              {
                icon: BarChart3,
                title: 'Financially grounded',
                desc: 'Each phase ties to measurable financial outcomes — cost savings, productivity gains, risk reduction. The CFO can track the transition\'s ROI in real time, not after the fact.',
              },
              {
                icon: GitBranch,
                title: 'Reversible by design',
                desc: 'Pre-defined rollback criteria at every phase. If an AI-native system doesn\'t meet operational standards, you can revert without data loss or governance gaps. No one-way doors.',
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
              The Straddle Framework starts with a Landscape Assessment — a 2-3 week engagement
              that maps your current SaaS portfolio, identifies transition candidates, and
              quantifies the opportunity. No commitment beyond the assessment.
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
