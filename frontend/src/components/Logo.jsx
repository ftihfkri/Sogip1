import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';

export const Logo = ({ variant = 'header' }) => {
  const isLarge = variant === 'large';
  
  return (
    <Link to="/" onClick={() => scrollToTop('auto')} aria-label="SOGIP home" className="inline-block max-w-[10.5rem] sm:max-w-none group">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        {/* Glow Effect Background */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -inset-2 bg-gradient-to-r from-[#00D4FF]/20 via-[#FFB020]/20 to-[#00D4FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Main Logo Container - REDUCED SIZE */}
        <div
          className={`relative rounded-lg overflow-hidden ${
            isLarge ? 'p-4 sm:p-6' : 'p-2'
          }`}
          style={{
            background: 'linear-gradient(135deg, #5A1A1A 0%, #3D0E0E 50%, #2A0808 100%)',
          }}
        >
          {/* Animated Gradient Overlay */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{ width: '200%' }}
          />

          {/* Border Gradient Animation */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-[-2px]"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, #00D4FF 25%, #FFB020 50%, #00D4FF 75%, transparent 100%)',
                filter: 'blur(4px)',
              }}
            />
            <div
              className="absolute inset-[2px] rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #5A1A1A 0%, #3D0E0E 50%, #2A0808 100%)',
              }}
            />
          </div>

          {/* Logo Content */}
          <div className="relative z-10">
            {/* SOGIP Text with Gradient and Shadow - REDUCED SIZE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={`font-bold tracking-wider ${
                isLarge ? 'text-3xl sm:text-4xl mb-2' : 'text-base sm:text-lg mb-0.5'
              }`}
            >
              {/* Main Text with Shimmer */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="relative"
                style={{
                  background:
                    'linear-gradient(90deg, #FFFFFF 0%, #00D4FF 25%, #FFB020 50%, #00D4FF 75%, #FFFFFF 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SOGIP
              </motion.div>

              {/* Golden Accent Dot */}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-block ml-0.5"
                style={{
                  background: 'radial-gradient(circle, #FFB020 0%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 6px rgba(255, 176, 32, 0.6))',
                }}
              >
                .
              </motion.span>
            </motion.div>

            {/* Tagline - REDUCED SIZE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`${
                isLarge ? 'text-[9px] sm:text-[10px] tracking-wide' : 'text-[6px] sm:text-[7px] tracking-wider'
              } font-medium text-gray-300/90 uppercase`}
            >
              Sipitang Oil & Gas Industrial Park
            </motion.div>
          </div>

          {/* Corner Accents - SMALLER */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#00D4FF]/50 rounded-tl" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#FFB020]/50 rounded-br" />
        </div>

        {/* Premium Badge - ONLY ON LARGE */}
        {isLarge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-[#FFB020] to-[#FF8C00] text-white text-[10px] font-bold rounded-full shadow-lg shadow-[#FFB020]/30"
          >
            Est. 2010
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};
