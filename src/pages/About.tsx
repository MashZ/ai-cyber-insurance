import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-20">
      {/* ─── Hero ─── */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-4">
              About Discimen
            </p>
            <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Practitioners who have built what we advise on.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discimen was founded by enterprise AI leaders who have deployed, governed, and
              scaled AI systems at Fortune 500 companies — not theorized about them from the
              outside. Our advisory is grounded in what actually works when technology meets
              organizational reality.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Our Thesis ─── */}
      <section className="py-20 lg:py-24 bg-[#0f2b46]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
              Our Thesis
            </p>
            <h2 className="font-fraunces text-white text-3xl md:text-4xl font-semibold leading-tight mb-8">
              The enterprise AI market needs an independent advisory layer.
            </h2>

            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                Strategy consulting firms sell top-down transformation frameworks but have never
                configured a ServiceNow workflow or deployed an AI agent in production.
                Technology vendors sell their own platform — their advice is structurally conflicted.
                The Big Four sell compliance audit hours at scale but lack the technical depth
                to evaluate AI architecture decisions.
              </p>
              <p>
                Enterprises navigating the shift from legacy SaaS to AI-native operations need
                something that doesn't exist in the market today: an independent advisory that
                combines hands-on AI implementation experience, sector-specific regulatory
                knowledge, and the financial rigor to make every recommendation defensible to
                a CFO, a board, and a regulator.
              </p>
              <p>
                That's Discimen — from the Latin: <em>peril, discriminating difference</em>.
                The ability to make clear-eyed decisions when the stakes are highest and
                the path is least clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founders ─── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Leadership
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
              Combined 40+ years of enterprise transformation across regulated industries.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mash */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-2xl font-semibold mb-1">
                    Mash Zahid
                  </h3>
                  <p className="text-sm text-[#0f4377] font-medium">
                    Co-Founder — Technical & Delivery Lead
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/mashz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0f4377] hover:bg-[#0f4377]/5 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Global AI Strategy and Transformation leader with enterprise AI deployment
                  experience at General Motors, where he led the AskGM chatbot transformation —
                  converting 47,000 annual HR cases from 4-day to 30-second resolution with 67%
                  first-contact resolution.
                </p>
                <p>
                  Former IBM Associate Partner and KPMG Director with deep consulting experience
                  across automotive, healthcare, energy utilities, and financial services.
                  Served on the Moveworks Architecture Review Board, providing direct insight
                  into the platform that ServiceNow acquired in 2025.
                </p>
                <p>
                  MBA from the University of Chicago Booth School of Business. Completed PhD
                  coursework in Behavioral Finance and Financial Engineering. Recognized thought
                  leader with keynotes at OpenAI Academy (6,800+ attendees) and PyData conferences.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                  Sector Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Automotive', 'Healthcare', 'Energy & Utilities', 'Financial Services', 'Manufacturing'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Reddhi */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-2xl font-semibold mb-1">
                    Reddhi Mitra
                  </h3>
                  <p className="text-sm text-[#0f4377] font-medium">
                    Co-Founder — Commercial & Operations Lead
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/reddhimitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0f4377] hover:bg-[#0f4377]/5 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  20-year management consulting veteran with senior leadership roles at FTI
                  Consulting and IBM. Specializes in operational transformation, risk management,
                  and commercial strategy for complex enterprise engagements.
                </p>
                <p>
                  Extensive experience in business case development, vendor negotiations, and
                  go-to-market strategy for professional services firms. Brings the commercial
                  discipline and client relationship expertise essential for advisory engagements
                  with C-suite decision-makers.
                </p>
                <p>
                  MBA from Duke University's Fuqua School of Business. Deep network across
                  manufacturing, healthcare, energy, and financial services leadership.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                  Core Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Commercial Strategy',
                    'Risk Management',
                    'Operational Transformation',
                    'Client Advisory',
                    'Go-to-Market',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How We're Different ─── */}
      <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-3">
              Competitive Context
            </p>
            <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold leading-tight mb-4">
              Where Discimen fits in the AI advisory landscape.
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left px-6 py-4 font-fraunces text-[#0f2b46] font-semibold">
                      Competitor
                    </th>
                    <th className="text-left px-6 py-4 font-fraunces text-[#0f2b46] font-semibold">
                      Their Angle
                    </th>
                    <th className="text-left px-6 py-4 font-fraunces text-[#0f2b46] font-semibold">
                      Discimen Differentiation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      competitor: 'Armilla AI',
                      angle: 'AI model risk scoring as an MGA',
                      diff: 'Operational transition risk and governance, not just model-level scoring',
                    },
                    {
                      competitor: 'Munich Re',
                      angle: 'AI risk insurance and actuarial products',
                      diff: 'Practical governance frameworks that feed into insurance, not insurance products themselves',
                    },
                    {
                      competitor: 'McKinsey / BCG',
                      angle: 'Top-down strategic frameworks',
                      diff: 'Hands-on operational expertise from building actual enterprise AI systems',
                    },
                    {
                      competitor: 'Big Four',
                      angle: 'Compliance audit at scale',
                      diff: 'Sector-specific, faster, more technically current, and more affordable',
                    },
                    {
                      competitor: 'AI-native vendors',
                      angle: 'Platform sales (Serval, etc.)',
                      diff: 'Independent advisory — we help enterprises evaluate vendors, not sell platforms',
                    },
                  ].map((row) => (
                    <tr key={row.competitor}>
                      <td className="px-6 py-4 font-medium text-[#0f2b46] whitespace-nowrap">
                        {row.competitor}
                      </td>
                      <td className="px-6 py-4 text-slate-600">{row.angle}</td>
                      <td className="px-6 py-4 text-slate-600">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Let's talk about your AI transition.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We start with a conversation — understanding where you are, where the market is
              moving, and what decisions are in front of you. No pitch deck. No platform to sell.
              Just clarity.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#0f2b46] rounded-lg hover:bg-[#0f4377] transition-colors duration-200"
            >
              Schedule a Briefing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      {/* ─── Legal Fine Print ─── */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-slate-400 text-center">
            Discimen is a wholly owned entity of MLKND Ventures LLC.
          </p>
        </div>
      </section>
    </main>
  );
}
