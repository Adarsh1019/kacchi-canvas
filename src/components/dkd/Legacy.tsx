import { Heart, Leaf, Clock, Users } from "lucide-react";
import { useReveal } from "./hooks";

const values = [
  { icon: Users, label: "LGBTQ+ Friendly Space", grad: true },
  { icon: Leaf, label: "Fresh Ingredients Daily" },
  { icon: Clock, label: "Slow-Cooked with Patience" },
  { icon: Heart, label: "Made with Love" },
];

export function Legacy() {
  const ref = useReveal();
  return (
    <section id="legacy" className="relative py-24 md:py-32 bg-background texture-jute overflow-hidden">
      <div ref={ref} className="reveal container mx-auto px-4 max-w-4xl relative">
        <div className="text-center mb-12">
          <p className="font-bangla text-gold text-lg mb-3">আমাদের গল্প</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text">A Legacy Sealed in Dum</h2>
        </div>

        <article className="glass rounded-3xl p-8 md:p-14 shadow-deep">
          <p className="drop-cap font-body text-lg md:text-xl leading-relaxed text-foreground/90">
            Dhakaiya Kacchi Dine was born from a simple obsession — to bring the purest, most
            authentic Kacchi Biriyani from the lanes of Old Dhaka to the heart of Kolkata.
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-foreground/80 italic">
            Every dish we serve is a promise: no shortcuts, no compromises. Just tradition,
            technique, and taste — sealed in a clay handi, opened at your table.
          </p>

          <div className="reveal-stagger mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <div
                key={v.label}
                className={`flex flex-col items-center text-center gap-3 p-5 rounded-2xl border ${
                  v.grad
                    ? "border-transparent bg-gradient-to-br from-pink-500/10 via-yellow-400/10 to-blue-500/10 [background-clip:padding-box]"
                    : "border-gold/20 bg-gold/5"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-full grid place-items-center ${
                    v.grad
                      ? "bg-gradient-to-tr from-red-500 via-yellow-400 to-purple-500"
                      : "gradient-gold"
                  }`}
                >
                  <v.icon className="h-5 w-5 text-ink" />
                </div>
                <p className="font-ui text-xs md:text-sm font-semibold text-foreground">{v.label}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
