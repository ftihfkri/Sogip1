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
    title: 'SOGDC and Partners Exchange MoUs for Proposed SOGIP Energy Hub',
    date: '13 April 2026',
    category: 'Proposed Development',
    image: 'https://images.unsplash.com/photo-1566221857770-508d35ee6220?w=1200&q=80',
    excerpt: 'SOGDC and strategic partners exchanged MoUs covering a proposed development that includes LNG, ammonia and hydrogen storage, power generation and supporting infrastructure. The project remains at proposal and study stage.',
    link: 'https://sogip.com.my/memorandums-of-understanding-mous-between-sabah-oil-gas-development-corporation-sogdc-and-ea-gibson/',
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
                  alt=""
                  width="1200"
                  height="800"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent lg:bg-gradient-to-r" />
                <div className="absolute left-4 top-4 rounded-full bg-[#0A1628]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
                  Illustrative image
                </div>
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
                  <span className="font-semibold">Read Official Update</span>
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
      title: 'SOGDC and SEDCO Mining Sign Industrial Development MoU',
      date: '10 March 2026',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1775580279270-574c001be3a5?w=800&q=80',
      excerpt: 'The organisations signed an MoU focused on industrial development at SOGIP and SKSIP, including project coordination and investment promotion.',
      link: 'https://sogip.com.my/sogdc-and-sedco-mining-sdn-bhd-mou-signing/',
    },
    {
      title: 'SOGDC Chairman Conducts First Working Visit to SOGIP',
      date: '4 February 2026',
      category: 'Project Update',
      image: 'https://images.unsplash.com/photo-1768564206500-5cddb1fea679?w=800&q=80',
      excerpt: 'Datuk Ir. Shahelmey Yahya visited the Esteel, MOLF, PFLNG 3, SAMUR and Sipitang Utilities project sites to review their progress.',
      link: 'https://sogip.com.my/lawatan-kerja-pertama-pengerusi-sogdc-ke-sogip/',
    },
    {
      title: 'SOGDC Welcomes New Chairman Datuk Ir. Shahelmey Yahya',
      date: '16 January 2026',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&q=80',
      excerpt: 'SOGDC announced the appointment and the chairman’s first official briefing with the company’s senior leadership.',
      link: 'https://sogip.com.my/sogdc-menyambut-pelantikan-pengerusi-baharu-yb-datuk-ir-shahelmey-bin-yahya/',
    },
    {
      title: 'SOGDC Marks SOGIP Streetlight Power-Supply Milestone',
      date: '8 November 2025',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1562892302-97faedd66f1c?w=800&q=80',
      excerpt: 'SOGDC commemorated implementation of the streetlight electricity-supply project and the first anniversary of streetlight activation within SOGIP.',
      link: 'https://sogip.com.my/majlis-makan-malam-sogdc-bersama-pemegang-taruh-2025/',
    },
    {
      title: 'Sabah Formalises 25% Equity Interest in PETRONAS PFLNG 3',
      date: '31 October 2025',
      category: 'Investment',
      image: 'https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=800&q=80',
      excerpt: 'SMJ Energy entered definitive agreements for a 25% interest in the US$3.1 billion, 2.0 MTPA nearshore LNG facility targeted for the second half of 2027.',
      link: 'https://cm.sabah.gov.my/siaran-media/4197',
    },
    {
      title: 'Esteel Enterprise Sabah Phase I Officially Launched',
      date: '30 May 2025',
      category: 'Project Milestone',
      image: 'https://images.unsplash.com/photo-1640621202549-b813eb0a0720?w=800&q=80',
      excerpt: 'SOGDC reported the launch of Phase I of Esteel Enterprise Sabah’s multi-phase green steel development.',
      link: 'https://sogip.com.my/launching-ceremony-of-esteel-enterprise-sabah-sdn-bhd-phase-i/',
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
                      alt=""
                      width="800"
                      height="500"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
                    <div className="absolute bottom-3 right-3 rounded-full bg-[#0A1628]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-300 backdrop-blur-sm">
                      Illustrative image
                    </div>
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
