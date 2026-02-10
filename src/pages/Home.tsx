import { Link } from 'react-router-dom';
import {
  Shield,
  TrendingUp,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Brain,
  Lock,
  Scale,
  AlertCircle,
  FileCheck,
} from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '$4.8B', label: 'AI Insurance Market by 2032', sublabel: '80% CAGR' },
    { value: '60%', label: 'Companies Hit by AI Cyberattacks', sublabel: 'Past year' },
    { value: '$11B+', label: 'Cyber Insurance Market', sublabel: 'Doubled since 2022' },
    { value: '83%', label: 'CEOs Cite Cyber as Top Constraint', sublabel: 'Insurance sector' },
  ];

  const coverageAreas = [
    {
      icon: Brain,
      title: 'AI Performance Risks',
      description: 'Model errors, hallucinations, inaccurate outputs, and performance failures',
    },
    {
      icon: Lock,
      title: 'Privacy & Data Leakage',
      description: 'Confidential information exposure, PII violations, and regulatory compliance',
    },
    {
      icon: Scale,
      title: 'Regulatory Violations',
      description: 'EU AI Act, NAIC requirements, algorithmic bias, and compliance frameworks',
    },
    {
      icon: AlertCircle,
      title: 'Model Output Liability',
      description: 'Biased, harmful, or discriminatory outputs and content generation risks',
    },
    {
      icon: FileCheck,
      title: 'IP & Copyright',
      description: 'Training data provenance, copyright infringement, and trade secret exposure',
    },
  ];

  const services = [
    {
      title: 'For Insurance Carriers',
      description: 'Pre-underwriting risk assessment to confidently price AI and cyber policies',
      icon: Shield,
    },
    {
      title: 'For Enterprises',
      description: 'Risk reduction and documentation to lower insurance premiums',
      icon: TrendingUp,
    },
    {
      title: 'For Regulators',
      description: 'Governance frameworks and compliance validation for emerging AI regulations',
      icon: Scale,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="inline-flex items-center gap-x-2 rounded-full bg-accent-500/10 px-3 py-1 text-sm font-semibold leading-6 text-accent-400 ring-1 ring-inset ring-accent-500/20">
                <TrendingUp className="h-4 w-4" />
                $4.8B Market Opportunity
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Quantifying the Unquantifiable: AI & Cyber Risk Valuation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Insurance carriers need to price risks they don't fully understand. Enterprises deploy
              AI without clear exposure quantification. Regulators demand governance frameworks
              that don't yet exist. <span className="font-semibold text-accent-400">We bridge the gap.</span>
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/services"
                className="rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-accent-400 flex items-center gap-2"
              >
                Meet the Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
                  alt="AI risk analytics dashboard"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
                The Market Reality
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Why AI and cyber insurance needs specialized risk assessment now
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-primary-800">
                    {stat.value}
                  </dd>
                  <dd className="mt-2 text-xs text-gray-500">{stat.sublabel}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent-600">The Challenge</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              Three Critical Gaps in AI Insurance
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Traditional actuarial models break down when facing non-deterministic AI failures,
              nth-party risk aggregation, and fragmenting regulatory frameworks.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary-800">
                    <service.icon className="h-5 w-5 flex-none text-accent-600" aria-hidden="true" />
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Coverage Areas */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent-600">Comprehensive Coverage</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              Five Core Risk Assessment Areas
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From model performance failures to intellectual property exposure, we provide
              specialized valuation services across all AI and cyber liability categories.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {coverageAreas.map((area) => (
                <div key={area.title} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-primary-800">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500">
                      <area.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {area.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{area.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent-600">Our Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              First Principles + Systems Thinking
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deconstruct AI risk from fundamental axioms and map entire insurance ecosystems
              to deliver assessment frameworks that actually work.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary-800">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                    <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Domain Expertise
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Deep AI/ML technical knowledge combined with insurance industry experience from
                  IBM, FTI Consulting, and enterprise transformations.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary-800">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                    <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Objectivity
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We serve both sides—carriers and policyholders—with strict ethical walls, building
                  reputation as the trusted third-party assessor.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary-800">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                    <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Methodology
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Rigorous assessment frameworks based on NIST AI RMF, ISO 42001, and regulatory
                  standards, not guesswork.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary-800">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                    <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Speed to Market
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Standardized offerings that scale while maintaining customization for enterprise-specific
                  risk profiles.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent-500">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to quantify your AI & cyber exposure?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-accent-100">
              Whether you're an insurance carrier seeking underwriting support, an enterprise
              deploying AI systems, or a regulator developing governance frameworks—we can help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-accent-100"
              >
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
