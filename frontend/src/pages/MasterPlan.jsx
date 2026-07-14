import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Droplet, Zap, Package, Building2, Ship } from 'lucide-react';

export const MasterPlan = () => {
  return (
    <div className="bg-[#0A1628] min-h-screen pt-20">
      <HeroSection />
      <InteractiveMapSection />
      <ZonesSection />
      <LandAvailabilitySection />
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
            Master Plan
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Integrated Industrial{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            4,500+ acres strategically zoned for oil and gas operations, petrochemical facilities,
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

  const zones = [
    {
      id: 1,
      name: 'LNG Complex',
      area: '800 acres',
      status: 'In Development',
      color: '#00D4FF',
      x: '15%',
      y: '20%',
    },
    {
      id: 2,
      name: 'Petrochemical Zone',
      area: '1,200 acres',
      status: 'Available',
      color: '#FFB020',
      x: '45%',
      y: '25%',
    },
    {
      id: 3,
      name: 'Refinery Area',
      area: '600 acres',
      status: 'Planning',
      color: '#00D4FF',
      x: '70%',
      y: '30%',
    },
    {
      id: 4,
      name: 'Deep Water Jetty',
      area: '200 acres',
      status: 'Operational',
      color: '#FFB020',
      x: '30%',
      y: '65%',
    },
    {
      id: 5,
      name: 'Utilities Hub',
      area: '400 acres',
      status: 'Operational',
      color: '#00D4FF',
      x: '60%',
      y: '70%',
    },
    {
      id: 6,
      name: 'Support Services',
      area: '500 acres',
      status: 'Available',
      color: '#FFB020',
      x: '80%',
      y: '65%',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="text-[#00D4FF]">Site Map</span>
          </h2>
          <p className="text-xl text-gray-400">
            Click on zones to explore details
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0A1628] border-2 border-white/10 rounded-3xl p-8 mb-12 overflow-hidden"
        >
          {/* Map Background */}
          <div className="aspect-video relative bg-gradient-to-br from-[#0D1F36] to-[#0A1628] rounded-2xl overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />
            </div>

            {/* Coastline simulation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
              <path
                d="M 0 300 Q 200 280 400 320 T 800 300 L 800 450 L 0 450 Z"
                fill="url(#water-gradient)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="water-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Zone Markers */}
            {zones.map((zone) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + zone.id * 0.1 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedZone(zone)}
                className="absolute cursor-pointer group"
                style={{ left: zone.x, top: zone.y }}
              >
                <div className="relative">
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: zone.color }}
                  />
                  {/* Marker */}
                  <div
                    className="w-8 h-8 rounded-full border-4 border-[#0A1628] shadow-lg shadow-black/50 group-hover:border-white transition-colors"
                    style={{ backgroundColor: zone.color }}
                  />
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-[#0A1628]/95 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="text-white text-xs font-semibold">{zone.name}</div>
                  <div className="text-gray-400 text-xs">{zone.area}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#00D4FF]" />
              <span className="text-sm text-gray-400">Active Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FFB020]" />
              <span className="text-sm text-gray-400">Available Plots</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-gray-400">Operational</span>
            </div>
          </div>
        </motion.div>

        {/* Selected Zone Details */}
        {selectedZone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#00D4FF]/10 to-[#FFB020]/10 border border-white/20 rounded-2xl p-8"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedZone.name}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-400">Area: <span className="text-white font-semibold">{selectedZone.area}</span></span>
                  <span className="px-3 py-1 bg-[#00D4FF]/20 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-xs font-semibold">
                    {selectedZone.status}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedZone(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-400">
              Strategically positioned for optimal operations with access to utilities, transportation, and deep-water facilities.
            </p>
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
    },
    {
      icon: Droplet,
      name: 'Petrochemical Complex',
      description: 'Refinery, ammonia, urea, and downstream petrochemicals',
      area: '1,200+ acres',
    },
    {
      icon: Ship,
      name: 'Marine Facilities',
      description: 'Deep-water jetty, storage terminals, and logistics',
      area: '400+ acres',
    },
    {
      icon: Zap,
      name: 'Utilities & Power',
      description: 'Power generation, water treatment, and distribution',
      area: '400+ acres',
    },
    {
      icon: Package,
      name: 'Storage & Logistics',
      description: 'Tank farms, warehousing, and distribution centers',
      area: '600+ acres',
    },
    {
      icon: Building2,
      name: 'Support Services',
      description: 'Administration, maintenance, and workforce facilities',
      area: '500+ acres',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-[#00D4FF]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A1628] border border-white/10 rounded-2xl p-8 h-full hover:border-[#00D4FF]/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <zone.icon className="text-[#00D4FF]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{zone.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{zone.description}</p>
                <div className="text-[#FFB020] font-semibold text-sm">{zone.area}</div>
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
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0D1F36] to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#00D4FF]/10 to-[#FFB020]/10 border border-white/20 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
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
        </motion.div>
      </div>
    </section>
  );
};
