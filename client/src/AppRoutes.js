import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Express from './scenes/express';
import TryOnPage from './scenes/try-onpage';
import GenerateAI from './scenes/generatePage';
import WipeTransition from './WipeTransition'; // Import WipeTransition component
import BodyMeasurement from './scenes/bodyMeasurement';
import TryOnDesignPage from './scenes/designpage';

function AppRoutes() {
  const element = useRoutes([
    { path: '/', element: <Express /> },
    { path: '/try', element: <TryOnPage /> },
    { path: '/generate', element: <GenerateAI /> },
    { path: '/measure', element: <BodyMeasurement/> },
    { path: '/design', element: <TryOnDesignPage/> },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <AnimatePresence mode='wait'>
    {/* <WipeTransition key="wipe-transition" color="purple" /> */}
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
