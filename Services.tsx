import { Brain, Lock, Scale, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'ai-performance',
      icon: Brain,
      title: 'AI Performance Risk Assessment',
      description: 'Comprehensive evaluation of model errors, hallucinations, and output accuracy failures',
      offerings: [
        'Pre-Underwriting AI System Risk Profile ($50K-150K)',
        'Ongoing Model Monitoring & Compliance (Retainer $10K-30K/month)',
        'Post-Loss Performance Assessment (5-8% of claim value)',
      ],
      methodology: [
        'Model inventory & architecture review',
        'Performance benchmarking vs. industry standards',
        'Failure mode & effects analysis (FMEA)',
        'Loss probability modeling',
      ],
    },
    {
      id: 'privacy',
      icon: Lock,
      title: 'Privacy & Data Leakage Liability',
      description: 'Protection against confidential information exposure and regulatory violations',
      offerings: [
        'AI Data Privacy Impact Assessment ($75K-200K)',
        'Privacy Breach Forensics & Quantification (Emergency $100K-300K)',
      ],
      methodology: [
        'Complete data lineage tracing',
        'PII/confidential data inventory',
        'Privacy-enhancing technology evaluation',
        'GDPR/CCPA compliance gap analysis',
      ],
    },
    {
      id: 'regulatory',
      icon: Scale,
      title: 'AI Regulatory Compliance',
      description: 'Navigate emerging AI regulations including EU AI Act and NAIC requirements',
      offerings: [
        'Regulatory Compliance Readiness Assessment ($60K-150K)',
        'Regulatory Defense Support Services ($150-300/hour)',
      ],
      methodology: [
        'Multi-jurisdiction compliance matrix',
        'High-risk AI system classification',
        'Compliance roadmap development',
        'Cost-benefit analysis vs. potential fines',
      ],
    },
    {
      id: 'output-liability',
      icon: AlertCircle,
      title: 'Model Output Liability',
      description: 'Assessment of bias, harmful content, and discriminatory AI outputs',
      offerings: [
        'AI Bias & Fairness Audit ($80K-180K)',
        'Content Harm Assessment ($50K-120K)',
      ],
      methodology: [
        'Protected class impact analysis',
        'Disparate impact testing',
        'Red-teaming exercises for harmful content',
        'Reputational risk quantification',
      ],
    },
    {
      id: 'ip-copyright',
      icon: FileCheck,
      title: 'IP & Copyright Infringement',
      description: 'Evaluation of training data provenance and copyright exposure',
      offerings: [
        'AI IP Risk Assessment ($60K-140K)',
        'Infringement Defense Services (Litigation support $200K-500K)',
      ],
      methodology: [
        'Training data provenance audit',
        'Copyright infringement risk analysis',
        'Patent landscape review',
        'Trade secret protection evaluation',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Specialized Risk Assessment Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive coverage across all AI and cyber liability categories, from pre-underwriting
            to post-loss assessment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className={index % 2 === 0 ? '' : 'lg:order-last'}>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent-500">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold leading-7 text-accent-600">
                        Coverage Area {index + 1}
                      </h2>
                      <p className="text-3xl font-bold tracking-tight text-primary-800">
                        {service.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-base font-semibold leading-7 text-primary-800">
                      Service Offerings
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start gap-x-3">
                          <div className="flex-none">
                            <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-accent-600" />
                            </div>
                          </div>
                          <span className="text-gray-600">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 0 ? '' : 'lg:order-first'}>
                  <div className="rounded-2xl bg-gray-50 p-8">
                    <h3 className="text-base font-semibold leading-7 text-primary-800 mb-6">
                      Our Methodology
                    </h3>
                    <ul className="space-y-4">
                      {service.methodology.map((item, i) => (
                        <li key={i} className="flex items-start gap-x-3">
                          <ArrowRight className="mt-1 h-5 w-5 flex-none text-accent-600" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-2xl bg-accent-50 p-6 border border-accent-200">
                    <h4 className="text-sm font-semibold text-accent-900 mb-2">
                      Industry Standards
                    </h4>
                    <p className="text-sm text-accent-800">
                      All assessments aligned with NIST AI Risk Management Framework, ISO 42001,
                      and emerging regulatory requirements (EU AI Act, NAIC Model Bulletin).
                    </p>
                  </div>
                </div>
              </div>

              {index < services.length - 1 && (
                <div className="mt-24 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              Custom Service Packages Available
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Need a combination of services or ongoing support? We design custom engagement
              packages tailored to your specific risk profile and business needs.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 inline-flex items-center gap-2"
              >
                Discuss Your Needs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
