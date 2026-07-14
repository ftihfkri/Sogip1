// Smooth scroll to top utility
export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior: behavior
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
