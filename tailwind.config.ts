import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          50: "#FBF3DA",
          100: "#F7E7B4",
          200: "#F2CB57",
          300: "#E8C35A",
          400: "#D9B64E",
          500: "#C39B32",
          600: "#A8801F",
          700: "#8C6418",
          800: "#6B4B12",
          900: "#43300C",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          soft: "#141414",
          card: "#171717",
          line: "#262626",
        },
        brandgreen: "#23A60F",
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        thin: ["MontserratArtesanal", "Montserrat", "sans-serif"],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #D9B64E, transparent)",
        "gold-grad": "linear-gradient(135deg, #8C6418 0%, #F2CB57 25%, #FBF3DA 45%, #D9B64E 65%, #8C6418 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shiny: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        shimmer: {
          "0%": { transform: "translateX(-130%) skewX(-20deg)" },
          "60%,100%": { transform: "translateX(320%) skewX(-20deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.14)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shiny: "shiny 4s linear infinite",
        shimmer: "shimmer 3.2s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "marquee-x": "marquee-x 32s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "slow-zoom": "slow-zoom 26s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
