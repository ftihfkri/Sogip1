import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, DollarSign, MapPin, TrendingUp, CheckCircle2 } from 'lucide-react';
import { HorizontalImageScroll } from '../components/HorizontalImageScroll';

export const Projects = () => {
  return (
    <div className="bg-[#0A1628] min-h-screen pt-20">
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
    <section ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
            Major Investments
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Anchor{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            $20B+ in committed investments driving SOGIP's transformation into Southeast Asia's premier energy hub
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
      title: 'LNG Facility',
      subtitle: 'State-of-the-art processing',
    },
    {
      url: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=800&q=80',
      title: 'Power Generation',
      subtitle: '600MW capacity',
    },
    {
      url: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
      title: 'Refinery Complex',
      subtitle: '150,000 BPD processing',
    },
    {
      url: 'https://images.unsplash.com/photo-1597334948330-38795f25d05d?w=800&q=80',
      title: 'Deep Water Port',
      subtitle: 'VLCC capable berths',
    },
    {
      url: 'https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80',
      title: 'Marine Facilities',
      subtitle: 'World-class infrastructure',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          World-Class <span className="text-[#00D4FF]">Facilities</span>
        </h2>
      </div>
      <HorizontalImageScroll images={facilityImages} direction="left" />
    </section>
  );
};

const AnchorProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'LNG Facility',
      value: '$8.5B',
      status: 'In Progress',
      completion: '2026',
      location: 'Zone A - LNG Complex',
      description: 'Large-scale liquefied natural gas processing and export facility with capacity for 3.5 million tonnes per annum.',
      highlights: [
        'State-of-the-art LNG processing technology',
        'Export capacity to Asian markets',
        'Integrated storage and loading facilities',
        '1,200+ jobs during construction',
      ],
      image: 'https://images.unsplash.com/photo-1709873906965-e3a3c1bd1b94?w=800&q=80',
    },
    {
      id: 2,
      title: 'PETRONAS Gas Power Plant',
      value: '$3.2B',
      status: 'Operational',
      completion: '2023',
      location: 'Zone D - Utilities Hub',
      description: 'Combined cycle gas power plant providing 600MW of reliable power to SOGIP and surrounding areas.',
      highlights: [
        '600MW generation capacity',
        'High-efficiency combined cycle technology',
        'Reliable power for industrial operations',
        'Reduced carbon emissions',
      ],
      image: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=800&q=80',
    },
    {
      id: 3,
      title: 'Petroventure Refinery',
      value: '$4.1B',
      status: 'In Progress',
      completion: '2027',
      location: 'Zone C - Refinery Area',
      description: 'Modern refinery complex processing 150,000 barrels per day with advanced environmental controls.',
      highlights: [
        '150,000 bpd processing capacity',
        'Advanced refining technology',
        'Multiple product streams',
        'Environmental compliance systems',
      ],
      image: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
    },
    {
      id: 4,
      title: 'SAMUR Ammonia & Urea Plant',
      value: '$2.8B',
      status: 'Planning',
      completion: '2028',
      location: 'Zone B - Petrochemical Complex',
      description: 'Integrated ammonia and urea production facility targeting agricultural and industrial markets.',
      highlights: [
        '1.2M tonnes ammonia per year',
        '1.8M tonnes urea per year',
        'Export-oriented production',
        'Sustainable production methods',
      ],
      image: 'https://images.unsplash.com/photo-1768564206500-5cddb1fea679?w=800&q=80',
    },
    {
      id: 5,
      title: 'Deep Water Jetty Expansion',
      value: '$850M',
      status: 'In Progress',
      completion: '2025',
      location: 'Marine Facilities',
      description: 'Expansion of deep-water berthing facilities to accommodate increased VLCC traffic and cargo volume.',
      highlights: [
        'Additional berths for VLCCs',
        '25m+ water depth maintained',
        'Advanced loading systems',
        'Enhanced safety features',
      ],
      image: 'https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80',
    },
    {
      id: 6,
      title: 'Central Utilities Complex',
      value: '$1.5B',
      status: 'Operational',
      completion: '2024',
      location: 'Zone D - Utilities Hub',
      description: 'Integrated utilities providing water, steam, compressed air, and industrial gases to all facilities.',
      highlights: [
        'Desalination plant - 50,000 m³/day',
        'Industrial water treatment',
        'Steam generation and distribution',
        'Compressed air and nitrogen supply',
      ],
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/70 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div
                    className={`px-4 py-2 backdrop-blur-md border-2 rounded-full text-xs font-bold shadow-xl ${
                      project.status === 'Operational'
                        ? 'bg-green-500/90 border-green-300 text-white shadow-green-500/50'
                        : project.status === 'In Progress'
                        ? 'bg-blue-500/90 border-blue-300 text-white shadow-blue-500/50'
                        : 'bg-amber-500/90 border-amber-300 text-white shadow-amber-500/50'
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-[#FFB020] text-2xl font-bold">{project.value}</div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{project.completion}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1F36] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F36] to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-[#00D4FF]" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-[#FFB020]" />
                        <span>Target: {selectedProject.completion}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Investment Value</div>
                    <div className="text-3xl font-bold text-[#FFB020]">{selectedProject.value}</div>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">{selectedProject.description}</p>

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
    { value: '$20B+', label: 'Total Committed Investment', icon: DollarSign },
    { value: '6', label: 'Major Anchor Projects', icon: TrendingUp },
    { value: '15,000+', label: 'Jobs Created', icon: CheckCircle2 },
    { value: '2028', label: 'Full Park Completion', icon: Calendar },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
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
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            More Projects{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Additional investments in renewable energy, hydrogen production, and advanced manufacturing are in the pipeline
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white text-lg font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300"
          >
            Contact Investment Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
