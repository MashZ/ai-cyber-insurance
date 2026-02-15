import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f2b46] text-white/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-fraunces text-base font-bold leading-none">D</span>
              </div>
              <span className="font-fraunces text-white text-lg font-semibold tracking-tight">
                Discimen
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Independent AI transition advisory for regulated enterprises.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">
              Services
            </p>
            <div className="space-y-2.5">
              <Link to="/services#transition-advisory" className="block text-sm hover:text-white/70 transition-colors">
                AI Transition Advisory
              </Link>
              <Link to="/straddle-framework" className="block text-sm hover:text-white/70 transition-colors">
                Straddle Framework
              </Link>
              <Link to="/services#governance-layer" className="block text-sm hover:text-white/70 transition-colors">
                AI Governance Layer
              </Link>
              <Link to="/services#risk-assessment" className="block text-sm hover:text-white/70 transition-colors">
                AI Risk Assessment
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">
              Company
            </p>
            <div className="space-y-2.5">
              <Link to="/about" className="block text-sm hover:text-white/70 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-sm hover:text-white/70 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">
              Connect
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@discimen.com" className="block text-sm hover:text-white/70 transition-colors">
                info@discimen.com
              </a>
              <a
                href="https://www.linkedin.com/in/mashz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-white/70 transition-colors"
              >
                Mash Zahid — LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/reddhimitra/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-white/70 transition-colors"
              >
                Reddhi Mitra — LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Discimen. All rights reserved.</p>
          <p className="text-xs">
            AI Transition Advisory &middot; Governance &middot; Risk Assessment
          </p>
        </div>
      </div>
    </footer>
  );
}
