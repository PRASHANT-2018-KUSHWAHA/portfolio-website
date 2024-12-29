import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         // Custom light theme colors
         light: {
          background: '#f9fafb',
          primary: '#3b82f6',
          secondary: '#6b7280',
          text: '#1f2937',
        },
        // Custom dark theme colors
        dark: {
          background: '#1f2937',
          primary: '#3b82f6',
          secondary: '#d1d5db',
          text: '#f9fafb',
        },
      },
      animation: {
        'slide-left': 'slideLeft 1s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
