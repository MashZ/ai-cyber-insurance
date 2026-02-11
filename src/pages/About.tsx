import { Linkedin, ExternalLink } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Mash Zahid',
      role: 'Co-Founder \u2014 Technical & Delivery Lead',
      linkedin: 'https://www.linkedin.com/in/mashz/',
      image: '/mash-zahid.jpg',
      bio: [
        'Global AI Strategy and Transformation leader with extensive experience across enterprise AI implementations at Fortune 100 companies. Former IBM Associate Partner, KPMG global AI director, and enterprise AI architect.',
        'Led AI transformation at General Motors, converting 47,000+ annual HR cases from 4-day resolution to 30-second AI-powered responses. Deep expertise in AI system architecture, model evaluation, and agentic AI orchestration across manufacturing, healthcare, energy, and automotive sectors.',
      ],
      bioOpenAI: true,
      specialties: [
        'AI system architecture & model evaluation',
        'Enterprise AI transformation',
        'Manufacturing & automotive AI implementations',
        'Healthcare AI (clinical data science)',
        'Agentic AI orchestration',
      ],
    },
    {
      name: 'Reddhi Mitra',
      role: 'Co-Founder \u2014 Commercial & Operations Lead',
      linkedin: 'https://www.linkedin.com/in/reddhimitra/',
      image: '/reddhi-mitra.jpg',
      bio: [
        '20+ year management consulting veteran specializing in financial services risk management, insurance operations, and restructuring. Former IBM and FTI Consulting leader with deep expertise in model risk, compliance, and third-party administration.',
        'Extensive experience in insurance industry operations including underwriting process evaluation, claims administration, model inventory and architecture review, and regulatory compliance. Led restructuring and turnaround engagements requiring rigorous financial and operational risk assessment.',
        'Duke Fuqua MBA. Deep network across specialty insurance, reinsurance, and financial services risk management.',
      ],
      bioOpenAI: false,
      specialties: [
        'Insurance operations & compliance',
        'Model risk & architecture review',
        'Financial services restructuring',
        'Claims administration & TPA services',
        'Specialty risk and reinsurance',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary pt-24">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              About Discimen
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built by Consultants Who've Done the Work
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Discimen was founded by two management consultants with 
              complementary expertise: one in enterprise agentic AI enablement and 
              technical systems design, the other in insurance operations, risk 
              management, and financial services compliance. Together, we bring the 
              exact combination of skills needed to evaluate AI risk for the insurance 
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Our Thesis</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The market for AI liability insurance is being established by pioneers like 
              Armilla AI and Munich Re. But most insurance carriers don't have the in-house 
              technical expertise to evaluate the AI risks they're being asked to underwrite. 
              They need independent, third-party assessment — and the supply of qualified 
              evaluators is thin.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Discimen provides that supply. We're not building an insurance product. 
              We're building the evaluation and audit capability that the insurance 
              industry needs to confidently enter the AI risk market.
            </p>
            <p className="text-gray-300 leading-relaxed font-medium">
              We focus on work that is technical enough to require real expertise, process-oriented 
              enough to scale, and recurring enough to build a sustainable business — not 
              one-off consulting engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Founding Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-accent/30 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                    <p className="text-accent text-sm font-semibold mt-1">
                      {founder.role}
                    </p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-accent text-xs mt-2 transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn Profile
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {founder.bio.map((paragraph, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {founder.bioOpenAI && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <a
                        href="https://academy.openai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        OpenAI Academy
                      </a>{' '}
                      speaker on Scaling Enterprise AI Through Systems Thinking. Chicago 
                      Booth MBA with PhD coursework in Behavioral Finance and Financial 
                      Engineering.
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">
                    Domain Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full border border-accent/20"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">How We Think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Proven Demand, Not Novelty',
                description:
                  'We\u2019re not inventing a category. AI risk evaluation services are already needed \u2014 there just aren\u2019t enough qualified providers. We fill the gap with deep expertise and a scalable model.',
              },
              {
                title: 'Recurring, Not Project-Based',
                description:
                  'Our services are designed as ongoing engagements — annual audits, continuous monitoring, claims support — creating predictable recurring revenue rather than one-off consulting projects.',
              },
              {
                title: 'Operators, Not Technicians',
                description:
                  'We build a business, not a practice. As demand grows, we recruit specialized actuaries, data scientists, and auditors to execute. We design the methodology and scale the operation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
