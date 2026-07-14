import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export const HorizontalImageScroll = ({ images, direction = 'left' }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? ['0%', '-25%'] : ['-25%', '0%']
  );

  return (
    <div ref={containerRef} className="overflow-hidden py-8 sm:py-12">
      <motion.div
        style={{ x }}
        className="flex gap-4 sm:gap-6"
      >
        {/* Duplicate images for seamless scroll */}
        {[...images, ...images].map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative flex-shrink-0 w-[82vw] max-w-[400px] aspect-[4/3] sm:w-[400px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden group"
          >
            <img
              src={image.url}
              alt={image.title}
              width="800"
              height="600"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{image.title}</h3>
              {image.subtitle && (
                <p className="text-gray-300 text-sm">{image.subtitle}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
