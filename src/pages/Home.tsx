import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Factory,
  Heart,
  Zap,
  Landmark,
  TrendingUp,
  Search,
  FileCheck,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
              AI Risk Assessment &amp; Audit
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-primary leading-[1.15] mb-6">
              Independent expertise for underwriting AI risk
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
              Discimen provides third-party AI risk assessment and audit services 
              for insurance carriers, MGAs, and enterprises deploying generative 
              and agentic AI. We deliver the risk intelligence that AI liability 
              coverage requires.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded font-semibold hover:bg-accent-light transition-colors"
              >
                Request Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-primary px-7 py-3 rounded font-semibold hover:border-primary/40 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-100" />
      </div>

      {/* Three customer segments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              A new category of risk demands specialized evaluation
            </h2>
            <p className="text-gray-500 leading-relaxed">
              AI-specific exposures hallucinations, algorithmic bias, model drift, 
              IP infringement require assessment methodologies designed for how 
              these systems actually behave. Discimen brings that depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'AI Vendors',
                description:
                  'Contractual liability and performance warranty risks for companies building and licensing AI products.',
              },
              {
                icon: Building2,
                title: 'Corporations Deploying AI',
                description:
                  'Exposure to discrimination, hallucination, regulatory fines, and IP infringement from production AI systems.',
              },
              {
                icon: TrendingUp,
                title: 'Financial Loss & Interruption',
                description:
                  'Business disruption, flawed AI-driven decisions, and operational losses requiring independent evaluation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-7 hover:border-primary/20 transition-colors"
              >
                <item.icon className="h-7 w-7 text-primary mb-4" />
                <h3 className="text-primary font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Three service lines. One lifecycle.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Designed for recurring engagement across the full AI insurance 
              lifecycle from underwriting to compliance to claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Pre-Underwriting Risk Assessment',
                description:
                  'Model inventory, architecture review, vulnerability profiling, compliance mapping, and risk scoring delivered before the policy is written.',
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
                  'Annual and periodic review ensuring AI systems remain aligned with policy terms, regulatory standards, and operational thresholds.',
                items: [
                  'Annual AI system pressure testing',
                  'Model drift and performance monitoring',
                  'Policy-to-practice alignment audits',
                  'Regulatory change impact assessment',
                  'Compliance reporting for policyholders & carriers',
                ],
              },
              {
                icon: ShieldCheck,
                title: 'Claims & Loss Evaluation',
                description:
                  'When a loss event occurs, we determine root cause, validate claim scope, and distinguish AI failure from human error.',
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
                className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-sm transition-all"
              >
                <service.icon className="h-8 w-8 text-primary mb-5" />
                <h3 className="text-primary font-bold text-lg mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-500 text-sm flex items-start gap-2"
                    >
                      <span className="text-primary/40 mt-0.5 text-xs">\u25CF</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Deep industry experience
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We bring management consulting experience across the sectors 
              where AI adoption and AI risk is accelerating fastest.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {[
              { icon: Heart, name: 'Healthcare', detail: 'Diagnostics, patient data, clinical AI' },
              { icon: Factory, name: 'Manufacturing', detail: 'Predictive maintenance, quality AI' },
              { icon: Zap, name: 'Energy', detail: 'Grid optimization, forecasting AI' },
              { icon: Building2, name: 'Automotive', detail: 'Autonomous systems, supply chain AI' },
              { icon: Landmark, name: 'Financial Services', detail: 'Lending, fraud detection, trading AI' },
            ].map((industry, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-6 text-center hover:border-primary/20 transition-colors"
              >
                <industry.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <h3 className="text-primary font-semibold text-sm mb-1">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-xs">{industry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                The AI insurance market is here
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Pioneering insurers like Armilla AI and Munich Re have proven that 
                AI-specific coverage is both viable and necessary. The opportunity 
                now is for standard carriers and MGAs to enter this market with 
                confidence backed by independent risk evaluation.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                Discimen provides that evaluation. We enable insurance lines to 
                offer AI coverage by delivering the technical assessment and audit 
                capability the underwriting process demands.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Whether you are an insurer entering AI liability coverage, an MGA 
                designing specialty products, or an enterprise preparing for 
                renewal we provide the expertise.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: '150+', label: 'AI-related lawsuits in the US (past 5 years)' },
                { stat: '74%', label: 'of companies already using AI in operations' },
                { stat: '60%', label: 'of CEOs cite liability concerns as the barrier to further AI investment' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-5 flex items-center gap-5"
                >
                  <span className="text-primary font-display font-bold text-3xl min-w-[80px]">
                    {item.stat}
                  </span>
                  <span className="text-gray-500 text-sm leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Ready to scope your AI risk evaluation?
          </h2>
          <p className="text-gray-500 mb-10">
            Every engagement starts with a conversation about your AI landscape, 
            coverage objectives, and the depth of assessment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded font-semibold hover:bg-accent-light transition-colors"
          >
            Request Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
