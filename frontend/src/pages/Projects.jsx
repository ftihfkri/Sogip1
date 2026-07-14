import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, CheckCircle2, X } from 'lucide-react';
import { HorizontalImageScroll } from '../components/HorizontalImageScroll';

export const Projects = () => {
  return (
    <div className="bg-[#0A1628] min-h-[100dvh] pt-20">
      <HeroSection />
      <ImageScrollSection />
      <AnchorProjectsSection />
      <InvestmentStatsSection />
      <UpcomingProjectsSection />
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
            Major Investments
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Anchor{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Verified operating assets, projects under construction, and publicly announced developments at SOGIP
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Image Scroll Section
const ImageScrollSection = () => {
  const facilityImages = [
    {
      url: 'https://images.unsplash.com/photo-1709873906965-e3a3c1bd1b94?w=800&q=80',
      title: 'PETRONAS PFLNG 3',
      subtitle: '2.0 MTPA design capacity',
    },
    {
      url: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=800&q=80',
      title: 'Power Generation',
      subtitle: '52MW Sipitang power plant',
    },
    {
      url: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
      title: 'Petroventure Development',
      subtitle: 'Up to 150,000 BPD announced capacity',
    },
    {
      url: 'https://images.unsplash.com/photo-1597334948330-38795f25d05d?w=800&q=80',
      title: 'SOGIP Port',
      subtitle: 'Phased port development',
    },
    {
      url: 'https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80',
      title: 'SAMUR Complex',
      subtitle: 'Operational since May 2017',
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Development <span className="text-[#00D4FF]">Overview</span>
        </h2>
        <p className="mt-3 text-sm text-gray-500 text-center">Images are illustrative; project details below are linked to official sources.</p>
      </div>
      <HorizontalImageScroll images={facilityImages} direction="left" />
    </section>
  );
};

const AnchorProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'PETRONAS PFLNG 3',
      value: 'US$3.1B',
      status: 'Under Construction',
      timeline: 'Targeted for H2 2027',
      location: 'Nearshore at SOGIP',
      description: 'PETRONAS PFLNG 3 is a nearshore floating LNG facility designed to produce 2.0 million tonnes per annum.',
      highlights: [
        '2.0 MTPA design capacity',
        'Under construction for SOGIP deployment',
        'Expected to commence operations in the second half of 2027',
        'SMJ Energy holds a 25% equity interest',
      ],
      source: 'https://cm.sabah.gov.my/siaran-media/4197',
      image: 'https://images.unsplash.com/photo-1709873906965-e3a3c1bd1b94?w=800&q=80',
    },
    {
      id: 2,
      title: 'Esteel Green Steel Project',
      value: 'Approx. RM31B',
      status: 'Phase I Launched',
      timeline: 'Phased development',
      location: 'SOGIP, Sipitang',
      description: 'Esteel Enterprise Sabah is developing a multi-phase green steel project at SOGIP. Phase I was launched on 30 May 2025.',
      highlights: [
        'Approximately RM31 billion announced overall investment',
        'Phase I launched in May 2025',
        'Uses natural gas as a reducing agent',
        'Designed as an integrated green steel value chain',
      ],
      source: 'https://cm.sabah.gov.my/siaran-media/3324',
      image: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=800&q=80',
    },
    {
      id: 3,
      title: 'Sipitang Power Plant',
      value: 'Approx. RM230M',
      status: 'Under Construction',
      timeline: 'Targeted by end-2026',
      location: 'SOGIP, Sipitang',
      description: 'Sipitang Utilities Sdn Bhd is developing a 52MW power plant to supply electricity to the upcoming nearshore LNG facility.',
      highlights: [
        '52MW generation capacity',
        'Construction reported on schedule in PETRONAS Gas Berhad’s 2025 report',
        'Targeted for completion by the end of 2026',
        'Supports the upcoming Sipitang LNG project',
      ],
      source: 'https://www.petronas.com/pgb/sites/default/files/2026-03/PGB%20Integrated%20Report%202025_1.pdf',
      image: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
    },
    {
      id: 4,
      title: 'SAMUR Fertiliser Complex',
      value: 'Approx. RM4.6B',
      status: 'Operational',
      timeline: 'Commercial since May 2017',
      location: '211-acre site at SOGIP',
      description: 'PETRONAS Chemicals Fertiliser Sabah operates the integrated ammonia and urea complex formerly known as the SAMUR project.',
      highlights: [
        '1.2 MTPA granulated urea capacity',
        '740,000 tonnes per annum liquid ammonia capacity',
        'Commercial operations began in May 2017',
        '25% equity held by Sabah through SMJ Energy',
      ],
      source: 'https://www.petronas.com/pcg/media/media-releases/smj-completes-acquisition-equity-interest-petronas-chemicals-fertiliser-sabah',
      image: 'https://images.unsplash.com/photo-1768564206500-5cddb1fea679?w=800&q=80',
    },
    {
      id: 5,
      title: 'Petroventure Storage & Refinery',
      value: 'RM15.5B announced',
      status: 'Development Announced',
      timeline: 'Completion not publicly confirmed',
      location: '400-acre site at SOGIP',
      description: 'Petroventure Energy announced a petroleum storage and refining development with foreign direct investment projected at US$3.5 billion (RM15.5 billion at announcement).',
      highlights: [
        'Up to 150,000 barrels per day announced refinery capacity',
        'Three million cubic metres announced storage capacity',
        'More than 3,000 projected construction jobs',
        'More than 1,000 projected permanent jobs',
      ],
      source: 'https://cm.sabah.gov.my/siaran-media/2794',
      image: 'https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80',
    },
    {
      id: 6,
      title: 'Integrated Energy Hub Proposal',
      value: 'Value not confirmed',
      status: 'Proposed / MoU Stage',
      timeline: 'Announced April 2026',
      location: 'Approximately 275 acres at SOGIP',
      description: 'SOGDC and strategic partners announced a proposed storage and distribution hub for LNG, ammonia and hydrogen, together with supporting infrastructure.',
      highlights: [
        'Proposed LNG, ammonia and hydrogen storage',
        'Proposed petrochemical infrastructure',
        '400–500MW CCGT power plant feasibility study',
        'Subject to studies and definitive agreements',
      ],
      source: 'https://cm.sabah.gov.my/siaran-media/6705',
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer w-full text-left rounded-2xl"
              aria-label={`View details for ${project.title}`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  width="800"
                  height="500"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/70 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A1628]/75 text-[11px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
                  Illustrative image
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div
                    className={`px-4 py-2 backdrop-blur-md border-2 rounded-full text-xs font-bold shadow-xl ${
                      project.status === 'Operational'
                        ? 'bg-green-500/90 border-green-300 text-white shadow-green-500/50'
                        : project.status === 'Under Construction'
                        ? 'bg-blue-500/90 border-blue-300 text-white shadow-blue-500/50'
                        : 'bg-amber-500/90 border-amber-300 text-white shadow-amber-500/50'
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-[#FFB020] text-2xl font-bold">{project.value}</div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1F36] border border-white/10 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[calc(100dvh-1.5rem)] sm:max-h-[90dvh] overflow-y-auto overscroll-contain"
            >
              <div className="relative aspect-[4/3] sm:aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width="1200"
                  height="675"
                  className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F36] to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-6 sm:right-6 w-11 h-11 bg-[#0A1628]/70 backdrop-blur-sm hover:bg-[#0A1628] rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Close project details"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 id="project-dialog-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-[#00D4FF]" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-[#FFB020]" />
                        <span>Timeline: {selectedProject.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-sm text-gray-400 mb-1">Investment Value</div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFB020]">{selectedProject.value}</div>
                  </div>
                </div>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{selectedProject.description}</p>

                <a
                  href={selectedProject.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mb-6 sm:mb-8 text-sm font-semibold text-[#00D4FF] hover:text-white transition-colors"
                >
                  Read official source →
                </a>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="text-[#00D4FF] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const InvestmentStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '5,539', label: 'Total Area (acres)', icon: MapPin },
    { value: '2.0 MTPA', label: 'PFLNG 3 Design Capacity', icon: TrendingUp },
    { value: '52MW', label: 'Sipitang Power Plant', icon: CheckCircle2 },
    { value: '2017', label: 'SAMUR Commercial Operations', icon: Calendar },
  ];

  return (
    <section ref={ref} className="py-14 sm:py-16 lg:py-20 bg-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#FFB020]/20 flex items-center justify-center">
                <stat.icon className="text-[#00D4FF]" size={32} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UpcomingProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Current Development{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Updates
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto">
            In April 2026, SOGDC and partners announced a proposed integrated energy hub. The proposal remains subject to feasibility work and definitive agreements.
          </p>
          <motion.a
            href="https://cm.sabah.gov.my/siaran-media/6705"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-12 px-7 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white text-base sm:text-lg font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300"
          >
            Read Official Announcement
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
