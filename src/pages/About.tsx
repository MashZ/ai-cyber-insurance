import { Linkedin, ExternalLink } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Mash Zahid',
      role: 'Co-Founder   Operations & Technical Lead',
      linkedin: 'https://www.linkedin.com/in/mashz/',
      image: '/mash-zahid.jpeg',
      bio: [
        'Global AI Strategy and Transformation leader with extensive experience across enterprise AI implementations at Fortune 100 companies. Former IBM Associate Partner, KPMG global AI director, and enterprise AI architect.',
        'Most recently drove AI enablement at General Motors, converting People Services cases from 4-day resolution to 30-second AI-powered responses, and developing AI Literacy programs for all staff. Deep expertise in AI system architecture, model evaluation, and agentic AI orchestration across manufacturing, healthcare, energy, and automotive sectors.',
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
      role: 'Co-Founder   Commercial & Delivery Lead',
      linkedin: 'https://www.linkedin.com/in/reddhimitra/',
      image: '/reddhi-mitra.jpeg',
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
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
              About Discimen
            </p>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Built by consultants who deliver
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Discimen was founded by two management consultants with complementary 
              expertise: one in enterprise agentic AI enablement and technical systems 
              design, the other in insurance operations, risk management, and financial 
              services compliance. Together, we bring the exact combination of skills 
              needed to evaluate AI risk for the insurance industry.
            </p>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-gray-100 rounded-xl p-8 sm:p-10 mb-16">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">Our thesis</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              The market for AI liability insurance is being established by pioneers like 
              Armilla AI and Munich Re. Most insurance carriers need independent, third-party 
              assessment expertise to evaluate the AI risks they are being asked to 
              underwrite and the supply of qualified evaluators remains thin.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Discimen provides that supply. We are building the evaluation and audit 
              capability that the insurance industry needs to confidently enter the 
              AI risk market.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              We focus on work that is technical enough to require real expertise, 
              process-oriented enough to scale, and recurring enough to build a 
              sustainable business.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary mb-8">Founding team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl p-8"
              >
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/10 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                    <p className="text-accent text-sm font-semibold mt-1">
                      {founder.role}
                    </p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-primary text-xs mt-2 transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn Profile
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {founder.bio.map((paragraph, i) => (
                    <p key={i} className="text-gray-500 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {founder.bioOpenAI && (
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <a
                        href="https://academy.openai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent-light transition-colors font-medium"
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
                  <h4 className="text-primary text-sm font-semibold mb-2">
                    Domain Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-primary-50 text-primary text-xs px-3 py-1 rounded-full border border-primary/10"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary mb-8">How we think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Proven Demand',
                description:
                  'AI risk evaluation services are already needed the market is established. We fill the gap with deep expertise and a scalable delivery model.',
              },
              {
                title: 'Recurring Engagement',
                description:
                  'Our services are designed as ongoing relationships annual audits, continuous monitoring, claims support creating predictable recurring revenue and deeper client outcomes.',
              },
              {
                title: 'Operators Who Scale',
                description:
                  'We build a business, then a team. As demand grows, we recruit specialized actuaries, data scientists, and auditors. We design the methodology and scale the operation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg p-6"
              >
                <h3 className="text-primary font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
