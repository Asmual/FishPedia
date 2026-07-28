/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Background Colors
          bg: '#020617',        // slate-950
          card: '#0f172a',      // slate-900
          
          accent: '#22d3ee',    // cyan-400
          hover: '#67e8f9',     // cyan-300
          
          // Text Colors
          textPrimary: '#f8fafc',   // slate-50
          textSecondary: '#cbd5e1', // slate-300
          textMuted: '#94a3b8',     // slate-400
          
          // Border & Overlay
          border: 'rgba(34, 211, 238, 0.2)', // cyan border overlay
          
          // Danger / Alert
          danger: '#f87171',
        },
      },
    },
  },
  plugins: [],
};