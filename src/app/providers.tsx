'use client';

import { ProgressProvider } from '@bprogress/next/app';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#799EFF"
      options={{
        showSpinner: false,
      }}
    >
      {children}
    </ProgressProvider>
  );
};
