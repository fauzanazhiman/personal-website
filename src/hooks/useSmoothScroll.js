import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useSmoothScroll = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollEl = document.querySelector('#main-container');

      const scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      return () => {
        if (scroll) scroll.destroy(); // Clean up on component unmount
      };
    }
  }, []);
};

export default useSmoothScroll;
