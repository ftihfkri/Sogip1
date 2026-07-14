import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Ship,
  Zap,
  Award,
  TrendingUp,
  Globe,
  Building2,
  Package,
  DollarSign,
  Compass,
} from 'lucide-react';

export const WhySOGIP = () => {
  return (
    <div className="bg-[#0A1628] min-h-[100dvh] pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Strategic Location */}
      <LocationSection />

      {/* Infrastructure */}
      <InfrastructureSection />

      {/* Investment Incentives */}
      <IncentivesSection />

      {/* Competitive Advantages */}
      <AdvantagesSection />
    </div>
  );
};

// Hero
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1597334948330-38795f25d05d?w=1920&q=80"
          alt="Port"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/85 to-[#0A1628]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
            Investment Advantages
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Why Invest in{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              SOGIP
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A unique combination of strategic location, world-class infrastructure,
            and attractive incentives make SOGIP the ideal destination for oil and gas investments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Strategic Location
const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const locations = [
    {
      title: 'Sabah-Brunei-Labuan Triangle',
      description: 'Positioned at the heart of Southeast Asia\'s energy corridor',
      icon: Compass,
    },
    {
      title: 'Deep Water Access',
      description: '25m water depth for Very Large Crude Carriers (VLCCs)',
      icon: Ship,
    },
    {
      title: 'Regional Connectivity',
      description: 'Direct access to ASEAN markets and international shipping lanes',
      icon: Globe,
    },
    {
      title: 'Proximity to Resources',
      description: 'Close to Sabah and Brunei oil and gas fields',
      icon: MapPin,
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Strategic <span className="text-[#00D4FF]">Location</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Ideally positioned for regional and global energy markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {locations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-[#FFB020] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A1628] border border-white/10 rounded-2xl p-5 sm:p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#FFB020]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="text-[#00D4FF]" size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Infrastructure
const InfrastructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const infrastructure = [
    {
      title: 'Deep Water Jetty',
      items: [
        '25m water depth',
        'VLCC capable',
        'Modern berthing facilities',
        '24/7 operations',
      ],
      image: 'https://images.unsplash.com/photo-1591907303049-a5e5df26bcb9?w=800&q=80',
    },
    {
      title: 'Power & Utilities',
      items: [
        'Reliable electricity supply',
        'Industrial water system',
        'Telecommunications',
        'Gas pipeline network',
      ],
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80',
    },
    {
      title: 'Land & Facilities',
      items: [
        '4,500+ acres available',
        'Zoned industrial plots',
        'Roads and drainage',
        'Security and monitoring',
      ],
      image: 'https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=800&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-[#0D1F36] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            World-Class <span className="text-[#FFB020]">Infrastructure</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Ready-to-operate facilities and utilities for immediate investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {infrastructure.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  width="800"
                  height="1000"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Investment Incentives
const IncentivesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const incentives = [
    {
      icon: DollarSign,
      title: 'Tax Exemptions',
      description: 'Up to 100% tax exemption for qualifying pioneer status investments',
    },
    {
      icon: Package,
      title: 'Duty-Free Imports',
      description: 'Exemption on import duties for machinery, equipment, and raw materials',
    },
    {
      icon: Award,
      title: 'Investment Tax Allowance',
      description: 'Up to 60-100% ITA on qualifying capital expenditure',
    },
    {
      icon: TrendingUp,
      title: 'Accelerated Depreciation',
      description: 'Fast-track depreciation on plant and machinery',
    },
    {
      icon: Building2,
      title: 'Land Lease',
      description: 'Competitive land lease rates with flexible tenure options',
    },
    {
      icon: Zap,
      title: 'Utility Subsidies',
      description: 'Support for power and utility connections',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Investment <span className="text-[#00D4FF]">Incentives</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Attractive fiscal incentives to maximize your investment returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {incentives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-[#00D4FF]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0D1F36] border border-white/10 rounded-2xl p-5 sm:p-8 h-full hover:border-[#00D4FF]/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00D4FF]/20 to-transparent flex items-center justify-center mb-6">
                  <item.icon className="text-[#00D4FF]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Competitive Advantages
const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Competitive <span className="text-[#FFB020]">Advantages</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              number: '01',
              title: 'Integrated Ecosystem',
              description:
                'Complete value chain from upstream to downstream, enabling synergies and cost efficiencies across operations.',
            },
            {
              number: '02',
              title: 'Government Support',
              description:
                'Strong backing from state and federal governments with streamlined approval processes and dedicated support.',
            },
            {
              number: '03',
              title: 'Skilled Workforce',
              description:
                'Access to trained local workforce with ongoing skills development programs and talent pipelines.',
            },
            {
              number: '04',
              title: 'Sustainability Focus',
              description:
                'Commitment to environmental best practices and ESG compliance, aligned with global standards.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex gap-4 sm:gap-6 group"
            >
              <div className="text-5xl sm:text-6xl font-bold text-white/5 group-hover:text-[#00D4FF]/10 transition-colors">
                {item.number}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
