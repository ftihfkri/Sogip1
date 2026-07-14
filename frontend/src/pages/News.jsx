import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

export const News = () => {
  return (
    <div className="bg-[#0A1628] min-h-[100dvh] pt-20">
      <HeroSection />
      <FeaturedNews />
      <LatestNews />
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random(),
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm font-semibold mb-6">
            Latest Updates
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            News &{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">
              Media
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments, investments, and milestones at SOGIP
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedNews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featured = {
    title: 'RM8.88 Billion Energy Hub Launched at SOGIP',
    date: 'February 2025',
    category: 'Major Investment',
    image: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=1200&q=80',
    excerpt: 'SOGIP officially launches a groundbreaking RM8.88 billion Energy, Oil, and Gas Hub in partnership with Gibson Shipbrokers Ltd, marking a new era for Sabah\'s energy sector.',
    link: 'https://www.thevibes.com/articles/business/104869/sabah-launches-rm8.88-billion-energy-hub',
  };

  return (
    <section ref={ref} className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-[#00D4FF] to-[#FFB020] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#0A1628] border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width="1200"
                  height="800"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-[#FFB020]/20 border border-[#FFB020]/30 rounded-full text-[#FFB020] text-sm font-semibold mb-6 w-fit">
                  {featured.category}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {featured.title}
                </h2>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-6">
                  <Calendar size={16} />
                  <span>{featured.date}</span>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  {featured.excerpt}
                </p>
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center space-x-2 text-[#00D4FF] hover:text-[#FFB020] transition-colors group/link"
                >
                  <span className="font-semibold">Read Full Story</span>
                  <ArrowRight
                    size={20}
                    className="group-hover/link:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LatestNews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const news = [
    {
      title: 'High-Impact SOGIP Investments to Begin Operations in 2026',
      date: 'December 30, 2024',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
      excerpt: 'Chief Minister Hajiji Noor confirms major investments including Esteel\'s green steel plant and Petronas floating LNG will commence operations in 2026.',
      link: 'https://www.thestar.com.my/business/business-news/2024/12/30/high-impact-investments-in-sogip-to-begin-ops-in-2026',
    },
    {
      title: 'RM15.5 Billion Petroleum Refining Plant Construction Begins',
      date: 'April 2025',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1768564206500-5cddb1fea679?w=800&q=80',
      excerpt: 'Petroventure Energy commences construction of 150,000 BPD refinery, expected to create 5,000 jobs and attract USD3.5 billion in FDI.',
      link: 'https://www.sabahoilandgas.com.my/post/new-petroleum-storage-and-refining-plant-in-sipitang-to-bring-rm15-5b-in-investments-create-5-000-j',
    },
    {
      title: 'SOGIP Streetlight Enhancement Project Completed',
      date: 'August 2025',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80',
      excerpt: 'Major infrastructure upgrade enhances safety and operational efficiency for current tenants and future investors.',
      link: 'https://sogip.com.my/',
    },
    {
      title: 'RM29.87 Billion in Total Secured Investments',
      date: 'December 2024',
      category: 'Investment',
      image: 'https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80',
      excerpt: 'SOGIP reaches major milestone with nearly RM30 billion in committed investments across multiple sectors including green steel, LNG, and petrochemicals.',
      link: 'https://www.bernama.com/en/news.php?id=2377573',
    },
    {
      title: 'SOGDC Strengthens Role at SOGCE 2025',
      date: 'January 2025',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=800&q=80',
      excerpt: 'SOGDC highlights SOGIP\'s strategic position at Southeast Asia\'s premier energy conference, attracting international attention.',
      link: 'https://sogip.com.my/sogdc-strengthens-its-strategic-role-at-sogce-2025/',
    },
    {
      title: 'SOGIP Positioned as Southeast Asia Petrochemical Hub',
      date: 'November 2024',
      category: 'Strategic',
      image: 'https://images.unsplash.com/photo-1640621202549-b813eb0a0720?w=800&q=80',
      excerpt: 'Chief Minister envisions SOGIP as the region\'s premier downstream hub for petrochemicals, gas, and petroleum products.',
      link: 'https://international.astroawani.com/malaysia-news/sabah-cm-envisages-sogip-southeast-asia-s-petrochemical-gas-petroleum-downstream-hub-286818',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-[#0D1F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Recent <span className="text-[#00D4FF]">Updates</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#0A1628] border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-500">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="800"
                      height="500"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="px-4 py-2 bg-[#00D4FF] backdrop-blur-md border-2 border-white/30 rounded-full text-white text-xs font-bold shadow-xl shadow-[#00D4FF]/50">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center space-x-2 text-gray-500 text-xs mb-3">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#00D4FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center space-x-2 text-[#00D4FF] text-sm font-semibold group-hover:text-[#FFB020] transition-colors">
                      <span>Read More</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
