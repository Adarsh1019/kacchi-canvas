import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: "hsl(var(--gold))",
        "gold-glow": "hsl(var(--gold-glow))",
        saffron: "hsl(var(--saffron))",
        brick: "hsl(var(--brick))",
        parchment: "hsl(var(--parchment))",
        cream: "hsl(var(--cream))",
        forest: "hsl(var(--forest))",
        charcoal: "hsl(var(--charcoal))",
        ink: "hsl(var(--ink))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-gold": "var(--gradient-gold)",
        "gradient-fire": "var(--gradient-fire)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-spotlight": "var(--gradient-spotlight)",
      },
      boxShadow: {
        gold: "var(--shadow-gold)",
        glow: "var(--shadow-glow)",
        deep: "var(--shadow-deep)",
        glass: "var(--shadow-glass)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.92)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "letter-expand": { "0%": { letterSpacing: "0.05em", opacity: "0" }, "100%": { letterSpacing: "0.25em", opacity: "1" } },
        "ink-stamp": { "0%": { transform: "scale(2) rotate(-8deg)", opacity: "0", filter: "blur(8px)" }, "60%": { transform: "scale(0.95) rotate(0)", opacity: "1", filter: "blur(0)" }, "100%": { transform: "scale(1)" } },
        "bounce-in": { "0%": { transform: "scale(0.3)", opacity: "0" }, "60%": { transform: "scale(1.08)" }, "100%": { transform: "scale(1)", opacity: "1" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "letter-expand": "letter-expand 1.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        "ink-stamp": "ink-stamp 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
        "bounce-in": "bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "spoon": "spoon-bounce 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
