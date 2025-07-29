'use client';

import { HyperText } from '@/shared/ui/hyper-text';
import { Particles } from '@/shared/ui/particles';

export default function Page() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg flex-1">
      <HyperText duration={1500}>wookhyung.</HyperText>
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
