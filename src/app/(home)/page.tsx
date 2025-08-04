'use client';

import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { ClockIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { HyperText } from '@/shared/ui/hyper-text';
import { Particles } from '@/shared/ui/particles';

const HYPER_TEXT_DURATION = 1500;

export default function Page() {
  const [showTime, setShowTime] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
      setShowTime(true);
    }, HYPER_TEXT_DURATION + 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
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
          wookhyung
        </HyperText>
      </motion.div>
      <AnimatePresence>
        {showTime && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0.25, 0.75],
              delay: 0.2,
            }}
          >
            <ClockIcon />
            <NumberFlowGroup>
              <div
                style={{
                  fontVariantNumeric: 'tabular-nums',
                }}
                className="text-2xl flex items-baseline font-semibold text-gray-800"
              >
                <NumberFlow
                  value={currentTime.hours}
                  format={{ minimumIntegerDigits: 2 }}
                />
                <NumberFlow
                  prefix=":"
                  value={currentTime.minutes}
                  digits={{ 1: { max: 5 } }}
                  format={{ minimumIntegerDigits: 2 }}
                />
                <NumberFlow
                  prefix=":"
                  value={currentTime.seconds}
                  digits={{ 1: { max: 5 } }}
                  format={{ minimumIntegerDigits: 2 }}
                />
              </div>
            </NumberFlowGroup>
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
