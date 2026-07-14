import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Users, Award, Globe } from 'lucide-react';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/ScrollAnimations';

export const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="bg-[#0A1628] min-h-[100dvh] pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
              About SOGIP
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Pioneering Sabah's{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
                Energy Future
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              SOGIP is Sabah's first integrated industrial park designated for oil and gas
              and heavy industries. It is located in Sipitang district beside Brunei Bay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <HistorySection />

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* SOGDC Section */}
      <SOGDCSection />

      {/* Leadership */}
      <LeadershipSection />

      {/* Values */}
      <ValuesSection />
    </div>
  );
};

// History Timeline
const HistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: '2010',
      title: 'SOGDC Incorporated',
      description: 'Sabah Oil & Gas Development Corporation was incorporated on 18 August 2010 and tasked by the Sabah State Government to spearhead SOGIP.',
      source: 'https://sogip.com.my/background/',
    },
    {
      year: '2017',
      title: 'SAMUR Begins Operations',
      description: 'PETRONAS Chemicals Fertiliser Sabah, formerly known as the SAMUR project, began commercial operations in May 2017.',
      source: 'https://www.petronas.com/media/media-releases/petronas-reports-solid-profits-fy2017',
    },
    {
      year: 'January 2025',
      title: 'SOGIP Port Declared',
      description: 'SOGIP Port was officially declared and a port concession agreement was signed with the Sabah Ports Authority and SOGIP Port Sdn Bhd.',
      source: 'https://sogip.com.my/majlis-pengisytiharan-rasmi-pelabuhan-sogip-dan-menandatangani-perjanjian-konsesi-pelabuhan-di-antara-lembaga-pelabuhan-pelabuhan-sabah-sabah-oil-gas-development-corporation-sdn-bhd-dan-sogip-p/',
    },
    {
      year: 'May 2025',
      title: 'Esteel Phase I Launched',
      description: 'Phase I of the Esteel green steel project was launched as part of a multi-phase development at SOGIP.',
      source: 'https://sogip.com.my/launching-ceremony-of-esteel-enterprise-sabah-sdn-bhd-phase-i/',
    },
    {
      year: 'April 2026',
      title: 'Proposed Energy Hub Expanded',
      description: 'SOGDC and strategic partners exchanged MoUs for proposed LNG, ammonia and hydrogen storage, power generation and supporting infrastructure.',
      source: 'https://sogip.com.my/memorandums-of-understanding-mous-between-sabah-oil-gas-development-corporation-sogdc-and-ea-gibson/',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-[#FFB020]">Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From vision to reality - building Sabah's energy infrastructure
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#FFB020] to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                }`}>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#FFB020]/20 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-bold mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-flex mt-3 text-sm font-semibold text-[#00D4FF] hover:text-[#FFB020] transition-colors">
                    Official source
                  </a>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#00D4FF] to-[#FFB020] rounded-full border-4 border-[#0A1628]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision & Mission
const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-[#0D1F36] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#FFB020]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 flex items-center justify-center mb-6">
                <Eye className="text-[#00D4FF]" size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Vision</h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                To be a premier oil and gas industrial park and port for a petrochemical hub,
                committed to customer satisfaction in cost, quality and delivery through
                honesty and integrity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-[#FFB020] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFB020]/20 to-[#FFB020]/5 flex items-center justify-center mb-6">
                <Target className="text-[#FFB020]" size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                To develop SOGIP as a downstream hub catalyst for oil and gas development in
                Sabah, create value-added supply chains, support domestic downstream needs,
                and develop modern, reliable and sustainable port infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// SOGDC Section
const SOGDCSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
              Managing Authority
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Sabah Oil & Gas Development{' '}
              <span className="text-[#00D4FF]">Corporation</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              Incorporated on 18 August 2010, SOGDC is a Chief Minister Incorporated company
              wholly owned by the Sabah State Government. It was established to own, develop,
              manage and market SOGIP.
            </p>
            <div className="space-y-4">
              {[
                'Spearhead the development of SOGIP',
                'Develop downstream oil and gas and heavy industries',
                'Develop value-added downstream supply chains',
                'Develop modern and sustainable port infrastructure',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
            <a href="https://sogip.com.my/background/" target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 text-sm font-semibold text-[#00D4FF] hover:text-[#FFB020]">
              Official SOGDC background
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80"
                alt=""
                width="800"
                height="600"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
              <div className="absolute right-3 top-3 rounded-full bg-[#0A1628]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
                Illustrative image
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Leadership
const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const leaders = [
    {
      name: 'Datuk Ir. Shahelmey Yahya',
      role: 'Chairman, SOGDC',
      image: 'https://ui-avatars.com/api/?name=Shahelmey+Yahya&size=400&background=00D4FF&color=fff&font-size=0.35',
    },
    {
      name: 'Mohd Azmir bin Datuk Ramli',
      role: 'Group Managing Director / Chief Executive Officer',
      image: 'https://ui-avatars.com/api/?name=Mohd+Azmir&size=400&background=FFB020&color=fff&font-size=0.35',
    },
  ];

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
            Leadership <span className="text-[#00D4FF]">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Current leadership listed by SOGDC
          </p>
          <a href="https://sogip.com.my/bod/" target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 text-sm font-semibold text-[#00D4FF] hover:text-[#FFB020]">
            View official Board of Directors
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-[#00D4FF]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0D1F36] border border-white/10 rounded-2xl p-6 overflow-hidden">
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    width="400"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-[#00D4FF] font-medium">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Values
const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Users,
      title: 'People',
      description: 'SOGDC describes its people as a valuable organisational asset.',
    },
    {
      icon: Globe,
      title: 'Diversity & Teamwork',
      description: 'The company highlights its diverse workforce and cross-department collaboration.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'SOGDC states that openness and accessible information help build trust.',
    },
    {
      icon: Award,
      title: 'Honesty & Integrity',
      description: 'The company commits to truthful, moral, just and fair conduct.',
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
            Official Core <span className="text-[#FFB020]">Values</span>
          </h2>
          <a href="https://sogip.com.my/core-values/" target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-[#00D4FF] hover:text-[#FFB020]">
            View SOGDC's official core-values page
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#FFB020]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <value.icon className="text-[#00D4FF]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
