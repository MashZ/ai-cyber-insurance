import { Link } from 'react-router-dom';
import {
  Shield,
  AlertTriangle,
  Search,
  FileCheck,
  ArrowRight,
  Building2,
  Factory,
  Heart,
  Zap,
  Landmark,
  TrendingUp,
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Shield className="h-3.5 w-3.5" />
              AI Risk Assessment & Audit
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Evaluate AI Risk.{' '}
              <span className="text-accent">Underwrite with Confidence.</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Discimen provides independent, third-party AI risk assessment and audit 
              services for insurance carriers, MGAs, and enterprises deploying generative 
              and agentic AI. We evaluate the risks that standard frameworks weren't 
              built to measure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
              >
                Start an Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded font-semibold hover:border-accent/50 hover:text-accent transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/80 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Standard Insurance Frameworks Weren't Built for AI
            </h2>
            <p className="text-gray-400 leading-relaxed">
              AI incidents have spurred over 150 lawsuits in the US in the past five years. 
              Traditional Tech E&O and cyber policies are silent or ambiguous on AI-specific failures — 
              from hallucinations and model drift to algorithmic bias and IP infringement. 
              Insurers need independent expertise to evaluate these novel exposures. 
              That's where Discimen fits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'AI Vendors',
                description:
                  'Contractual liability and performance warranty risks for companies building and licensing AI products.',
              },
              {
                icon: Building2,
                title: 'Corporations Using AI',
                description:
                  'Exposure to discrimination, hallucination, regulatory fines, and IP infringement from deployed AI systems.',
              },
              {
                icon: TrendingUp,
                title: 'Financial Loss & Interruption',
                description:
                  'Business disruption, flawed AI-driven decisions, and unforecasted operational losses requiring evaluation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-accent/30 transition-colors"
              >
                <item.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three service lines designed for recurring engagement — not one-off consulting 
              projects. We integrate into your underwriting and compliance lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Pre-Underwriting AI Risk Assessment',
                description:
                  'Model inventory and architecture review, vulnerability identification, compliance gap analysis, and risk scoring — before the policy is written.',
                items: [
                  'AI model inventory & architecture review',
                  'Hallucination & error rate profiling',
                  'Algorithmic bias evaluation',
                  'Regulatory compliance mapping (EU AI Act, NIST, SEC)',
                  'Risk scoring and underwriting recommendation',
                ],
              },
              {
                icon: FileCheck,
                title: 'Ongoing Compliance Monitoring',
                description:
                  'Annual and periodic review to ensure AI systems remain aligned with policy terms, regulatory standards, and operational thresholds.',
                items: [
                  'Annual AI system pressure testing',
                  'Model drift and performance monitoring',
                  'Policy-to-practice alignment audits',
                  'Regulatory change impact assessment',
                  'Compliance reporting for policyholders & carriers',
                ],
              },
              {
                icon: Shield,
                title: 'Claims & Loss Evaluation',
                description:
                  'When a loss event occurs, we evaluate whether it was caused by AI failure vs. human error and validate the scope and magnitude of the claim.',
                items: [
                  'AI incident root cause analysis',
                  'Loss attribution: AI failure vs. human error',
                  'Claim magnitude validation',
                  'Technical evidence documentation',
                  'Expert witness and litigation support',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-accent/30 transition-all group"
              >
                <service.icon className="h-10 w-10 text-accent mb-5" />
                <h3 className="text-white font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/80 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Industry Focus
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We bring deep management consulting experience across the industries 
              where AI adoption — and AI risk — is accelerating fastest.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Heart, name: 'Healthcare', detail: 'Diagnostics, patient data, clinical AI' },
              { icon: Factory, name: 'Manufacturing', detail: 'Predictive maintenance, quality AI' },
              { icon: Zap, name: 'Energy', detail: 'Grid optimization, forecasting AI' },
              { icon: Building2, name: 'Automotive', detail: 'Autonomous systems, supply chain AI' },
              { icon: Landmark, name: 'Financial Services', detail: 'Lending, fraud detection, trading AI' },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 text-center hover:border-accent/30 transition-colors"
              >
                <industry.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold text-sm mb-1">
                  {industry.name}
                </h3>
                <p className="text-gray-500 text-xs">{industry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                The AI Insurance Market Is Emerging — Fast
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Pioneering insurers like Armilla AI (Lloyd's coverholder) and Munich Re 
                (aiSure™) have established that AI-specific coverage is not only viable but 
                necessary. Yet most carriers lack the in-house technical capability to 
                evaluate AI risks at the depth these policies demand.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Discimen fills that gap. We provide the independent assessment and audit 
                services that enable standard insurance lines to offer AI coverage without 
                building an AI evaluation practice from scratch.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you're an insurer entering AI liability for the first time, an MGA 
                designing specialty products, or an enterprise seeking to strengthen your 
                risk posture before renewal — we provide the expertise.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: '150+', label: 'AI-related lawsuits in the US (past 5 years)' },
                { stat: '74%', label: 'of companies already using AI in operations' },
                { stat: '60%', label: 'of CEOs hesitant to invest further due to liability concerns' },
                { stat: 'Silent', label: 'Most existing policies on AI-specific failures' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4"
                >
                  <span className="text-accent font-bold text-2xl min-w-[80px]">
                    {item.stat}
                  </span>
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-accent/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Evaluate Your AI Risk Exposure?
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you're an insurer, MGA, or enterprise — let's start with a conversation 
            about your AI risk landscape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
          >
            Request an Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
