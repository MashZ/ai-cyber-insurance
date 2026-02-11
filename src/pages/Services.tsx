import {
  Search,
  FileCheck,
  Shield,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Eye,
  Scale,
  Database,
  Brain,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Pre-Underwriting AI Risk Assessment',
      tagline: 'Before the policy is written',
      description:
        'We conduct comprehensive evaluation of AI systems prior to insurance underwriting — providing carriers and MGAs with the independent risk intelligence they need to price and structure AI liability coverage.',
      deliverables: [
        {
          icon: Database,
          name: 'AI Model Inventory & Architecture Review',
          detail:
            'Catalog all deployed AI/ML models, assess the solution architecture, evaluate model selection rationale, and identify architecture-level risk concentrations across generative and agentic systems.',
        },
        {
          icon: AlertTriangle,
          name: 'Vulnerability & Error Profiling',
          detail:
            'LLM testing and third-party evaluation to identify hallucination rates, error patterns, edge-case failures, and prompt injection vulnerabilities in generative AI systems and autonomous agents.',
        },
        {
          icon: Scale,
          name: 'Algorithmic Bias & Fairness Evaluation',
          detail:
            'Assess AI decision-making for discriminatory outcomes in hiring, lending, diagnostics, and customer-facing applications — evaluating employment practices liability and regulatory exposure.',
        },
        {
          icon: ClipboardList,
          name: 'Regulatory Compliance Mapping',
          detail:
            'Map AI systems against ISO standards, EU AI Act requirements, NIST AI RMF, SEC guidance, and sector-specific regulations. Identify compliance gaps and pre-existing exposures.',
        },
        {
          icon: BarChart3,
          name: 'Risk Scoring & Underwriting Recommendation',
          detail:
            'Produce a structured risk score and underwriting recommendation that feeds directly into carrier decision-making — enabling confident policy issuance with clear risk parameters.',
        },
      ],
      buyerValue:
        'Insurers and MGAs get the independent technical evaluation they need to underwrite AI-specific policies — without building an in-house AI risk practice.',
    },
    {
      icon: FileCheck,
      title: 'Ongoing Compliance & Performance Monitoring',
      tagline: 'During the policy period',
      description:
        'Annual and periodic assessments to ensure AI systems remain compliant, performant, and aligned with insurance policy terms — providing continuous risk visibility for both policyholders and carriers.',
      deliverables: [
        {
          icon: Eye,
          name: 'Annual AI System Pressure Testing',
          detail:
            'Recurring evaluation of deployed AI systems to verify continued accuracy, fairness, and reliability as models are updated, retrained, or exposed to new data distributions.',
        },
        {
          icon: BarChart3,
          name: 'Model Drift & Performance Monitoring',
          detail:
            'Track performance degradation, data drift, and calibration shifts over time — the systematic risks that can erode AI reliability between underwriting cycles.',
        },
        {
          icon: ClipboardList,
          name: 'Policy-to-Practice Alignment Audits',
          detail:
            'Compare the company's actual AI governance procedures against insurance policy requirements. Identify deltas, document gaps, and recommend remediation.',
        },
        {
          icon: Scale,
          name: 'Regulatory Change Impact Assessment',
          detail:
            'As AI regulations evolve (EU AI Act phased obligations, US state laws, sector-specific rules), evaluate how changes affect coverage terms and compliance posture.',
        },
        {
          icon: FileCheck,
          name: 'Compliance Reporting',
          detail:
            'Structured reporting for policyholders, carriers, and regulators — producing audit-ready documentation that demonstrates ongoing AI governance.',
        },
      ],
      buyerValue:
        'Policyholders maintain coverage eligibility. Carriers get continuous risk visibility. Both sides avoid surprises at renewal or claim time.',
    },
    {
      icon: Shield,
      title: 'Claims & Loss Evaluation',
      tagline: 'When a loss event occurs',
      description:
        'When an AI-related claim arises, we deploy to evaluate whether the loss was caused by AI system failure versus human error, validate the scope and magnitude of the claim, and provide technical evidence for resolution.',
      deliverables: [
        {
          icon: Search,
          name: 'AI Incident Root Cause Analysis',
          detail:
            'Technical investigation to determine exactly what failed — model error, data issue, workflow misconfiguration, integration breakdown, or agentic decision chain failure.',
        },
        {
          icon: Scale,
          name: 'Loss Attribution: AI vs. Human Error',
          detail:
            'Critically evaluate whether the loss was caused by AI underperformance (covered) or human override, misconfiguration, or negligence (potentially excluded under the policy).',
        },
        {
          icon: BarChart3,
          name: 'Claim Magnitude Validation',
          detail:
            'Independently assess whether the claimed financial loss aligns with the actual impact. Evaluate direct costs, business interruption, and consequential damages attributable to the AI event.',
        },
        {
          icon: ClipboardList,
          name: 'Technical Evidence & Documentation',
          detail:
            'Produce detailed technical documentation of findings — model logs, performance data, workflow traces — suitable for claims adjudication and dispute resolution.',
        },
        {
          icon: AlertTriangle,
          name: 'Expert Witness & Litigation Support',
          detail:
            'When claims escalate to litigation, provide expert testimony and technical analysis to support or defend AI-related liability determinations.',
        },
      ],
      buyerValue:
        'Insurers get independent validation before paying claims. Policyholders get fair, technically grounded evaluation of their losses.',
    },
  ];

  return (
    <div className="min-h-screen bg-primary pt-24">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Service Offerings
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Three Service Lines. One Lifecycle.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our services map to the full AI insurance lifecycle — from pre-underwriting 
              risk evaluation, through ongoing compliance monitoring, to claims and loss 
              assessment when incidents occur. Designed for recurring engagement, not 
              one-off consulting projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <service.icon className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {service.tagline}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-1">
                    {service.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/5 rounded-lg p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-4 w-4 text-accent" />
                      <h3 className="text-white font-semibold text-sm">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 bg-accent/5 border border-accent/20 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-accent">Value: </span>
                  {service.buyerValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Our Assessment Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured, repeatable evaluation framework designed for the specific 
              risks of generative and agentic AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Model Inventory',
                description:
                  'Catalog all AI/ML models deployed — including foundation models, fine-tuned variants, and agentic orchestrations.',
              },
              {
                step: '02',
                title: 'Architecture Review',
                description:
                  'Evaluate solution architecture, data pipelines, model selection rationale, and integration points across the AI stack.',
              },
              {
                step: '03',
                title: 'Risk Scoring',
                description:
                  'Quantify risk across hallucination, bias, drift, security, IP exposure, and regulatory compliance dimensions.',
              },
              {
                step: '04',
                title: 'Compliance Mapping',
                description:
                  'Map findings against ISO, EU AI Act, NIST AI RMF, sector regulations, and insurance policy requirements.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6 relative"
              >
                <span className="text-accent/30 font-bold text-4xl absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Focused on Generative & Agentic AI
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We specialize exclusively in the risk categories created by generative AI 
                  and autonomous AI agents — the frontier technologies that existing 
                  insurance frameworks weren't designed to evaluate.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This focus means deeper expertise, more relevant assessment frameworks, 
                  and faster time-to-value than generalist risk consultancies.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">
                  Key Risk Categories We Evaluate
                </h3>
                <ul className="space-y-2">
                  {[
                    'Hallucinations and output errors in LLMs',
                    'Algorithmic bias in AI decision engines',
                    'Agentic AI workflow failures and escalation gaps',
                    'IP infringement from training data provenance',
                    'Privacy and data leakage from model behavior',
                    'Model drift and performance degradation',
                    'Business interruption from AI system failures',
                    'Regulatory non-compliance (EU AI Act, NIST, SEC)',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-400 text-sm flex items-start gap-2"
                    >
                      <Brain className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-accent/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's Scope Your AI Risk Evaluation
          </h2>
          <p className="text-gray-400 mb-8">
            Every engagement begins with a conversation about your AI landscape, 
            your coverage objectives, and the level of assessment depth required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
