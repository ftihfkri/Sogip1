import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    scrollToTop('auto');

    const mainContent = document.getElementById('main-content');
    mainContent?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
};
