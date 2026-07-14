import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo variant="large" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sipitang Oil &amp; Gas Industrial Park (SOGIP) — Sabah's first integrated industrial park designated for oil and gas and heavy industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ['About Us', '/about'],
                ['Why SOGIP', '/why-sogip'],
                ['Master Plan', '/master-plan'],
                ['Projects', '/projects'],
                ['News & Media', '/news'],
              ].map(([label, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-gray-400 hover:text-[#00D4FF] text-sm transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h3 className="text-white font-semibold mb-6">For Investors</h3>
            <ul className="space-y-3">
              {[
                ['Published Projects', '/projects'],
                ['Potential Tax Incentives', '/why-sogip'],
                ['News & Media', '/news'],
                ['Contact SOGDC', '/contact'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-[#00D4FF] text-sm transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Level 11, Wisma Innoprise, Jalan Sulaman, 88874 Kota Kinabalu, Sabah</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-[#00D4FF] flex-shrink-0" />
                <a href="tel:+6088215772" className="text-gray-400 hover:text-[#00D4FF]">+60 88 215772 / 215773</a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-[#00D4FF] flex-shrink-0" />
                <a href="mailto:info@sogip.com.my" className="text-gray-400 hover:text-[#00D4FF] break-all">info@sogip.com.my</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 sm:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} SOGIP. Managed by Sabah Oil & Gas Development Corporation (SOGDC).
          </p>
          <a href="https://sogip.com.my/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00D4FF] text-sm transition-colors">
            Official SOGDC website
          </a>
        </div>
      </div>
    </footer>
  );
};
