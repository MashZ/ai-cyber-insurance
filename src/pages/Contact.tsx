import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-20">
      {/* ─── Hero ─── */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase mb-4">
                Get Started
              </p>
              <h1 className="font-fraunces text-[#0f2b46] text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Schedule an executive briefing.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Every engagement begins with a 45-minute conversation where we assess your
                current AI landscape, identify the highest-impact transition opportunities,
                and outline a path forward — at no cost and no obligation.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                    What to expect
                  </p>
                  <div className="space-y-3 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-[#0f2b46]">First 15 minutes:</span>{' '}
                      We listen. Understanding your current SaaS portfolio, AI initiatives, regulatory
                      landscape, and the decisions you're facing.
                    </p>
                    <p>
                      <span className="font-semibold text-[#0f2b46]">Next 15 minutes:</span>{' '}
                      We share what we're seeing in your industry — who's moving, what's working,
                      and where the risks are materializing.
                    </p>
                    <p>
                      <span className="font-semibold text-[#0f2b46]">Final 15 minutes:</span>{' '}
                      We outline potential paths forward and discuss whether Discimen is the right
                      partner for your specific situation. Sometimes we're not — and we'll tell
                      you that directly.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                    Best suited for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'CEOs evaluating AI-native platform transitions',
                      'CFOs modeling AI investment ROI',
                      'CIOs building agentic AI governance',
                      'General Counsel assessing AI regulatory compliance',
                      'Insurers underwriting AI-related risk',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Details */}
            <div className="lg:pt-12">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h2 className="font-fraunces text-[#0f2b46] text-xl font-semibold mb-6">
                  Reach us directly
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:info@discimen.com"
                      className="inline-flex items-center gap-2 text-[#0f2b46] font-medium hover:text-[#0f4377] transition-colors"
                    >
                      <Mail size={16} />
                      info@discimen.com
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                      Connect on LinkedIn
                    </p>
                    <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/in/mashz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Linkedin size={16} className="text-[#0f4377]" />
                          <div>
                            <p className="text-sm font-medium text-[#0f2b46]">Mash Zahid</p>
                            <p className="text-xs text-slate-500">Technical & Delivery Lead</p>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-slate-400 group-hover:text-[#0f4377] transition-colors"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/reddhimitra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Linkedin size={16} className="text-[#0f4377]" />
                          <div>
                            <p className="text-sm font-medium text-[#0f2b46]">Reddhi Mitra</p>
                            <p className="text-xs text-slate-500">Commercial & Operations Lead</p>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-slate-400 group-hover:text-[#0f4377] transition-colors"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                      Industries We Serve
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Manufacturing, Healthcare, Energy & Utilities, Automotive, Financial
                      Services — regulated industries where AI transition risk and governance
                      requirements are highest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
