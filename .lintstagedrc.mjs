export default {
  '**/*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx}': ['pnpm prettier'],
  'src/**/*.{js,ts,jsx,tsx}': ['pnpm eslint:fix'],
};
