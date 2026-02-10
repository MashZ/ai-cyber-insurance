import { Link } from 'react-router-dom';
import { Shield, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'AI Performance Risk Assessment', href: '/services#ai-performance' },
      { name: 'Privacy & Data Liability', href: '/services#privacy' },
      { name: 'Regulatory Compliance', href: '/services#regulatory' },
      { name: 'Model Output Liability', href: '/services#output-liability' },
      { name: 'IP & Copyright Assessment', href: '/services#ip-copyright' },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-800 to-primary-900">
                <Shield className="h-6 w-6 text-accent-500" />
              </div>
              <span className="text-lg font-bold text-primary-800">
                AI & Cyber Insurance
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Expert risk assessment and valuation services for insurance carriers,
              enterprises, and regulators navigating AI liability and cybersecurity exposure.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/mashz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-500"
              >
                <span className="sr-only">LinkedIn - Mash</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/reddhimitra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-500"
              >
                <span className="sr-only">LinkedIn - Reddhi</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mzahid@alineahealth.com"
                className="text-gray-400 hover:text-accent-500"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-800">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-accent-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary-800">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-accent-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {currentYear} AI & Cyber Insurance Valuation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
