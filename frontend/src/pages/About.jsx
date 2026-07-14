import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Users, Award, TrendingUp, Globe } from 'lucide-react';

export const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="bg-[#0A1628] min-h-screen pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 overflow-hidden"
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
              About SOGIP
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pioneering Sabah's{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
                Energy Future
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              SOGIP is Malaysia's flagship integrated oil and gas industrial park,
              strategically developed to position Sabah as a regional energy hub while
              driving sustainable economic growth and job creation.
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
      title: 'Inception',
      description: 'SOGIP concept introduced as part of Sabah Development Corridor initiative.',
    },
    {
      year: '2015',
      title: 'Land Acquisition',
      description: '4,500 acres secured in Sipitang for integrated industrial development.',
    },
    {
      year: '2018',
      title: 'Infrastructure Development',
      description: 'Major infrastructure works commenced including deep-water jetty and utilities.',
    },
    {
      year: '2021',
      title: 'First Anchor Project',
      description: 'PETRONAS Gas power plant project initiated, marking first major investment.',
    },
    {
      year: '2024',
      title: 'Rapid Expansion',
      description: '$20B+ in committed investments with multiple anchor projects underway.',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#FFB020]">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From vision to reality - building Sabah's energy infrastructure
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#FFB020] to-transparent" />

          <div className="space-y-16">
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
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                }`}>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#FFB020]/20 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-bold mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
    <section ref={ref} className="py-32 bg-[#0D1F36] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FFB020]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 flex items-center justify-center mb-6">
                <Eye className="text-[#00D4FF]" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To establish SOGIP as Southeast Asia's premier integrated oil and gas
                industrial park, driving sustainable economic transformation and positioning
                Sabah as a global energy hub.
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
            <div className="relative bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFB020]/20 to-[#FFB020]/5 flex items-center justify-center mb-6">
                <Target className="text-[#FFB020]" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To attract world-class investments, develop state-of-the-art infrastructure,
                and create sustainable employment opportunities while maintaining environmental
                stewardship and community engagement.
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
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
              Managing Authority
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sabah Oil & Gas Development{' '}
              <span className="text-[#00D4FF]">Corporation</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              SOGDC is the dedicated state agency responsible for the planning, development,
              and management of SOGIP. Established to maximize Sabah's participation in the
              oil and gas industry, SOGDC works closely with federal agencies, industry
              partners, and investors to ensure the park's success.
            </p>
            <div className="space-y-4">
              {[
                'Strategic planning and park development',
                'Investment facilitation and promotion',
                'Infrastructure coordination',
                'Regulatory compliance and liaison',
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
                alt="SOGDC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
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
      name: 'Datuk Haji Masiung Banah',
      role: 'Chairman, SOGDC',
      image: 'https://ui-avatars.com/api/?name=Datuk+Masiung&size=400&background=00D4FF&color=fff',
    },
    {
      name: 'Ir. Ahmad Zainal',
      role: 'Chief Executive Officer',
      image: 'https://ui-avatars.com/api/?name=Ahmad+Zainal&size=400&background=FFB020&color=fff',
    },
    {
      name: 'Puan Siti Aminah',
      role: 'Director of Operations',
      image: 'https://ui-avatars.com/api/?name=Siti+Aminah&size=400&background=00D4FF&color=fff',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership <span className="text-[#00D4FF]">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experienced professionals driving SOGIP's vision forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      icon: Award,
      title: 'Excellence',
      description: 'Striving for world-class standards in all operations',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with stakeholders',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing technology and sustainable practices',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to environmental and social responsibility',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core <span className="text-[#FFB020]">Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
