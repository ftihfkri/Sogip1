import Lenis from 'lenis';

let lenisInstance = null;
let animationFrameId = null;

export const initSmoothScroll = () => {
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenisInstance = lenis;

  function raf(time) {
    if (!lenisInstance) return;
    lenisInstance.raf(time);
    animationFrameId = requestAnimationFrame(raf);
  }

  animationFrameId = requestAnimationFrame(raf);

  return lenisInstance;
};

export const getSmoothScroll = () => lenisInstance;

export const destroySmoothScroll = () => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  lenisInstance?.destroy();
  animationFrameId = null;
  lenisInstance = null;
};
