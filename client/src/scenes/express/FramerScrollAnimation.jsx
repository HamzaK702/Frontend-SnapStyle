import { useEffect } from "react";
import { Card, CardContent, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300
};

const variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ...spring, duration: 0.9 } } // Adjusted duration to make the animation slower
};

const cards = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' }
];

export default function AnimatedCards() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} style={{ height: '100vh', overflow: 'hidden' }}> {/* Hide scrollbar */}
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        initial="hidden"
        animate={controls}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            style={{ width: '70%', margin: '20px 0' }}
            variants={variants}
            initial="hidden" // Delay initial animation of each card
            animate={inView ? 'visible' : 'hidden'} // Start animation only when in view
          >
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
