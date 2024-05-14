import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Express from './scenes/express';
import TryOnPage from './scenes/try-onpage';
import WipeTransition from './WipeTransition'; // Import WipeTransition component

function AppRoutes() {
  const element = useRoutes([
    { path: '/', element: <Express /> },
    { path: '/try', element: <TryOnPage /> },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <AnimatePresence mode='wait'>
    <WipeTransition key="wipe-transition" color="purple" />
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={{
          initial: { opacity: 0 },
          in: { opacity: 1 },
          out: { opacity: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        {element}
      </motion.div>
      
    </AnimatePresence>
  );
}

export default AppRoutes;
