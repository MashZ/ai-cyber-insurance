import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f0f2f5] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <img 
                src="/discimen_logo_gray.png" 
                alt="Discimen" 
                className="h-9 w-9 object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="font-display text-[#0f2b46] text-2xl font-bold tracking-tight">
                Discimen
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Independent AI transition advisory and risk assessment for
              regulated enterprises navigating the shift to AI-native operations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services#transition-advisory"
                  className="text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  AI Transition Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/straddle-framework"
                  className="text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  Straddle Framework
                </Link>
              </li>
              <li>
                <Link
                  to="/services#governance-layer"
                  className="text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  AI Governance Layer
                </Link>
              </li>
              <li>
                <Link
                  to="/services#risk-assessment"
                  className="text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  AI Risk Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@discimen.com"
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  <Mail size={14} />
                  info@discimen.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mashz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  <Linkedin size={14} />
                  Mash Zahid
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/reddhimitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  <Linkedin size={14} />
                  Reddhi Mitra
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-[#0f2b46] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Discimen. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            AI Transition Advisory &middot; Governance &middot; Risk Assessment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
