import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Scale,
  Building2,
  CheckCircle2,
  FileCheck,
  Search,
  Layers,
  GitBranch,
  AlertTriangle,
  BarChart3,
  ClipboardCheck,
  Eye,
  Gavel,
} from 'lucide-react';

export default function Services() {
  return (
    <main className="pt-20">
      {/* ─── Hero ─── */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-4">
              Services
            </p>
            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Four capabilities that cover the full AI transition lifecycle.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From the initial decision to migrate off legacy platforms through ongoing governance
              of AI-native operations, Discimen provides the independent advisory and risk
              assessment that regulated enterprises need to move with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Service 1: AI Transition Advisory ─── */}
      <section id="transition-advisory" className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0f2b46] flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0f4377] uppercase px-2 py-1 bg-[#0f4377]/10 rounded">
                  Strategic
                </span>
              </div>
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
                AI Transition Advisory
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The SaaS market is repricing. AI-native platforms are replacing legacy systems of
                record. Enterprises face a high-stakes decision: stay, layer, or replace. We provide
                the independent evaluation to make that decision with financial and operational clarity.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Designed for CFOs and CEOs navigating platform consolidation, vendor evaluation,
                and budget reallocation decisions in the context of the 2026 SaaS market shift.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: Search,
                  title: 'Platform Decision Analysis',
                  desc: 'Independent evaluation of legacy vs. AI-native alternatives for your specific operational context. We map the decision space — ServiceNow vs. Serval, Salesforce vs. AI-native CRM, Workday vs. emerging alternatives — and quantify the trade-offs across cost, risk, capability, and timeline.',
                },
                {
                  icon: BarChart3,
                  title: 'Total Cost of Ownership Modeling',
                  desc: 'Rigorous TCO comparison of your current SaaS stack against AI-native alternatives, including migration costs, productivity impact during transition, retraining investment, contract exit costs, and projected 3-year operating economics.',
                },
                {
                  icon: FileCheck,
                  title: 'Business Case Development',
                  desc: 'Board-ready business cases for AI platform transitions that include risk-adjusted ROI projections, competitive benchmarking against industry peers, and scenario modeling for different migration timelines and approaches.',
                },
                {
                  icon: Layers,
                  title: 'Vendor Due Diligence',
                  desc: 'Technical and commercial evaluation of AI-native vendors — assessing their architecture maturity, data handling practices, security posture, regulatory compliance capabilities, financial stability, and enterprise readiness.',
                },
                {
                  icon: GitBranch,
                  title: 'Migration Roadmap Design',
                  desc: 'Phased transition plans that balance operational continuity with modernization urgency. Each phase includes governance checkpoints, rollback criteria, and measurable success metrics tied to business outcomes.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f2b46]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-[#0f2b46]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-fraunces text-[#0f2b46] text-base font-semibold mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service 2: Straddle Framework ─── */}
      <section id="straddle-framework" className="py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0f2b46] flex items-center justify-center">
                  <Scale className="text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0f4377] uppercase px-2 py-1 bg-[#0f4377]/10 rounded">
                  Operational
                </span>
              </div>
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
                The Straddle Framework
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Most enterprises cannot execute a clean break from legacy platforms. Data is too
                embedded, workflows too complex, contracts too long. The Straddle Framework provides
                a structured methodology for running legacy and AI-native systems in parallel while
                maintaining governance of both.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Developed from real-world enterprise AI transformation engagements across
                manufacturing, healthcare, and energy — industries where the straddle is most
                complex and governance requirements most stringent.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: Layers,
                  title: 'Dual-System Architecture Assessment',
                  desc: 'Evaluate how legacy systems of record and AI-native platforms can coexist — mapping data flows, integration points, authentication boundaries, and conflict resolution mechanisms for overlapping functionality.',
                },
                {
                  icon: GitBranch,
                  title: 'Workload Migration Sequencing',
                  desc: 'Determine which workloads to migrate first based on risk tolerance, business impact, and technical complexity. Each migration phase includes parallel-run validation, performance benchmarking, and governance checkpoints.',
                },
                {
                  icon: Shield,
                  title: 'Dual Governance Model',
                  desc: 'Design governance frameworks that cover both legacy and AI-native systems simultaneously — ensuring compliance continuity during transition. Includes audit trail integration, role-based access mapping, and incident management for hybrid environments.',
                },
                {
                  icon: AlertTriangle,
                  title: 'Contract & Vendor Exit Strategy',
                  desc: 'Navigate multi-year SaaS contract obligations while piloting alternatives. We map contractual constraints, identify early-exit provisions, negotiate transition accommodations, and model the financial impact of different exit timelines.',
                },
                {
                  icon: Eye,
                  title: 'Operational Continuity Monitoring',
                  desc: 'Define the metrics, thresholds, and escalation protocols that keep operations stable during the transition. Includes rollback criteria, service-level monitoring, and real-time risk indicators for dual-system environments.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f2b46]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-[#0f2b46]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-fraunces text-[#0f2b46] text-base font-semibold mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service 3: AI Governance Layer ─── */}
      <section id="governance-layer" className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0f2b46] flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0f4377] uppercase px-2 py-1 bg-[#0f4377]/10 rounded">
                  Compliance
                </span>
              </div>
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
                AI Governance Layer
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Governance frameworks have not kept pace with AI deployment. Only 39% of Fortune 100
                companies disclosed board oversight of AI as of mid-2025. The EU AI Act, Colorado AI
                Act, and California transparency requirements create enforceable obligations that
                demand operational governance — not just policies on paper.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our productized governance assessments are specifically designed for agentic AI
                deployments — where autonomous systems make decisions, trigger actions, and interact
                with employees and customers without continuous human oversight.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: ClipboardCheck,
                  title: 'Agentic AI Readiness Assessment',
                  desc: 'Standardized evaluation of your enterprise\'s readiness to deploy autonomous AI agents — covering decision authority boundaries, escalation protocols, audit trail completeness, data access permissions, and human-in-the-loop requirements.',
                },
                {
                  icon: Gavel,
                  title: 'Regulatory Alignment Mapping',
                  desc: 'Map your AI deployments against EU AI Act risk classifications, NIST AI RMF core functions, ISO 42001 certification requirements, and sector-specific regulations (HIPAA, NERC CIP, FDA, SEC). Produce the documentation regulators expect.',
                },
                {
                  icon: Eye,
                  title: 'Shadow AI Detection & Governance',
                  desc: 'Identify and govern unsanctioned AI tool usage across your enterprise — the largest governance gap most organizations face. Establish detection mechanisms, usage policies, and integration pathways for shadow AI that demonstrates value.',
                },
                {
                  icon: FileCheck,
                  title: 'Board Oversight Framework',
                  desc: 'Design quantitative AI governance reporting for board-level consumption — covering risk exposure metrics, compliance status, incident trends, and strategic AI investment performance. Make AI governance a demonstrable fiduciary competency.',
                },
                {
                  icon: AlertTriangle,
                  title: 'Continuous Monitoring Protocol Design',
                  desc: 'Establish ongoing governance mechanisms that detect model drift, data quality degradation, bias emergence, and compliance deviations in real-time — moving from periodic audit to continuous assurance for AI systems in production.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0f2b46]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-[#0f2b46]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-fraunces text-[#0f2b46] text-base font-semibold mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service 4: AI Risk Assessment ─── */}
      <section id="risk-assessment" className="py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0f2b46] flex items-center justify-center">
                  <Building2 className="text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0f4377] uppercase px-2 py-1 bg-[#0f4377]/10 rounded">
                  Insurance
                </span>
              </div>
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
                AI Risk Assessment
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The insurance industry needs independent, technically rigorous evaluation to
                confidently underwrite AI-specific coverage. Discimen provides the third-party
                assessment that insurers, MGAs, and enterprises need to price risk, validate claims,
                and maintain ongoing compliance with policy requirements.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our risk assessments span the full insurance lifecycle: pre-underwriting evaluation,
                ongoing compliance monitoring, and claims-stage loss analysis.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3">
              {/* Three sub-sections */}
              <div className="space-y-8">
                {/* Pre-Underwriting */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-4">
                    Pre-Underwriting Risk Assessment
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Complete AI model inventory with architecture documentation and data lineage mapping',
                      'Vulnerability profiling covering adversarial robustness, data poisoning exposure, and prompt injection susceptibility',
                      'Compliance mapping to regulatory frameworks and industry standards applicable to the insured\'s sector',
                      'Quantitative risk scoring that insurers can directly incorporate into actuarial models and premium calculations',
                      'Product liability exposure assessment for AI-embedded products and autonomous decision systems',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-[#0f4377] mt-0.5 flex-shrink-0"
                        />
                        <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ongoing Monitoring */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-4">
                    Ongoing Compliance Monitoring
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Annual and semi-annual pressure testing of AI systems against evolving threat landscapes and regulatory requirements',
                      'Model drift monitoring and performance degradation detection across production AI systems',
                      'Policy alignment audits verifying continued compliance with insurance policy conditions and obligations',
                      'Regulatory change impact assessment as new AI laws and standards take effect across jurisdictions',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-[#0f4377] mt-0.5 flex-shrink-0"
                        />
                        <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Claims & Loss */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-4">
                    Claims & Loss Evaluation
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Technical root cause analysis determining whether AI system behavior caused or contributed to the claimed loss',
                      'Loss attribution modeling that quantifies the AI system\'s contribution versus other factors in complex incidents',
                      'Claim validation through independent technical reproduction and evidence evaluation',
                      'Expert witness support with defensible technical analysis for litigation and arbitration proceedings',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-[#0f4377] mt-0.5 flex-shrink-0"
                        />
                        <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24 bg-[#0f2b46]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Start with a conversation, not a contract.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Every engagement begins with a 45-minute executive briefing where we assess
              your current AI landscape, identify the highest-impact transition opportunities,
              and outline a path forward — at no cost.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#0f2b46] bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200"
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
