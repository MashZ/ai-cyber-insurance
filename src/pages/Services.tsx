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
  Activity,
  Quote,
  Clock,
  Users,
  BadgeDollarSign,
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
              Five capabilities that cover the full AI transition lifecycle.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From the initial decision to migrate off legacy platforms through AI cyber risk
              valuation for the current soft market window, Discimen provides the independent
              advisory and risk assessment that regulated enterprises need to move with confidence.
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
                  desc: 'Independent evaluation of legacy vs. AI-native alternatives for your specific operational context. We map the decision space across ServiceNow vs. Serval, Salesforce vs. AI-native CRM, and Workday vs. emerging alternatives, then quantify the trade-offs across cost, risk, capability, and timeline.',
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
                  desc: 'Technical and commercial evaluation of AI-native vendors, assessing their architecture maturity, data handling practices, security posture, regulatory compliance capabilities, financial stability, and enterprise readiness.',
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

      {/* ─── Service 2: Tensegrity Framework ─── */}
      <section id="tensegrity-framework" className="py-20 lg:py-24 border-t border-slate-100">
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
                The Tensegrity Framework
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Most enterprises cannot execute a clean break from legacy platforms. Data is too
                embedded, workflows too complex, contracts too long. The Tensegrity Framework provides
                a structured methodology for running legacy and AI-native systems in deliberate
                equilibrium, resolving C-suite jurisdictional competition and maintaining governance
                of both.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Developed from real-world enterprise AI transformation engagements across
                manufacturing, healthcare, and energy, all industries where cross-functional tensions are
                most complex and governance requirements most stringent.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: Layers,
                  title: 'Dual-System Architecture Assessment',
                  desc: 'Evaluate how legacy systems of record and AI-native platforms can coexist, mapping data flows, integration points, authentication boundaries, and conflict resolution mechanisms for overlapping functionality.',
                },
                {
                  icon: GitBranch,
                  title: 'Workload Migration Sequencing',
                  desc: 'Determine which workloads to migrate first based on risk tolerance, business impact, and technical complexity. Each migration phase includes parallel-run validation, performance benchmarking, and governance checkpoints.',
                },
                {
                  icon: Shield,
                  title: 'Dual Governance Model',
                  desc: 'Design governance frameworks that cover both legacy and AI-native systems simultaneously, ensuring compliance continuity during transition. Includes audit trail integration, role-based access mapping, and incident management for hybrid environments.',
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
                demand operational governance, not just policies on paper.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our productized governance assessments are specifically designed for agentic AI
                deployments: where autonomous systems make decisions, trigger actions, and interact
                with employees and customers without continuous human oversight.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: ClipboardCheck,
                  title: 'Agentic AI Readiness Assessment',
                  desc: 'Standardized evaluation of your enterprise\'s readiness to deploy autonomous AI agents: covering decision authority boundaries, escalation protocols, audit trail completeness, data access permissions, and human-in-the-loop requirements.',
                },
                {
                  icon: Gavel,
                  title: 'Regulatory Alignment Mapping',
                  desc: 'Map your AI deployments against EU AI Act risk classifications, NIST AI RMF core functions, ISO 42001 certification requirements, and sector-specific regulations (HIPAA, NERC CIP, FDA, SEC). Produce the documentation regulators expect.',
                },
                {
                  icon: Eye,
                  title: 'Shadow AI Detection & Governance',
                  desc: 'Identify and govern unsanctioned AI tool usage across your enterprise, which is the largest governance gap most organizations face. Establish detection mechanisms, usage policies, and integration pathways for shadow AI that demonstrates value.',
                },
                {
                  icon: FileCheck,
                  title: 'Board Oversight Framework',
                  desc: 'Design quantitative AI governance reporting for board-level consumption, covering risk exposure metrics, compliance status, incident trends, and strategic AI investment performance. Make AI governance a demonstrable fiduciary competency.',
                },
                {
                  icon: AlertTriangle,
                  title: 'Continuous Monitoring Protocol Design',
                  desc: 'Establish ongoing governance mechanisms that detect model drift, data quality degradation, bias emergence, and compliance deviations in real-time, moving from periodic audit to continuous assurance for AI systems in production.',
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

      {/* ─── Service 5: AI Cyber Risk Valuation ─── */}
      <section id="cyber-risk-valuation" className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0f2b46] flex items-center justify-center">
                  <Activity className="text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0f4377] uppercase px-2 py-1 bg-[#0f4377]/10 rounded">
                  Risk Valuation
                </span>
              </div>
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
                AI Cyber Risk Valuation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The AI cyber insurance market is in a soft cycle. Carriers are competing for
                premium, terms are favorable, and enterprises that act now can lock in correctly
                priced coverage for exposures that the market has not yet fully priced. That
                window closes as agentic AI claims begin to materialize and underwriters reprice.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Discimen provides the independent pre-underwriting assessment that enterprises
                need to bring a defensible risk profile to their broker -- and that brokers need
                to quantify AI exposure with enough precision to recommend the right coverage at
                the right premium.
              </p>

              {/* Urgency callout */}
              <div className="bg-[#0f2b46] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Clock className="text-white/50 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-xs font-bold tracking-wide text-white/50 uppercase mb-1">
                      Market Timing
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      AI cyber is currently a soft market. As agentic AI incidents accumulate and
                      regulators act, underwriters will reprice and tighten exclusions. The enterprises
                      that correctly quantify and document their AI risk profile today will secure
                      materially better coverage than those that wait.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">

              {/* What has changed */}
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-4">
                  Why Existing Coverage Is Mispriced
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: AlertTriangle,
                      title: 'AI is now the attack vector, not just the asset',
                      desc: 'Traditional cyber policies were written to protect data and systems from external threats. AI has inverted this: the AI layer itself is now being used to conduct attacks, manipulate outputs, and breach systems at a speed and scale that existing policy language does not contemplate.',
                    },
                    {
                      icon: Activity,
                      title: 'Agentic AI introduces autonomous risk',
                      desc: 'When an autonomous agent makes an operational decision -- deleting software, moving funds, modifying a workflow -- no human authorized that action in the moment. This is a fundamentally new liability class that most policies have not addressed and most actuarial models have not yet priced.',
                    },
                    {
                      icon: Users,
                      title: 'Mid-market is the new enterprise target',
                      desc: 'Organizations that assumed they were too small to attract sophisticated threat actors are no longer correct. The cost of AI-enabled attacks has dropped to the point where mid-market companies in financial services, manufacturing, and healthcare are being targeted at the intensity previously reserved for state-level enterprises.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0f2b46]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="text-[#0f2b46]" size={17} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0f2b46] mb-1">{item.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Discimen delivers */}
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-4">
                  The Discimen Pre-Underwriting Assessment
                </h3>
                <div className="space-y-3">
                  {[
                    'Agentic AI exposure inventory: mapping all autonomous decision points, their authority boundaries, and potential loss scenarios',
                    'Attack surface documentation: identifying where AI systems introduce new breach vectors beyond conventional IT perimeter risk',
                    'Quantified risk scoring in actuarial terms: translated from technical findings into the financial exposure language brokers and underwriters require',
                    'Coverage gap analysis: comparing current policy language against actual AI exposure to surface uninsured or underinsured risks',
                    'Governance documentation package: the board-level evidence trail that qualifies enterprises for better terms and demonstrates fiduciary diligence',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#0f4377] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Broker co-advisory */}
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-2">
                  Broker Co-Advisory Model
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Discimen works alongside insurance brokers serving regulated enterprise clients.
                  We provide the independent technical assessment layer that brokers need to
                  accurately place AI cyber coverage -- and that enterprises need to avoid paying
                  for policies that do not match their actual risk profile.
                </p>
                <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <BadgeDollarSign className="text-[#0f4377] flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Brokers who engage Discimen bring clients a third-party-validated risk profile
                    rather than a self-reported questionnaire. This closes the gap between what
                    enterprises think their AI exposure is and what it actually is -- improving
                    placement accuracy and protecting both the client and the carrier.
                  </p>
                </div>
              </div>

              {/* Field intelligence quote */}
              <div className="border-l-4 border-[#0f4377] pl-6 py-2">
                <Quote className="text-[#0f4377]/30 mb-3" size={20} />
                <p className="text-sm text-slate-600 italic leading-relaxed mb-3">
                  "Everyone at that leadership table should know what their AI risk number is.
                  If you have a really good broker, they will be quantifying that risk -- because
                  they are telling that story to your carrier. If you don&#39;t have that
                  conversation yet, go find someone who can quantify your cyber risk and put it
                  on the agenda."
                </p>
                <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase">
                  Enterprise risk practitioner, regulated financial services
                </p>
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
              your current AI landscape, identify the highest-impact opportunities, and outline
              a path forward -- including where your AI cyber risk may be undervalued relative
              to current market conditions.
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
