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
              scaled AI systems at Fortune 500 companies, rather than theorizing about them from the
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
                Technology vendors sell their own platform; their advice is structurally conflicted.
                The Big Four sell compliance audit hours at scale but lack the technical depth
                to evaluate AI architecture decisions.
              </p>
              <p>
                Enterprises navigating the shift from legacy SaaS to AI-native operations need
                something that doesn&#39;t exist in the market today: an independent advisory that
                combines hands-on AI implementation experience, sector-specific regulatory
                knowledge, and the financial rigor to make every recommendation defensible to
                a CFO, a board, and a regulator.
              </p>
              <p>
                That's Discimen, from the Latin: <em>peril, discriminating difference</em>.
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
              Combined decades of enterprise AI transformation, regulatory compliance, and commercial growth across regulated industries.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mash */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              {/* Profile Photo */}
              <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src="/mash-zahid.jpg"
                  alt="Mash Zahid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-2xl font-semibold mb-1">
                    Mash Zahid
                  </h3>
                  <p className="text-sm text-[#0f4377] font-medium">
                    Managing Principal
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
                  Mash is a twenty-plus year strategy and operations practitioner who has spent the last decade building and deploying AI systems at enterprise scale across financial services, energy and utilities, telecommunications, healthcare, automotive, and professional services. His recent work sits at the frontier of agentic AI: he serves on the Architecture Review Board for Moveworks through its $2.85B acquisition by ServiceNow, and most recently led an agentic AI transformation for one of the world's largest manufacturers, reshaping its core Operations, HR, and IT functions.
                </p>
                <p>
                  As an Associate Partner at IBM, he led large-scale generative AI engagements for Fortune 100 clients, including a conversation intelligence program that unlocked eight-figure operational value in its first month and contributed to the multi-year resolution of a multi-billion-dollar customer portfolio. As Global Director of AI Strategy at KPMG, he advanced the firm's flagship audit platform into neural network–based deep learning, materially improving audit efficiency and error rates across its global service lines. Earlier in his career, his workforce planning work at a leading national retailer was featured on the cover of <i>Harvard Business Review</i>.
                </p>
                <p>
                  MBA from the University of Chicago Booth School of Business. Completed PhD coursework in Behavioral Finance and Financial Engineering. In September 2025 he delivered a keynote to a live audience of 6,800 practitioners at OpenAI Academy on scaling enterprise AI through systems thinking, and recently placed first at a Google hackathon opened by Sergey Brin.
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

            {/* JD */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              {/* Profile Photo */}
              <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src="/jd-henao.jpg"
                  alt="JD Henao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-2xl font-semibold mb-1">
                    JD Henao
                  </h3>
                  <p className="text-sm text-[#0f4377] font-medium">
                    Commercial & Growth Lead
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/jdhenao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0f4377] hover:bg-[#0f4377]/5 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  JD Henao leads market development, strategic partnerships, and client
                  engagement. With a background spanning Fortune 1000 companies, emerging
                  startups, and financial services, he works closely with clients to align
                  advanced AI capabilities with real-world business challenges.
                </p>
                <p>
                  His focus is building relationships, creating commercial opportunities, and
                  ensuring engagements are customized to deliver meaningful operational and
                  financial impact — the commercial discipline and go-to-market rigor essential
                  for advisory work with C-suite decision-makers.
                </p>
                <p>
                  MBA in Marketing and Entrepreneurship from the University of Chicago Booth
                  School of Business. MA in Organizational Behavior and BA in Economics from
                  Stanford University.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                  Core Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Commercial Strategy',
                    'Strategic Partnerships',
                    'Market Development',
                    'Go-to-Market',
                    'Client Advisory',
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

            {/* Persia */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              {/* Profile Photo */}
              <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src="/persia-shokoohi.jpg"
                  alt="Persia Shokoohi, J.D."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-fraunces text-[#0f2b46] text-2xl font-semibold mb-1">
                    Persia Shokoohi, J.D.
                  </h3>
                  <p className="text-sm text-[#0f4377] font-medium">
                    Compliance & Regulatory Lead
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/persia-shokoohi-j-d-74668415/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0f4377] hover:bg-[#0f4377]/5 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Persia Shokoohi is a senior compliance, risk management, and governance
                  executive with more than a decade leading regulatory, audit, information
                  security, and enterprise risk programs across investment advisers, trust
                  companies, broker-dealers, and financial institutions. She has served as
                  Chief Compliance Officer for SEC-registered investment advisers, with oversight
                  spanning SEC, FINRA, OCC, CFTC, NCUA, FDIC, and state requirements.
                </p>
                <p>
                  As founder of Compliantry Consulting, she advises domestic and international
                  firms on regulatory compliance, governance, risk management, data governance,
                  regulatory reporting, and market expansion.
                </p>
                <p>
                  A graduate of the University of Miami School of Law and Emory University, she
                  was named one of Corporate Counsel Business Journal's &lsquo;50 Women to
                  Watch&rsquo; in 2024 and speaks regularly on compliance, financial data
                  governance, fraud prevention, and regulatory technology.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                  Core Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Regulatory Compliance',
                    'Risk Management',
                    'Governance',
                    'Enterprise Risk',
                    'Financial Services',
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
                      competitor: 'Niche Specialty Companies',
                      angle: 'AI risk insurance and actuarial products with AI model risk scoring',
                      diff: 'Operational transition risk and practical governance frameworks that inform insurance pricing',
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
                      diff: 'Independent advisory: we help enterprises evaluate vendors, not sell platforms',
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
              We start with a conversation: understanding where you are, where the market is
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
