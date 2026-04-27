import { Flame, Soup, Hourglass } from "lucide-react";
import { useReveal } from "./hooks";
import handi from "@/assets/handi-fire.jpg";
import spices from "@/assets/spices.jpg";

const panels = [
  {
    icon: Flame,
    title: "The Awakening",
    bn: "মশলার গান",
    text: "Whole spices crackle in pure ghee — cardamom, cinnamon, mace, saffron. The kitchen breathes.",
    img: spices,
  },
  {
    icon: Soup,
    title: "The Sealing",
    bn: "দম বন্ধ",
    text: "Mutton, soaked overnight in yogurt and spice, layered with fragrant rice. The handi is sealed with dough.",
    img: handi,
  },
  {
    icon: Hourglass,
    title: "The Patience",
    bn: "ধৈর্যের রান্না",
    text: "Slow dum on charcoal embers. Time becomes the most important ingredient. Hours pass. Magic happens.",
    img: handi,
  },
];

export function Kitchen() {
  const ref = useReveal();
  return (
    <section
      id="kitchen"
      className="relative py-24 md:py-32 bg-ink texture-jute overflow-hidden"
    >
      {/* Fire wash backdrop */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, hsl(14 100% 27% / 0.4), hsl(32 92% 43% / 0.3), hsl(0 75% 30% / 0.4))",
          backgroundSize: "200% 200%",
          animation: "fire-flicker 8s ease-in-out infinite",
        }}
      />
      <div ref={ref} className="reveal container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-bangla text-gold text-lg mb-3">পর্দার পেছনে</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-4">
            Behind The Curtain
          </h2>
          <p className="font-body italic text-cream/70 leading-relaxed">
            Every morning at DKD, before the first guest arrives, the kitchen wakes up.
            Whole spices crackle in ghee. Mutton soaks in yogurt and saffron.
            The handi is sealed. The dum begins.
          </p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-6 md:gap-8">
          {panels.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-2xl overflow-hidden glass-dark hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-full gradient-gold grid place-items-center shadow-gold">
                  <p.icon className="h-5 w-5 text-ink" />
                </div>
              </div>
              <div className="p-6">
                <p className="font-bangla text-gold text-sm mb-1">{p.bn}</p>
                <h3 className="font-display text-2xl text-cream mb-2">{p.title}</h3>
                <p className="font-body text-cream/70 text-sm leading-relaxed">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
