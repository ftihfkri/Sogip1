import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Award,
  Building2,
  Ship,
  Zap,
  Globe,
} from 'lucide-react';
import { HorizontalMarquee } from '../components/HorizontalMarquee';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '../components/ScrollAnimations';

export const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Kinetic text reveal
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setTextRevealed(true), 300);
    return () => window.clearTimeout(revealTimer);
  }, []);

  const words = "Sabah's Gateway to Energy Excellence".split(' ');

  return (
    <div className="bg-[#0A1628] min-h-[100dvh]">
      {/* Hero Section - Kinetic with Masked Reveal */}
      <section ref={heroRef} className="relative min-h-[100svh] min-h-[100dvh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1640621202549-b813eb0a0720?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/80 to-[#0A1628]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 min-h-[100svh] min-h-[100dvh] flex items-center pt-24 pb-20 sm:pt-28 sm:pb-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Overline with Animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-5 sm:mb-8"
              >
                <div className="h-px w-8 sm:w-12 flex-shrink-0 bg-gradient-to-r from-[#00D4FF] to-transparent" />
                <span className="text-[#00D4FF] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  Sipitang Oil &amp; Gas Industrial Park
                </span>
              </motion.div>

              {/* Main Headline - Masked Line Reveal - FIXED CUTOFF */}
              <div className="mb-6 sm:mb-8">
                {textRevealed && (
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.12] sm:leading-[1.15]">
                    {words.map((word, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: idx * 0.1,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        }}
                        className="inline-block mr-2 sm:mr-3 md:mr-4"
                      >
                        {word === 'Excellence' ? (
                          <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
                            {word}
                          </span>
                        ) : (
                          word
                        )}
                      </motion.span>
                    ))}
                  </h1>
                )}
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl"
              >
                Sabah's first integrated industrial park designated for oil and gas
                and heavy industries, located beside Brunei Bay in Sipitang district.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full min-h-12 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Contact SOGDC</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </Link>
                <Link to="/master-plan" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full min-h-12 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    View Master Plan
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden sm:block absolute bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Horizontal Marquee Section */}
      <MarqueeSection />

      {/* Stats Section - Numbered Manifesto Style */}
      <StatsSection />

      {/* Why SOGIP Section */}
      <WhySOGIPSection />

      {/* Projects Showcase */}
      <ProjectsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Marquee Section - Horizontal Scroll
const MarqueeSection = () => {
  const phrases = [
    '5,539 Acres Total Area',
    '3,068 Acres Onshore',
    '2,471 Acres Sea Area',
    '16–25m Natural Water Depth',
    'SAMUR Operational Since 2017',
    'PFLNG 3 Under Construction',
    'SOGIP Port Declared in 2025',
    'Sabah State-Owned Developer',
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#0A1628] border-y border-white/5">
      <HorizontalMarquee speed={40}>
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="flex items-center mx-4 sm:mx-8"
          >
            <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white/80 whitespace-nowrap">
              {phrase}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mx-4 sm:mx-8" />
          </div>
        ))}
      </HorizontalMarquee>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '01', value: '5,539', label: 'Total Acres', icon: MapPin },
    { number: '02', value: '3,068', label: 'Onshore Acres', icon: Building2 },
    { number: '03', value: '2,471', label: 'Sea Area Acres', icon: Globe },
    { number: '04', value: '16–25m', label: 'Natural Water Depth', icon: Ship },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0A1628] to-[#0D1F36] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#00D4FF] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#FFB020] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-px bg-gradient-to-b from-[#00D4FF]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-8 hover:border-[#00D4FF]/30 transition-all duration-500">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-5xl sm:text-6xl font-bold text-white/5">{stat.number}</span>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <stat.icon className="text-[#00D4FF]" size={28} />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      className="text-3xl sm:text-4xl font-bold text-white mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

// Why SOGIP Section
const WhySOGIPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Globe,
      title: 'Strategic Location',
      description:
        'Located beside Brunei Bay, approximately 12 km from Sipitang town and 150 km south of Kota Kinabalu.',
    },
    {
      icon: Ship,
      title: 'Natural Deep Water',
      description:
        'Official SOGIP information records 16–25m natural water depth suitable for SBM access and VLCC anchorage.',
    },
    {
      icon: Zap,
      title: 'Industrial Services',
      description:
        'The park provides industrial roads, drainage, water, electricity and telecommunications, with port development proceeding in phases.',
    },
    {
      icon: Award,
      title: 'State-Owned Development',
      description:
        'SOGDC is wholly owned by the Sabah State Government and is responsible for developing and managing SOGIP.',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-[#0D1F36] relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Why Choose <span className="text-[#00D4FF]">SOGIP</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Published site advantages and confirmed industrial developments in Sipitang
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-[#FFB020] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#0A1628] border border-white/10 rounded-2xl p-5 sm:p-8 hover:border-transparent transition-all duration-500 h-full">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#FFB020]/20 flex items-center justify-center mb-6"
                    >
                      <feature.icon className="text-[#00D4FF]" size={32} />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'PETRONAS PFLNG 3',
      value: 'US$3.1B · 2.0 MTPA',
      status: 'Under Construction',
      source: 'https://cm.sabah.gov.my/siaran-media/4197',
      image: 'https://images.unsplash.com/photo-1709873906965-e3a3c1bd1b94?w=800&q=80',
    },
    {
      title: 'Esteel Green Steel Project',
      value: 'Approx. RM31B',
      status: 'Phase I Launched',
      source: 'https://cm.sabah.gov.my/siaran-media/3324',
      image: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=800&q=80',
    },
    {
      title: 'SAMUR Fertiliser Complex',
      value: '1.9 MTPA Combined Capacity',
      status: 'Operational Since 2017',
      source: 'https://www.petronas.com/pcg/media/media-releases/smj-completes-acquisition-equity-interest-petronas-chemicals-fertiliser-sabah',
      image: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628] relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#00D4FF] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Anchor <span className="text-[#FFB020]">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Selected operating, under-construction and publicly announced developments
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -15, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt=""
                      width="800"
                      height="1000"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
                    <div className="absolute right-3 top-3 rounded-full bg-[#0A1628]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
                      Illustrative image
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="inline-block px-3 py-1 bg-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-xs font-semibold mb-4"
                    >
                      {project.status}
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-[#FFB020] text-xl font-semibold">{project.value}</p>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex mt-3 text-sm font-semibold text-[#00D4FF] hover:text-white transition-colors">
                      Official source
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeInUp delay={0.8}>
          <div className="text-center mt-12">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="min-h-12 px-7 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#FFB020]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Need Current SOGIP{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Information
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10">
            Contact SOGDC for current site information, project updates and investment enquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-h-12 px-7 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white text-base sm:text-lg font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300"
              >
                Contact SOGDC
              </motion.button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-h-12 px-7 sm:px-10 py-3 sm:py-5 bg-white/5 backdrop-blur-sm text-white text-base sm:text-lg font-semibold rounded-lg border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
