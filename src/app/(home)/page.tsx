'use client';

import { format } from 'date-fns';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { HyperText } from '@/shared/ui/hyper-text';
import { Particles } from '@/shared/ui/particles';

const HYPER_TEXT_DURATION = 1500;

export default function Page() {
  const [showTime, setShowTime] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(format(new Date(), 'HH:mm:ss'));
      setShowTime(true);
    }, HYPER_TEXT_DURATION + 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showTime) return;

    const interval = setInterval(() => {
      setCurrentTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [showTime]);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg flex-1">
      <motion.div
        animate={showTime ? { y: -12 } : { y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
      >
        <HyperText duration={HYPER_TEXT_DURATION} startOnView>
          wookhyung.
        </HyperText>
      </motion.div>
      <AnimatePresence>
        {showTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0.25, 0.75],
              delay: 0.2,
            }}
            className="text-2xl text-gray-800"
          >
            {currentTime}
          </motion.div>
        )}
      </AnimatePresence>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#000"
        refresh
      />
    </div>
  );
}
