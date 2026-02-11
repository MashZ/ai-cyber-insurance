import { Mail, Linkedin, ArrowRight, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Start a conversation
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Whether you are an insurance carrier evaluating AI risk capabilities, an MGA 
              designing specialty products, or an enterprise seeking to strengthen your AI 
              risk posture\u2014we look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="border border-gray-100 rounded-xl p-8">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-display font-bold text-primary mb-2">Email us</h2>
              <p className="text-gray-500 text-sm mb-6">
                For general inquiries, assessment requests, or partnership discussions.
              </p>
              <a
                href="mailto:info@discimen.com"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent-light transition-colors"
              >
                info@discimen.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Location */}
            <div className="border border-gray-100 rounded-xl p-8">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-display font-bold text-primary mb-2">Based in</h2>
              <p className="text-gray-500 text-sm mb-6">
                Miami, FL & Los Angeles, CA\u2014serving clients nationally and globally.
              </p>
              <p className="text-gray-400 text-sm">
                Engagements conducted on-site and remotely.
              </p>
            </div>
          </div>

          {/* Founders Direct */}
          <div className="border border-gray-100 rounded-xl p-8 sm:p-10">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Connect directly with our founders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-primary font-semibold text-lg">
                  Mash Zahid
                </h3>
                <p className="text-accent text-sm font-medium mb-2">
                  Technical & Delivery Lead
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  For technical assessment scoping, AI system architecture questions, 
                  and industry-specific evaluation inquiries.
                </p>
                <a
                  href="https://www.linkedin.com/in/mashz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent-light transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>

              <div>
                <h3 className="text-primary font-semibold text-lg">Reddhi Mitra</h3>
                <p className="text-accent text-sm font-medium mb-2">
                  Commercial & Operations Lead
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  For partnership discussions, insurance carrier engagements, 
                  MGA/MGU relationships, and service scoping.
                </p>
                <a
                  href="https://www.linkedin.com/in/reddhimitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent-light transition-colors"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary mb-8 text-center">
            Who we work with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Insurance Carriers & Reinsurers',
                description:
                  'Entering or expanding AI liability coverage and seeking independent technical evaluation capability to underwrite confidently.',
              },
              {
                title: 'MGAs & MGUs',
                description:
                  'Designing specialty AI insurance products and seeking outsourced assessment services to support underwriting processes.',
              },
              {
                title: 'Enterprises Deploying AI',
                description:
                  'Quantifying AI risk exposure, strengthening governance, and demonstrating insurability to carriers at renewal.',
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

export default Contact;
