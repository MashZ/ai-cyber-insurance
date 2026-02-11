import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <img 
                src="/discimen_logo_gray.png" 
                alt="Discimen" 
                className="h-8 w-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="text-lg font-display font-bold text-primary tracking-wide">
                DISCIMEN
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Independent AI risk assessment and audit services for insurers, 
              underwriters, and enterprises adopting generative and agentic AI.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-xs uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Pre-Underwriting Risk Assessment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Ongoing Compliance Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Claims & Loss Evaluation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-xs uppercase tracking-widest">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@discimen.com"
                  className="text-gray-500 hover:text-primary text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@discimen.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mashz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary text-sm transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Mash Zahid
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/reddhimitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary text-sm transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Reddhi Mitra
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Discimen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
