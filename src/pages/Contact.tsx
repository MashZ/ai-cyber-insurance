import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let's Discuss Your Risk Profile
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Whether you're an insurance carrier, enterprise, or regulator—we're here to help
            you navigate AI and cyber liability exposure.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary-800">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We work with clients across three categories:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-x-3">
                  <div className="flex-none">
                    <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-accent-600" />
                    </div>
                  </div>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-primary-800">Insurance Carriers & MGAs</strong> seeking
                    pre-underwriting risk assessment
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div className="flex-none">
                    <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-accent-600" />
                    </div>
                  </div>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-primary-800">Enterprises</strong> deploying AI systems
                    and need exposure quantification
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div className="flex-none">
                    <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-accent-600" />
                    </div>
                  </div>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-primary-800">Regulators</strong> developing governance
                    frameworks for AI liability
                  </span>
                </li>
              </ul>

              <dl className="mt-16 space-y-8">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                      <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd>
                    <p className="text-sm font-semibold leading-6 text-primary-800">Email</p>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      <a
                        href="mailto:mzahid@alineahealth.com"
                        className="hover:text-accent-600"
                      >
                        mzahid@alineahealth.com
                      </a>
                    </p>
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Location</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd>
                    <p className="text-sm font-semibold leading-6 text-primary-800">Locations</p>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      Miami, FL | Los Angeles, CA
                    </p>
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">LinkedIn</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                      <Linkedin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd>
                    <p className="text-sm font-semibold leading-6 text-primary-800">Connect on LinkedIn</p>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      <a
                        href="https://www.linkedin.com/in/mashz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-600 block"
                      >
                        Mash Zahid
                      </a>
                      <a
                        href="https://www.linkedin.com/in/reddhimitra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-600 block"
                      >
                        Reddhi Mitra
                      </a>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* CTA Card */}
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-2xl font-bold tracking-tight text-primary-800">
                Schedule a Consultation
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Initial consultations are complimentary. We'll discuss your specific needs and
                determine if our specialized risk assessment services are a good fit.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-professional">
                  <h4 className="text-lg font-semibold text-primary-800">What to Expect</h4>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-x-3">
                      <div className="flex-none">
                        <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-accent-600" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">
                        30-minute discovery call to understand your risk profile
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <div className="flex-none">
                        <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-accent-600" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">
                        Discussion of relevant service offerings and pricing
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <div className="flex-none">
                        <div className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-accent-600" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">
                        Proposal delivery within 48 hours
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-accent-50 border border-accent-200 p-6">
                  <p className="text-sm font-semibold text-accent-900">Typical Engagement Timeline</p>
                  <p className="mt-2 text-sm text-accent-800">
                    Most assessments are completed in 4-8 weeks. Emergency response available for
                    post-loss situations requiring immediate attention.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="mailto:mzahid@alineahealth.com?subject=AI Insurance Risk Consultation Request"
                  className="block w-full rounded-md bg-accent-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary-800">
              Frequently Asked Questions
            </h2>
            <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
              <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-primary-800 lg:col-span-5">
                  How do you price your services?
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    We offer fixed-fee engagements for assessments ($50K-300K depending on scope),
                    retainer-based ongoing monitoring ($10K-30K/month), and percentage-of-claim
                    pricing for post-loss evaluations (5-8%).
                  </p>
                </dd>
              </div>

              <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-primary-800 lg:col-span-5">
                  Can you serve both carriers and policyholders?
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    Yes, but we maintain strict ethical walls. Separate teams handle carrier-retained
                    vs. policyholder-retained engagements, and we disclose any conflicts. Our
                    reputation depends on objectivity.
                  </p>
                </dd>
              </div>

              <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-primary-800 lg:col-span-5">
                  What industries do you serve?
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    Any enterprise deploying AI systems: healthcare, financial services, energy/utilities,
                    technology, retail, and manufacturing. We develop industry-specific assessment
                    frameworks as needed.
                  </p>
                </dd>
              </div>

              <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-primary-800 lg:col-span-5">
                  How quickly can you respond to emergencies?
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    For post-loss scenarios (data breaches, AI system failures), we can mobilize
                    within 24-48 hours and deliver preliminary assessments within 1-2 weeks.
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
