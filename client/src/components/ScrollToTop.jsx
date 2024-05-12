 // ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Destructure pathname from the location object

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component does not render anything
};

export default ScrollToTop;
