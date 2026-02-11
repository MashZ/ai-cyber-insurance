import { Link } from 'react-router-dom';
import { Shield, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-7 w-7 text-accent" />
              <span className="text-lg font-bold text-white tracking-wide">
                DISCIMEN
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Third-party AI risk assessment and audit services for insurers, 
              underwriters, and enterprises adopting generative and agentic AI. 
              We evaluate the risks so you can underwrite with confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent text-sm transition-colors">
                  Pre-Underwriting Risk Assessment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent text-sm transition-colors">
                  Ongoing Compliance Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent text-sm transition-colors">
                  Claims & Loss Evaluation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@discimen.com"
                  className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@discimen.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mashruk-zahid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Mashruk Zahid
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/reddhimitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Reddhi Mitra
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Discimen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
