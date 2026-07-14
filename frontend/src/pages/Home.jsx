import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Award,
  Building2,
  Ship,
  Zap,
  Globe,
  CheckCircle2,
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
    setTimeout(() => setTextRevealed(true), 300);
  }, []);

  const words = "Sabah's Gateway to Energy Excellence".split(' ');

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero Section - Kinetic with Masked Reveal */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
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
          className="relative z-10 h-full flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Overline with Animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-3 mb-8"
              >
                <div className="h-px w-12 bg-gradient-to-r from-[#00D4FF] to-transparent" />
                <span className="text-[#00D4FF] text-sm font-semibold tracking-wider uppercase">
                  Sabah Oil & Gas Industrial Park
                </span>
              </motion.div>

              {/* Main Headline - Masked Line Reveal - FIXED CUTOFF */}
              <div className="mb-8">
                {textRevealed && (
                  <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.15]">
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
                        className="inline-block mr-3 md:mr-4"
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
                className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              >
                Malaysia's premier integrated oil and gas industrial park,
                strategically positioned in the Sabah-Brunei-Labuan triangle to
                drive sustainable energy development.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Opportunities</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </Link>
                <Link to="/master-plan">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
    'World-Class Infrastructure',
    'Strategic Location',
    'RM30B+ Investments',
    'Deep Water Port',
    'Tax Incentives',
    'Green Technology',
    'Regional Energy Hub',
    '15,000+ Jobs Created',
  ];

  return (
    <section className="py-12 bg-[#0A1628] border-y border-white/5">
      <HorizontalMarquee speed={40}>
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="flex items-center mx-8"
          >
            <span className="text-2xl md:text-3xl font-bold text-white/80 whitespace-nowrap">
              {phrase}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mx-8" />
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
    { number: '01', value: '4,500+', label: 'Acres of Land', icon: MapPin },
    { number: '02', value: '25m', label: 'Water Depth (VLCC)', icon: Ship },
    { number: '03', value: '$20B+', label: 'Investment Value', icon: TrendingUp },
    { number: '04', value: '15,000+', label: 'Jobs Created', icon: Building2 },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#0A1628] to-[#0D1F36] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB020] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-px bg-gradient-to-b from-[#00D4FF]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#00D4FF]/30 transition-all duration-500">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-bold text-white/5">{stat.number}</span>
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
                      className="text-4xl font-bold text-white mb-2"
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
        'Positioned in the Sabah-Brunei-Labuan triangle, offering unparalleled access to regional markets.',
    },
    {
      icon: Ship,
      title: 'Deep Water Port',
      description:
        '25m water depth capable of accommodating Very Large Crude Carriers (VLCCs).',
    },
    {
      icon: Zap,
      title: 'Infrastructure Ready',
      description:
        'Complete utilities, power supply, and logistics infrastructure for immediate operations.',
    },
    {
      icon: Award,
      title: 'Tax Incentives',
      description:
        'Attractive investment incentives including tax exemptions and duty-free imports.',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0D1F36] relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeInUp>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-[#00D4FF]">SOGIP</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A world-class industrial ecosystem designed for sustainable energy development
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-[#FFB020] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#0A1628] border border-white/10 rounded-2xl p-8 hover:border-transparent transition-all duration-500 h-full">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#FFB020]/20 flex items-center justify-center mb-6"
                    >
                      <feature.icon className="text-[#00D4FF]" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
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
      title: 'LNG Facility',
      value: '$8.5B',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1709873906965-e3a3c1bd1b94?w=800&q=80',
    },
    {
      title: 'PETRONAS Gas Power Plant',
      value: '$3.2B',
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=800&q=80',
    },
    {
      title: 'SAMUR Ammonia Plant',
      value: '$2.8B',
      status: 'Planning',
      image: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628] relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeInUp>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Anchor <span className="text-[#FFB020]">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Major investments driving economic growth and industrial development
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="inline-block px-3 py-1 bg-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-xs font-semibold mb-4"
                    >
                      {project.status}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-[#FFB020] text-xl font-semibold">{project.value}</p>
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
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all duration-300"
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
    <section ref={ref} className="py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Invest in{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Sabah's Future
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join industry leaders in shaping the energy landscape of Southeast Asia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white text-lg font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
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
