import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Ship,
  Award,
  Globe,
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
          alt=""
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/85 to-[#0A1628]" />
        <div className="absolute bottom-4 right-4 rounded-full bg-[#0A1628]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
          Illustrative image
        </div>
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
            Review SOGIP's published location, site characteristics, industrial infrastructure,
            confirmed developments and potential Malaysian investment incentives.
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
      title: 'Brunei Bay Location',
      description: 'Located beside Brunei Bay and close to major Far East shipping routes',
      icon: Compass,
    },
    {
      title: 'Natural Deep Water',
      description: 'Official SOGIP information records natural water depths of 16–25 metres, suitable for SBM access and VLCC anchorage',
      icon: Ship,
    },
    {
      title: 'Road Connectivity',
      description: 'Connected to the Sabah–Sarawak route through the Pan Borneo Highway network',
      icon: Globe,
    },
    {
      title: 'Sipitang District',
      description: 'Approximately 12 km from Sipitang town and 150 km south of Kota Kinabalu',
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
            Published location and access information
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
      title: 'Marine & Port Development',
      items: [
        'Natural 16–25m water depth',
        'Suitable for SBM and VLCC anchorage',
        'SOGIP Port declared in January 2025',
        'Port development planned in phases',
      ],
      image: 'https://images.unsplash.com/photo-1591907303049-a5e5df26bcb9?w=800&q=80',
    },
    {
      title: 'Power & Utilities',
      items: [
        'Electricity infrastructure',
        'Industrial water infrastructure',
        'Telecommunications infrastructure',
        'Existing road and drainage network',
      ],
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80',
    },
    {
      title: 'Land & Facilities',
      items: [
        '5,539 acres total area',
        '3,068 acres onshore',
        '2,471 acres sea area',
        'Roads and drainage',
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
            Published <span className="text-[#FFB020]">Infrastructure Overview</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Existing industrial services alongside phased port and project development
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
                  alt=""
                  width="800"
                  height="1000"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-[#0A1628]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
                  Illustrative image
                </div>
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
        <p className="mt-8 text-center text-sm text-gray-500">
          <a href="https://sogip.com.my/wp-content/uploads/2025/06/SOGIP-BROCHURE-2.pdf" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FFB020]">
            View the official 2025 SOGIP brochure
          </a>
          {' '}for the published infrastructure overview.
        </p>
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
      title: 'Pioneer Status',
      description: 'Eligible promoted activities may receive a 70–100% income tax exemption for 5–10 years, subject to MIDA approval',
    },
    {
      icon: Package,
      title: 'Import Duty Exemptions',
      description: 'Qualifying machinery, equipment or inputs may receive exemptions subject to the applicable MIDA and Customs rules',
    },
    {
      icon: Award,
      title: 'Investment Tax Allowance',
      description: 'Eligible projects may receive an allowance of 60–100% on qualifying capital expenditure, subject to MIDA approval',
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
            Potential Investment <span className="text-[#00D4FF]">Incentives</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Examples of Malaysian incentives that may apply, subject to eligibility and approval
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
        <p className="text-center text-gray-500 text-sm mt-8 max-w-3xl mx-auto">
          Incentives are not automatic or SOGIP-specific guarantees. Eligibility and approval are determined by the relevant Malaysian authorities.{' '}
          <a href="https://www.mida.gov.my/faq/" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FFB020]">View current MIDA guidance</a>
          {' '}and{' '}
          <a href="https://www.customs.gov.my/en/business/facilitation/exemptions-of-duties-taxes/raw-material-component" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FFB020]">Royal Malaysian Customs guidance</a>.
        </p>
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
              title: 'Downstream Industry Focus',
              description:
                'SOGIP is designated for downstream oil and gas activities and other heavy industries in Sabah.',
            },
            {
              number: '02',
              title: 'State-Owned Developer',
              description:
                'SOGDC is wholly owned by the Sabah State Government and is responsible for developing and managing SOGIP.',
            },
            {
              number: '03',
              title: 'Confirmed Industrial Projects',
              description:
                'The park hosts the operational SAMUR complex and developments including Esteel, PFLNG 3 and the Sipitang power plant.',
            },
            {
              number: '04',
              title: 'Regional Connectivity',
              description:
                'The Brunei Bay location provides maritime access while road links connect Sipitang with Sabah, Sarawak and Brunei.',
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
