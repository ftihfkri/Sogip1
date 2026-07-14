import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
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
              Sabah Oil and Gas Industrial Park - Driving sustainable energy development and economic growth in Sabah.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={`Visit SOGIP on ${['LinkedIn', 'Facebook', 'X'][index]}`}
                  className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#00D4FF]/20 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Why SOGIP', 'Master Plan', 'Projects', 'Sustainability'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-[#00D4FF] text-sm transition-colors duration-300"
                    >
                      {item}
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
                'Investment Opportunities',
                'Tax Incentives',
                'Application Process',
                'News & Media',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-[#00D4FF] text-sm transition-colors duration-300"
                  >
                    {item}
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
                <span className="text-gray-400">
                  SOGDC Office, Kota Kinabalu, Sabah, Malaysia
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-[#00D4FF] flex-shrink-0" />
                <span className="text-gray-400">+60 88 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-[#00D4FF] flex-shrink-0" />
                <span className="text-gray-400 break-all">info@sogip.com.my</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 sm:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} SOGIP. Managed by Sabah Oil & Gas Development Corporation (SOGDC).
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-[#00D4FF] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#00D4FF] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
