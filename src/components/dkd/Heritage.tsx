import { useEffect, useState } from "react";
import { Soup, Leaf, ChefHat } from "lucide-react";
import { useReveal, useCountUp } from "./hooks";

const pillars = [
  { icon: Soup, title: "Traditional Handi", text: "Sealed clay pots. Charcoal embers. The way it's been done for 200 years." },
  { icon: Leaf, title: "Whole Spices", text: "No shortcuts. We grind, temper, and bloom every spice in pure ghee." },
  { icon: ChefHat, title: "Recipes Passed Down", text: "Generations of Dhaka kitchen wisdom — guarded, perfected, served." },
];

function Counter({ to, label, suffix = "" }: { to: number; label: string; suffix?: string }) {
  const [start, setStart] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const value = useCountUp(to, 1800, start);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStart(true)),
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <div ref={ref} className="reveal text-center">
      <div className="font-display text-4xl md:text-6xl gradient-text font-black">
        {value}
        {suffix}
      </div>
      <div className="mt-2 font-ui text-xs md:text-sm tracking-widest uppercase text-foreground/60">
        {label}
      </div>
    </div>
  );
}

export function Heritage() {
  const ref = useReveal();
  return (
    <section className="relative py-24 md:py-32 bg-card texture-jute overflow-hidden">
      {/* Alpona border */}
      <svg
        viewBox="0 0 1200 100"
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-12 pointer-events-none opacity-60"
        fill="none"
      >
        <path
          d="M 0 50 Q 100 0 200 50 T 400 50 T 600 50 T 800 50 T 1000 50 T 1200 50"
          stroke="hsl(var(--gold))"
          strokeWidth="1.5"
          className="alpona-stroke"
        />
        <path
          d="M 0 60 Q 150 100 300 60 T 600 60 T 900 60 T 1200 60"
          stroke="hsl(var(--gold))"
          strokeWidth="1"
          opacity="0.6"
          className="alpona-stroke"
        />
      </svg>

      <div ref={ref} className="reveal container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 mt-12">
          <p className="font-bangla text-gold text-lg mb-3">প্রকৃত স্বাদ</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-4">
            Authentic Bengali Soul
          </h2>
          <p className="font-body italic text-foreground/70 leading-relaxed">
            Kacchi Biriyani was born in the royal kitchens of Old Dhaka — a dish of patience,
            precision, and love. We carry that 200-year-old tradition to every plate served in Kolkata.
          </p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mx-auto h-16 w-16 rounded-full gradient-gold grid place-items-center shadow-gold mb-5">
                <p.icon className="h-7 w-7 text-ink" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Counter to={227} suffix="+" label="Happy Diners" />
          <Counter to={20} suffix="+" label="Menu Items" />
          <Counter to={1} label="Soul Recipe" />
          <Counter to={200} suffix="yr" label="of Tradition" />
        </div>
      </div>
    </section>
  );
}
