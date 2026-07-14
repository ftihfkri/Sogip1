import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, X } from 'lucide-react';
import { Logo } from '../components/Logo';

export const LogoShowcase = () => {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-[#0A1628] via-[#0D1F36] to-[#0A1628] pt-28 sm:pt-32 pb-14 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
            SOGIP <span className="text-[#00D4FF]">Logo Showcase</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400">
            Luxury animated logo with premium effects
          </p>
        </motion.div>

        {/* Large Hero Logo */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Hero Version</h2>
            <p className="text-gray-400 mb-12">
              Large format with full animations - perfect for homepage hero sections
            </p>
          </motion.div>

          <div className="flex justify-center">
            <Logo variant="large" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-[#0D1F36]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2"><Sparkles size={20} /> Premium Features:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#00D4FF] mt-1">•</span>
                  <span><strong>Rotating Border Gradient:</strong> Continuous 360° animated border with blue-gold gradient</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB020] mt-1">•</span>
                  <span><strong>Shimmer Text Effect:</strong> Animated gradient text with smooth color transitions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00D4FF] mt-1">•</span>
                  <span><strong>Light Streaks:</strong> Periodic light sweep across the logo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB020] mt-1">•</span>
                  <span><strong>Pulsing Glow:</strong> Subtle breathing glow effect on hover</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00D4FF] mt-1">•</span>
                  <span><strong>Animated Dot:</strong> Golden accent with pulsing animation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB020] mt-1">•</span>
                  <span><strong>Floating Particles:</strong> Subtle rising particle effects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00D4FF] mt-1">•</span>
                  <span><strong>Premium Badge:</strong> "Est. 2010" badge with shadow effects</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Navigation Version */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Navigation Version</h2>
            <p className="text-gray-400 mb-8">
              Compact format with all premium animations - as seen in the header
            </p>
          </motion.div>

          <div className="bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-12">
            <div className="flex justify-center">
              <Logo />
            </div>
          </div>
        </div>

        {/* Dark Background Comparison */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Background Variations</h2>
            <p className="text-gray-400 mb-8">
              Logo performance on different background colors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pure Black */}
            <div className="bg-black rounded-2xl p-6 sm:p-12 flex items-center justify-center">
              <Logo />
            </div>

            {/* Light Background */}
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-12 flex items-center justify-center">
              <Logo />
            </div>

            {/* Gradient Blue */}
            <div className="bg-gradient-to-br from-[#00D4FF]/20 to-[#0099CC]/20 rounded-2xl p-6 sm:p-12 flex items-center justify-center">
              <Logo />
            </div>

            {/* Gradient Gold */}
            <div className="bg-gradient-to-br from-[#FFB020]/20 to-[#FF8C00]/20 rounded-2xl p-6 sm:p-12 flex items-center justify-center">
              <Logo />
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Brand Colors</h2>
            <p className="text-gray-400 mb-8">
              Premium color palette used in the logo design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Maroon Base', color: '#5A1A1A', description: 'Primary background' },
              { name: 'Electric Blue', color: '#00D4FF', description: 'Accent gradient' },
              { name: 'Amber Gold', color: '#FFB020', description: 'Accent gradient' },
              { name: 'Pure White', color: '#FFFFFF', description: 'Text color' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="bg-[#0D1F36] border border-white/10 rounded-xl p-4 sm:p-6 text-center"
              >
                <div
                  className="w-full aspect-square rounded-lg mb-4 shadow-xl"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 10px 40px ${item.color}40`,
                  }}
                />
                <h3 className="text-white font-bold mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                <code className="text-xs text-[#00D4FF] bg-black/30 px-2 py-1 rounded">
                  {item.color}
                </code>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 sm:mt-24 lg:mt-32 bg-gradient-to-br from-[#00D4FF]/10 to-[#FFB020]/10 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Check aria-hidden="true" className="text-green-400 mr-3" size={24} /> Do
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Use on dark backgrounds for maximum impact</li>
                <li>• Maintain adequate clear space around the logo</li>
                <li>• Allow animations to complete their cycles</li>
                <li>• Use large format for hero sections</li>
                <li>• Maintain aspect ratio when scaling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <X aria-hidden="true" className="text-red-400 mr-3" size={24} /> Don't
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Distort or stretch the logo</li>
                <li>• Change the color palette</li>
                <li>• Add additional effects or filters</li>
                <li>• Use on busy background images</li>
                <li>• Scale below minimum size (80px height)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
