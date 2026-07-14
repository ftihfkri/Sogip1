import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Logo = ({ variant = 'header' }) => {
  const isLarge = variant === 'large';
  
  return (
    <Link to="/" className="inline-block group">
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

        {/* Main Logo Container */}
        <div
          className={`relative rounded-xl overflow-hidden ${
            isLarge ? 'p-8' : 'p-3'
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
          <div className="absolute inset-0 rounded-xl overflow-hidden">
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
              className="absolute inset-[2px] rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #5A1A1A 0%, #3D0E0E 50%, #2A0808 100%)',
              }}
            />
          </div>

          {/* Logo Content */}
          <div className="relative z-10">
            {/* SOGIP Text with Gradient and Shadow */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={`font-bold tracking-wider ${
                isLarge ? 'text-6xl mb-3' : 'text-2xl mb-1'
              }`}
            >
              {/* Text Shadow Layer */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #FFB020 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'blur(8px)',
                  opacity: 0.4,
                }}
              >
                SOGIP
              </div>

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
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                }}
              >
                SOGIP
              </motion.div>

              {/* Light Streaks */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                style={{
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
                className="inline-block ml-1"
                style={{
                  background: 'radial-gradient(circle, #FFB020 0%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(255, 176, 32, 0.6))',
                }}
              >
                .
              </motion.span>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`${
                isLarge ? 'text-sm tracking-wide' : 'text-[10px] tracking-wider'
              } font-medium text-gray-300/90 uppercase`}
            >
              Sipitang Oil & Gas Industrial Park
            </motion.div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00D4FF]/50 rounded-tl-lg" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFB020]/50 rounded-br-lg" />

          {/* Particle Effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: 'easeInOut',
              }}
              className="absolute bottom-4 left-1/2 w-1 h-1 bg-[#00D4FF] rounded-full"
              style={{
                left: `${30 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Premium Badge */}
        {isLarge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-[#FFB020] to-[#FF8C00] text-white text-xs font-bold rounded-full shadow-lg shadow-[#FFB020]/30"
          >
            Est. 2010
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

// Simplified version for mobile
export const LogoSimple = () => {
  return (
    <Link to="/" className="inline-block">
      <div className="flex items-center space-x-2">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-2xl font-bold"
        >
          <span className="text-white">SOGIP</span>
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[#FFB020]"
          >
            .
          </motion.span>
        </motion.div>
      </div>
    </Link>
  );
};
