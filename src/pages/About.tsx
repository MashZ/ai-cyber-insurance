import { Linkedin, GraduationCap, Briefcase, Award, Target } from 'lucide-react';

export default function About() {
  const founders = [
    {
      name: 'Mash Zahid',
      role: 'Co-Founder | Technical & Delivery Lead',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQFo9jMgcRxRhg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1737169519962?e=1742428800&v=beta&t=F5GHg0kQcUQ7oL5yKGAbBL_84PsbICclqWbap4HYCfg',
      bio: 'Global AI Enablement and Operations Strategy leader with extensive experience implementing enterprise and work automation systems. Most recently led AI initiatives at General Motors, including the AskGM chatbot integration with ServiceNow and Workday systems. Former IBM Associate Partner and KPMG consultant with expertise spanning automotive, energy utilities, telecom, and biotech sectors.',
      expertise: [
        'Agentic AI Architecture & Implementation',
        'Enterprise AI Governance & Risk Management',
        'Model Risk Management Frameworks',
        'AI/ML System Security & Performance',
      ],
      education: 'Chicago Booth MBA + PhD Coursework in Behavioral Finance & Financial Engineering',
      linkedin: 'https://www.linkedin.com/in/mashz',
      highlights: [
        'OpenAI Academy speaker on <a href="https://academy.openai.com/public/videos/scaling-enterprise-ai-through-systems-thinking-2025-09-25">Scaling Enterprise AI Through Systems Thinking</a>',
        'Serve on Moveworks Architecture Review Board',
        '20+ years implementing technology strategy and transformations',
      ],
    },
    {
      name: 'Reddhi Mitra',
      role: 'Co-Founder | Commercial & Operations Lead',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQHZurls28MIBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1549586379101?e=1742428800&v=beta&t=BS7cVdjDU5hDiV46HviXnIVsESX4MxYWWyCyc0Z_alY',
      bio: '20-year veteran management consultant and operating executive with deep insurance industry expertise from FTI Consulting. Brings critical experience in cyber security risk assessment, having worked with insurance carriers on underwriting frameworks for cyber policies. Former IBM Associate Partner focused on Industry Transformation and Enterprise Strategy, with additional experience at AT&T driving large-scale business transformations.',
      expertise: [
        'Insurance Risk Assessment & Underwriting',
        'Cybersecurity Forensics & Loss Evaluation',
        'Enterprise Strategy & Business Development',
        'Cross-Industry Transformation Leadership',
      ],
      education: 'Duke University - Fuqua School of Business (MBA)',
      linkedin: 'https://www.linkedin.com/in/reddhimitra/',
      highlights: [
        'Led cyber security insurance assessments at FTI Consulting',
        'IBM Associate Partner - Industry Transformation',
        'Specialist in insurance carrier operations',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Domain Thought Leadership
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Combining deep AI/ML technical expertise with insurance industry experience to bridge
            the valuation gap in emerging risk categories.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent-600">Our Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
            Quantifying the Unquantifiable
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We exist because traditional actuarial models break down when facing AI's non-deterministic
            failures and rapidly fragmenting regulatory landscape. Insurance carriers, enterprises, and
            regulators all need specialized expertise to navigate this $4.8B emerging market.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-primary-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                  <Target className="h-6 w-6 text-white" />
                </div>
                First Principles Thinking
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We deconstruct AI risk from fundamental axioms—non-deterministic failures, nth-party
                aggregation, regulatory fragmentation—rather than relying on historical patterns.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-primary-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                  <Target className="h-6 w-6 text-white" />
                </div>
                Systems Mapping
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We map entire insurance ecosystems—carriers, MGAs, brokers, policyholders, regulators—
                to understand interdependencies and design frameworks that scale.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-primary-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Objectivity
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We serve both carriers and policyholders with strict ethical walls, building our
                reputation as the trusted third-party assessor.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-primary-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Speed to Market
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Standardized offerings that scale while maintaining customization for enterprise-specific
                risk profiles and regulatory requirements.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Founders */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-accent-600">Leadership</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              Meet the Founders
            </p>
          </div>

          <div className="space-y-20">
            {founders.map((founder) => (
              <div key={founder.name} className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary-800">
                      {founder.name}
                    </h3>
                    <p className="text-base leading-7 text-accent-600 font-semibold">
                      {founder.role}
                    </p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-accent-600"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-base leading-7 text-gray-600 mb-8">
                      {founder.bio}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="h-5 w-5 text-accent-600" />
                          <h4 className="text-sm font-semibold text-primary-800">Core Expertise</h4>
                        </div>
                        <ul className="space-y-2">
                          {founder.expertise.map((skill) => (
                            <li key={skill} className="flex items-start gap-x-3">
                              <div className="flex-none">
                                <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                                  <div className="h-2 w-2 rounded-full bg-accent-600" />
                                </div>
                              </div>
                              <span className="text-sm text-gray-600">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="h-5 w-5 text-accent-600" />
                          <h4 className="text-sm font-semibold text-primary-800">Education</h4>
                        </div>
                        <p className="text-sm text-gray-600">{founder.education}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-5 w-5 text-accent-600" />
                          <h4 className="text-sm font-semibold text-primary-800">Highlights</h4>
                        </div>
                        <ul className="space-y-2">
                          {founder.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-x-3">
                              <div className="flex-none">
                                <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                                  <div className="h-2 w-2 rounded-full bg-accent-600" />
                                </div>
                              </div>
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              Built on Expertise, Trust, and Rigor
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-primary-800">
                  Technical Rigor
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Every assessment grounded in NIST AI RMF, ISO 42001, and emerging regulatory frameworks.
                    We don't guess—we measure, model, and quantify.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-primary-800">
                  Client Advocacy
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Whether representing carriers or policyholders, we provide the most accurate
                    assessment possible—even when it's not what the client wants to hear.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-primary-800">
                  Continuous Learning
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    AI and cyber risks evolve daily. We invest heavily in research, training, and
                    staying ahead of the rapidly changing threat and regulatory landscape.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
