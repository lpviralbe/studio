import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionDuration: {
        'flow': '600ms',
        'flow-long': '800ms',
      },
      transitionTimingFunction: {
        'flow-in-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'flow-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'flow-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "shimmer-slide": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        first: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "20%": {
            transform: "translate(100px, -50px)",
          },
          "40%": {
            transform: "translate(-100px, 50px)",
          },
          "60%": {
            transform: "translate(50px, -100px)",
          },
          "80%": {
            transform: "translate(-50px, 100px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        second: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "20%": {
            transform: "translate(-200px, 100px)",
          },
          "40%": {
            transform: "translate(200px, -100px)",
          },
          "60%": {
            transform: "translate(-100px, 200px)",
          },
          "80%": {
            transform: "translate(100px, -200px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        third: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "20%": {
            transform: "translate(150px, -100px)",
          },
          "40%": {
            transform: "translate(-150px, 100px)",
          },
          "60%": {
            transform: "translate(100px, -150px)",
          },
          "80%": {
            transform: "translate(-100px, 150px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        fourth: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "20%": {
            transform: "translate(-300px, 150px)",
          },
          "40%": {
            transform: "translate(300px, -150px)",
          },
          "60%": {
            transform: "translate(-150px, 300px)",
          },
          "80%": {
            transform: "translate(150px, -300px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        fifth: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "20%": {
            transform: "translate(250px, -150px)",
          },
          "40%": {
            transform: "translate(-250px, 150px)",
          },
          "60%": {
            transform: "translate(150px, -250px)",
          },
          "80%": {
            transform: "translate(-150px, 250px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        first: "first 15s ease infinite",
        second: "second 15s ease infinite",
        third: "third 15s ease infinite",
        fourth: "fourth 15s ease infinite",
        fifth: "fifth 15s ease infinite",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
