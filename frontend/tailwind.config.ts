// Path: tailwind.config.ts
import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // Adicione esta linha
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Adicione esta linha
  plugins: [nextui()], // Adicione esta linha
};
export default config;