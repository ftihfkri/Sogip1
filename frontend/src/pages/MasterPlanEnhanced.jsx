import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Factory, Droplet, Zap, Package, Building2, Ship, MapPin, X } from 'lucide-react';

export const MasterPlan = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-[#0A1628] min-h-screen pt-20">
      <HeroSection heroRef={heroRef} y={y} opacity={opacity} />
      <InteractiveMapSection />
      <ZonesSection />
      <LandAvailabilitySection />
    </div>
  );
};

const HeroSection = ({ heroRef, y, opacity }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={heroRef} className="relative py-32 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6"
          >
            Master Plan
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Integrated Industrial{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#FFB020] to-[#00D4FF] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            5,539 acres strategically zoned for oil and gas operations, petrochemical facilities,
            and supporting infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const InteractiveMapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedZone, setSelectedZone] = useState(null);
  const [hoveredZone, setHoveredZone] = useState(null);

  const zones = [
    {
      id: 1,
      name: 'LNG Complex',
      area: '800 acres',
      status: 'In Development',
      statusColor: '#00D4FF',
      color: '#00D4FF',
      x: '15%',
      y: '20%',
      description: 'State-of-the-art LNG processing and export facility with 3.5 MTPA capacity',
      investment: 'RM8.5B',
      completion: '2026',
      features: ['LNG Processing', 'Export Terminal', 'Storage Facilities', 'Deep-water Berth'],
    },
    {
      id: 2,
      name: 'Petrochemical Zone',
      area: '1,200 acres',
      status: 'Available',
      statusColor: '#FFB020',
      color: '#FFB020',
      x: '45%',
      y: '25%',
      description: 'Dedicated zone for downstream petrochemical production and processing',
      investment: 'RM6B+',
      completion: '2027-2028',
      features: ['Refinery', 'Petrochemical Plants', 'Chemical Storage', 'Processing Units'],
    },
    {
      id: 3,
      name: 'Green Steel Plant',
      area: '600 acres',
      status: 'Under Construction',
      statusColor: '#4ADE80',
      color: '#4ADE80',
      x: '70%',
      y: '30%',
      description: 'Esteel Enterprise green steel manufacturing facility',
      investment: 'RM20B',
      completion: '2026',
      features: ['Direct Reduced Iron', 'Electric Arc Furnace', 'Green Technology', 'Export Hub'],
    },
    {
      id: 4,
      name: 'Deep Water Jetty',
      area: '200 acres',
      status: 'Operational',
      statusColor: '#10B981',
      color: '#10B981',
      x: '30%',
      y: '65%',
      description: '25m water depth capable of accommodating VLCCs',
      investment: 'RM850M',
      completion: 'Operational',
      features: ['VLCC Berths', 'Loading Facilities', '24/7 Operations', 'Modern Infrastructure'],
    },
    {
      id: 5,
      name: 'Utilities Hub',
      area: '400 acres',
      status: 'Operational',
      statusColor: '#10B981',
      color: '#10B981',
      x: '60%',
      y: '70%',
      description: 'Central utilities providing power, water, and industrial gases',
      investment: 'RM1.5B',
      completion: '2024',
      features: ['Power Generation', 'Water Treatment', 'Gas Supply', 'Steam Generation'],
    },
    {
      id: 6,
      name: 'Support Services',
      area: '500 acres',
      status: 'Available',
      statusColor: '#FFB020',
      color: '#FFB020',
      x: '80%',
      y: '65%',
      description: 'Administrative, maintenance, and workforce facilities',
      investment: 'TBD',
      completion: '2026-2027',
      features: ['Admin Buildings', 'Maintenance Hub', 'Worker Facilities', 'Training Center'],
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36] relative">
      {/* Floating background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="text-[#00D4FF]">Site Map</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            <strong>Click on the numbered zones below</strong> to explore detailed information about each development area
          </p>
          <p className="text-base text-gray-400 max-w-3xl mx-auto mb-6">
            SOGIP spans 5,539 acres with 6 specialized zones for LNG, petrochemical, refinery, utilities, and support facilities
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#FFB020] text-base font-semibold mt-4 flex items-center justify-center space-x-2"
          >
            <span>👆</span>
            <span>Click any numbered circle below for zone details</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0A1628]/50 backdrop-blur-sm border-2 border-[#00D4FF]/20 rounded-3xl p-8 mb-12 overflow-hidden shadow-2xl shadow-[#00D4FF]/10"
        >
          {/* Map Background */}
          <div className="aspect-video relative bg-gradient-to-br from-[#0D1F36] to-[#0A1628] rounded-2xl overflow-hidden">
            {/* Animated Grid */}
            <motion.div
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />
            </motion.div>

            {/* Coastline */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
              <defs>
                <linearGradient id="water-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M 0 300 Q 200 280 400 320 T 800 300 L 800 450 L 0 450 Z"
                fill="url(#water-gradient)"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>

            {/* Zone Markers */}
            {zones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                onHoverStart={() => setHoveredZone(zone)}
                onHoverEnd={() => setHoveredZone(null)}
                onClick={() => setSelectedZone(zone)}
                className="absolute cursor-pointer group"
                style={{ left: zone.x, top: zone.y, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative">
                  {/* Pulse rings */}
                  <motion.div
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: zone.color }}
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 + index * 0.3 }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: zone.color }}
                  />
                  
                  {/* Main marker - STATIC NUMBER, NO ROTATION */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative w-16 h-16 rounded-full border-4 border-[#0A1628] shadow-2xl flex items-center justify-center cursor-pointer"
                    style={{ 
                      backgroundColor: zone.color,
                      boxShadow: `0 0 30px ${zone.color}80, 0 0 60px ${zone.color}40`,
                    }}
                  >
                    {/* STATIC NUMBER - NO ANIMATION */}
                    <div className="text-white font-bold text-xl">
                      {zone.id}
                    </div>
                  </motion.div>

                  {/* Hover tooltip */}
                  {(hoveredZone?.id === zone.id || selectedZone?.id === zone.id) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -80, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
                    >
                      <div className="bg-[#0A1628]/95 backdrop-blur-xl border-2 border-white/20 rounded-xl px-4 py-3 whitespace-nowrap shadow-2xl">
                        <div className="text-white text-sm font-bold mb-1">{zone.name}</div>
                        <div className="text-gray-400 text-xs mb-1">{zone.area}</div>
                        <div 
                          className="inline-block px-2 py-1 rounded-full text-xs font-semibold"
                          style={{ 
                            backgroundColor: `${zone.statusColor}20`,
                            color: zone.statusColor,
                            border: `1px solid ${zone.statusColor}40`,
                          }}
                        >
                          {zone.status}
                        </div>
                      </div>
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid rgba(255, 255, 255, 0.2)',
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { color: '#4ADE80', label: 'Under Construction' },
              { color: '#00D4FF', label: 'In Development' },
              { color: '#FFB020', label: 'Available' },
              { color: '#10B981', label: 'Operational' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}60`,
                  }} 
                />
                <span className="text-sm text-gray-400">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zone Quick Reference List - NEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-[#0A1628]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Zone Quick Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((zone) => (
              <motion.button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all text-left group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-lg"
                  style={{ 
                    backgroundColor: zone.color,
                    boxShadow: `0 0 20px ${zone.color}40`,
                  }}
                >
                  {zone.id}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold mb-1 group-hover:text-[#00D4FF] transition-colors">
                    {zone.name}
                  </h4>
                  <p className="text-gray-400 text-xs mb-1">{zone.area}</p>
                  <div
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${zone.statusColor}20`,
                      color: zone.statusColor,
                      border: `1px solid ${zone.statusColor}40`,
                    }}
                  >
                    {zone.status}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            💡 Click any zone to view detailed information including investment value, completion timeline, and key features
          </p>
        </motion.div>

        {/* Zone Detail Modal */}
        {selectedZone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedZone(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#0D1F36] to-[#0A1628] border-2 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              style={{ borderColor: selectedZone.color }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedZone(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Header with glow */}
              <div className="relative p-8 pb-6 overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                  style={{ backgroundColor: selectedZone.color }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    style={{ 
                      backgroundColor: `${selectedZone.statusColor}20`,
                      color: selectedZone.statusColor,
                      border: `2px solid ${selectedZone.statusColor}40`,
                    }}
                  >
                    {selectedZone.status}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">{selectedZone.name}</h2>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin size={18} style={{ color: selectedZone.color }} />
                      <span>{selectedZone.area}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedZone.color }} />
                      <span>Investment: <strong className="text-[#FFB020]">{selectedZone.investment}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span>⏰</span>
                      <span>Completion: <strong className="text-[#00D4FF]">{selectedZone.completion}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedZone.description}
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedZone.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: selectedZone.color }}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ZonesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const zoneDetails = [
    {
      icon: Factory,
      name: 'LNG & Gas Processing',
      description: 'Large-scale LNG facilities and gas processing plants',
      area: '800+ acres',
      color: '#00D4FF',
    },
    {
      icon: Droplet,
      name: 'Petrochemical Complex',
      description: 'Refinery, ammonia, urea, and downstream petrochemicals',
      area: '1,200+ acres',
      color: '#FFB020',
    },
    {
      icon: Ship,
      name: 'Marine Facilities',
      description: 'Deep-water jetty, storage terminals, and logistics',
      area: '400+ acres',
      color: '#4ADE80',
    },
    {
      icon: Zap,
      name: 'Utilities & Power',
      description: 'Power generation, water treatment, and distribution',
      area: '400+ acres',
      color: '#A78BFA',
    },
    {
      icon: Package,
      name: 'Storage & Logistics',
      description: 'Tank farms, warehousing, and distribution centers',
      area: '600+ acres',
      color: '#FB923C',
    },
    {
      icon: Building2,
      name: 'Support Services',
      description: 'Administration, maintenance, and workforce facilities',
      area: '500+ acres',
      color: '#60A5FA',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0D1F36] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00D4FF]/5 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Functional <span className="text-[#FFB020]">Zones</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Purpose-designed zones for integrated operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zoneDetails.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${zone.color}40, transparent)` }}
              />
              <div className="relative bg-[#0A1628]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${zone.color}30, ${zone.color}10)`,
                    boxShadow: `0 10px 30px ${zone.color}20`,
                  }}
                >
                  <zone.icon size={32} style={{ color: zone.color }} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{zone.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{zone.description}</p>
                <div 
                  className="text-sm font-semibold"
                  style={{ color: zone.color }}
                >
                  {zone.area}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandAvailabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628] relative overflow-hidden">
      {/* Animated orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/20 via-[#FFB020]/20 to-[#00D4FF]/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-[#00D4FF]/10 to-[#FFB020]/10 border-2 border-white/20 rounded-3xl p-12 text-center backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-8 right-8 w-20 h-20 border-4 border-[#00D4FF]/30 border-t-[#00D4FF] rounded-full"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#FFB020] to-[#00D4FF] bg-clip-text text-transparent">
                Land Parcel
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Multiple plots available across all zones with flexible lease terms and competitive rates
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white text-lg font-semibold rounded-lg shadow-2xl shadow-[#00D4FF]/30 hover:shadow-[#00D4FF]/50 transition-all duration-300"
            >
              Contact Investment Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
