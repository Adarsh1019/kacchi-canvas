import { Utensils, ShoppingBag, Truck, PartyPopper, Users, Moon } from "lucide-react";
import { useReveal } from "./hooks";
import gathering from "@/assets/gathering.jpg";

const occasions = [
  { icon: PartyPopper, title: "Family Celebrations", desc: "Birthdays, anniversaries, quiet Sunday afternoons." },
  { icon: Users, title: "Friends & Hangouts", desc: "Long tables, longer stories, full plates." },
  { icon: Moon, title: "Eid & Festivals", desc: "From iftaar to dawat — we're your dastarkhwan." },
];

const services = [
  { icon: Utensils, label: "Dine-In" },
  { icon: ShoppingBag, label: "Takeaway" },
  { icon: Truck, label: "No-Contact Delivery" },
];

export function Gathering() {
  const ref = useReveal();
  return (
    <section className="relative py-24 md:py-32 bg-ink overflow-hidden texture-jute">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={gathering}
          alt="Festive Bengali gathering"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      {/* Bokeh */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="bokeh"
            style={{
              width: 8 + (i % 4) * 6,
              height: 8 + (i % 4) * 6,
              left: `${(i * 47) % 100}%`,
              animationDuration: `${16 + (i % 5) * 4}s`,
              animationDelay: `${(i * 1.3) % 10}s`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="reveal container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-bangla text-gold text-lg mb-3">আনন্দের আসর</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-4">
            The Table is Set
          </h2>
          <p className="font-body italic text-cream/70 leading-relaxed">
            Some meals feed the stomach. Dhakaiya meals feed the soul. Whether it's Eid, a birthday,
            a reunion, or just a Tuesday craving — our table is always ready.
          </p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-6 mb-16">
          {occasions.map((o) => (
            <div
              key={o.title}
              className="glass-dark rounded-2xl p-8 text-center hover:shadow-glow hover:-rotate-1 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mx-auto h-16 w-16 rounded-full gradient-gold grid place-items-center shadow-gold mb-5">
                <o.icon className="h-7 w-7 text-ink" />
              </div>
              <h3 className="font-display text-xl text-cream mb-2">{o.title}</h3>
              <p className="font-body text-sm text-cream/60">{o.desc}</p>
            </div>
          ))}
        </div>

        {/* Takeaway path */}
        <div className="max-w-3xl mx-auto mb-12 px-4">
          <svg viewBox="0 0 600 80" className="w-full h-20" fill="none">
            <path
              d="M 30 40 Q 200 -20, 300 40 T 570 40"
              stroke="hsl(var(--gold))"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="alpona-stroke"
            />
            <circle cx="30" cy="40" r="14" fill="hsl(var(--gold))" />
            <circle cx="300" cy="40" r="10" fill="hsl(var(--gold))" opacity="0.7" />
            <circle cx="570" cy="40" r="14" fill="hsl(var(--gold))" />
            <text x="30" y="78" textAnchor="middle" fontSize="11" fill="hsl(var(--cream))" fontFamily="DM Sans">Restaurant</text>
            <text x="300" y="78" textAnchor="middle" fontSize="11" fill="hsl(var(--cream))" fontFamily="DM Sans">Packed</text>
            <text x="570" y="78" textAnchor="middle" fontSize="11" fill="hsl(var(--cream))" fontFamily="DM Sans">Home</text>
          </svg>
        </div>

        <div className="reveal-stagger flex flex-wrap justify-center gap-4">
          {services.map((s) => (
            <div
              key={s.label}
              className="glass-dark px-6 h-14 rounded-full flex items-center gap-3 border border-gold/30"
            >
              <s.icon className="h-5 w-5 text-gold" />
              <span className="font-ui text-sm font-semibold text-cream tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
