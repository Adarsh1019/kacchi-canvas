import { useEffect, useState } from "react";
import { ChevronDown, BookOpen, Calendar } from "lucide-react";
import heroBiryani from "@/assets/hero-biryani.jpg";

const TITLE_BN = "ঢাকাইয়া কাচ্চি ডাইন";
const TITLE_EN = "Dhakaiya Kacchi Dine";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // bokeh particles
  const bokeh = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-ink texture-jute vignette"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBiryani}
          alt="Authentic Dhakaiya Kacchi Biryani served at DKD Kolkata"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40 scale-110 animate-[scale-in_3s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </div>

      {/* Bokeh particles */}
      <div className="absolute inset-0 pointer-events-none">
        {bokeh.map((i) => {
          const size = 6 + (i % 5) * 8;
          const left = (i * 53) % 100;
          const dur = 14 + (i % 7) * 3;
          const delay = (i * 0.7) % 12;
          return (
            <span
              key={i}
              className="bokeh"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Steam wisps */}
      <svg
        viewBox="0 0 200 200"
        className="absolute left-1/2 -translate-x-1/2 bottom-1/2 w-40 h-40 opacity-50 pointer-events-none"
        fill="none"
      >
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M ${80 + i * 20} 190 Q ${70 + i * 25} ${130 - i * 10}, ${100 + i * 10} ${80 - i * 10} T ${100 + i * 5} 10`}
            stroke="hsl(var(--gold-glow))"
            strokeWidth="2"
            strokeLinecap="round"
            className="steam"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        {/* Logo stamp */}
        <div
          className={`mb-8 inline-flex items-center justify-center h-20 w-20 rounded-full gradient-gold shadow-glow ${
            mounted ? "animate-ink-stamp" : "opacity-0"
          }`}
        >
          <span className="font-display font-black text-4xl text-ink">D</span>
        </div>

        <h1
          className={`font-bangla text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text leading-tight ${
            mounted ? "animate-letter-expand" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {TITLE_BN}
        </h1>

        <h2
          className={`mt-6 font-display text-2xl sm:text-3xl md:text-5xl text-cream ${
            mounted ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          {TITLE_EN}
        </h2>

        <p
          className={`mt-6 max-w-2xl font-body italic text-base sm:text-lg text-cream/70 ${
            mounted ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "1.6s" }}
        >
          Where Dhaka's soul feeds Kolkata's heart — slow-cooked Kacchi Biryani,
          sealed in dum, served with reverence.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 ${
            mounted ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "2s" }}
        >
          <a
            href="#menu"
            className="shimmer inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full gradient-gold text-ink font-ui font-semibold tracking-wide shadow-gold hover:shadow-glow transition"
          >
            <BookOpen className="h-5 w-5" /> Explore Menu
          </a>
          <a
            href="#contact"
            className="shimmer inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full glass-dark text-cream font-ui font-semibold tracking-wide border border-gold/40 hover:border-gold transition"
          >
            <Calendar className="h-5 w-5 text-gold" /> Book Your Table
          </a>
        </div>

        <a
          href="#kitchen"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/80 animate-spoon"
        >
          <ChevronDown className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
}
