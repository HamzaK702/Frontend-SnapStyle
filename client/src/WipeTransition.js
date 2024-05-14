import React from 'react';
import { motion } from 'framer-motion';

const WipeTransition = ({ color = 'purple' }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '-100%' }}
      exit={{ x: ['-100%', '0%', '100%'] }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '130%',
        height: '100%',
        backgroundColor: color,
        zIndex: 50,
      }}
    />
  );
};

export default WipeTransition;
