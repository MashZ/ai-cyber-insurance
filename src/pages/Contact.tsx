import { Mail, Linkedin, ArrowRight, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary pt-24">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start a Conversation
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you're an insurance carrier evaluating AI risk capabilities, an MGA 
              designing specialty products, or an enterprise seeking to strengthen your AI 
              risk posture — we'd like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <Mail className="h-8 w-8 text-accent mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Email Us</h2>
              <p className="text-gray-400 text-sm mb-6">
                For general inquiries, assessment requests, or partnership discussions.
              </p>
              <a
                href="mailto:info@discimen.com"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                info@discimen.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <MapPin className="h-8 w-8 text-accent mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Based in</h2>
              <p className="text-gray-400 text-sm mb-6">
                Miami, FL & Los Angeles, CA — serving clients nationally and globally.
              </p>
              <p className="text-gray-500 text-sm">
                Engagements conducted on-site and remotely.
              </p>
            </div>
          </div>

          {/* Founders Direct */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Connect Directly with Our Founders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Mashruk (Mash) Zahid
                </h3>
                <p className="text-accent text-sm font-medium mb-2">
                  Technical & Delivery Lead
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  For technical assessment scoping, AI system architecture questions, 
                  and industry-specific evaluation inquiries.
                </p>
                <a
                  href="https://www.linkedin.com/in/mashruk-zahid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg">Reddhi Mitra</h3>
                <p className="text-accent text-sm font-medium mb-2">
                  Commercial & Operations Lead
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  For partnership discussions, insurance carrier engagements, 
                  MGA/MGU relationships, and service scoping.
                </p>
                <a
                  href="https://www.linkedin.com/in/reddhimitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Reach Out */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Who We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Insurance Carriers & Reinsurers',
                description:
                  'Looking to enter or expand AI liability coverage but need independent technical evaluation capability to underwrite confidently.',
              },
              {
                title: 'MGAs & MGUs',
                description:
                  'Designing specialty AI insurance products and need outsourced assessment services to support your underwriting process.',
              },
              {
                title: 'Enterprises Deploying AI',
                description:
                  'Seeking to quantify your AI risk exposure, strengthen governance, and demonstrate insurability to carriers at renewal.',
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

export default Contact;
