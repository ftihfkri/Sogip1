import { getSmoothScroll } from './smoothScroll';

// Scroll through Lenis when active so its internal target stays in sync.
export const scrollToTop = (behavior = 'auto') => {
  const lenis = getSmoothScroll();

  if (lenis) {
    if (behavior === 'smooth') {
      lenis.scrollTo(0, { duration: 0.6, force: true });
    } else {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};

// Scroll to element with offset for fixed header
export const scrollToElement = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
