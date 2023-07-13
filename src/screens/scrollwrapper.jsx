import React, { useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

function ScrollWrapper({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -window.innerHeight]);

  useEffect(() => {
    yRange.onChange((y) => {
      window.scrollTo(0, -y);
    });
  }, [yRange]);

  return (
    <motion.div style={{ y: yRange }}>
      {children}
    </motion.div>
  );
}

export default ScrollWrapper
