import { useState } from "react";
import { useReveal } from "./hooks";
import { Sparkles } from "lucide-react";

type Tag = "All Day" | "Friday Only" | "Saturday Only" | "Sat & Sun" | "Special";
type Item = { name: string; price: string; tag?: Tag; note?: string; loved?: boolean };

const data: Record<string, Item[]> = {
  "Signature Dishes": [
    { name: "Mutton Kacchi Biriyani with Jali Kabab", price: "₹350", tag: "All Day", note: "Our soul dish — slow-cooked Dhaka style", loved: true },
    { name: "Chicken Kacchi Biriyani with Jali Kabab", price: "₹300", tag: "All Day", note: "Lighter, but just as royal" },
    { name: "Chicken Roast Polao with Jali Kabab", price: "₹325", tag: "All Day", note: "Aromatic polao, rich chicken roast" },
    { name: "Morog Polao with Egg", price: "₹300", tag: "All Day", note: "Classic Dhakaiya morog polao" },
    { name: "Mutton Tehari", price: "₹350", tag: "Saturday Only", note: "A weekend ritual" },
    { name: "Mutton Vuna Khichuri", price: "₹350", tag: "Friday Only", note: "Friday's comfort plate" },
    { name: "Plain Polao", price: "₹175", tag: "All Day" },
    { name: "Extra Rice", price: "₹75" },
    { name: "Extra Mutton", price: "₹195" },
    { name: "Extra Chicken", price: "₹150" },
    { name: "Extra Egg", price: "₹15" },
  ],
  "Sides": [
    { name: "Shahi Paratha", price: "₹50" },
    { name: "Mutton Kala Vuna (4 pcs)", price: "₹250", note: "Dark, rich, slow-cooked" },
    { name: "Mutton Chui Jhal", price: "₹300", note: "A Bengali signature heat" },
    { name: "Mutton Leg Roast", price: "₹400", tag: "Sat & Sun" },
    { name: "Chicken Roast (¼ chicken)", price: "₹150" },
    { name: "Chicken Vuna (4 pcs)", price: "₹150" },
    { name: "Chicken Jali Kabab (4 pcs)", price: "₹120" },
  ],
  "Desserts & Drinks": [
    { name: "Borhani", price: "₹75", note: "Yogurt-mint digestive — the perfect pairing" },
    { name: "Dhakaiya Firni", price: "₹75", note: "Saffron-rose rice pudding, set in clay" },
    { name: "Packaged Water 500ml", price: "₹15" },
    { name: "Packaged Water 1L", price: "₹30" },
    { name: "Cold Drink", price: "MRP" },
  ],
};

const tabKeys = Object.keys(data);

const tagColor: Record<Tag, string> = {
  "All Day": "bg-gold/15 text-gold border-gold/30",
  "Friday Only": "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  "Saturday Only": "bg-red-500/15 text-red-400 border-red-500/30",
  "Sat & Sun": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "Special": "bg-secondary/30 text-secondary-foreground border-secondary/40",
};

export function Menu() {
  const [tab, setTab] = useState(tabKeys[0]);
  const ref = useReveal();
  const items = data[tab];

  return (
    <section id="menu" className="relative bg-background py-24 md:py-32 texture-jute overflow-hidden">
      <div ref={ref} className="reveal container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-bangla text-gold text-lg mb-3">পূর্ণ আয়োজন</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-4">The Full Spread</h2>
          <p className="font-body italic text-foreground/70">
            Every dish is a promise — no shortcuts, no compromises.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabKeys.map((k) => {
            const active = tab === k;
            return (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative px-5 md:px-7 h-12 rounded-full font-ui text-sm font-semibold tracking-wide transition-all ${
                  active
                    ? "gradient-gold text-ink shadow-gold"
                    : "glass text-foreground/80 hover:text-foreground border border-gold/20"
                }`}
              >
                {k}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <div key={tab} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <article
              key={`${tab}-${it.name}`}
              style={{ animationDelay: `${i * 50}ms` }}
              className="group relative animate-fade-in glass rounded-2xl p-5 hover:shadow-gold transition-all duration-500 hover:-translate-y-1 border-l-4 border-gold/40 hover:border-gold"
            >
              {it.loved && (
                <span className="absolute -top-3 left-5 px-3 py-1 rounded-full gradient-gold text-ink text-[10px] font-ui font-bold tracking-widest uppercase shadow-gold flex items-center gap-1 pulse-glow-gold">
                  <Sparkles className="h-3 w-3" /> Most Loved
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-foreground leading-snug">{it.name}</h3>
                  {it.note && (
                    <p className="mt-1 font-body italic text-sm text-muted-foreground">{it.note}</p>
                  )}
                  {it.tag && (
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full border text-[10px] font-ui font-semibold tracking-widest uppercase ${tagColor[it.tag]}`}>
                      {it.tag}
                    </span>
                  )}
                </div>
                <div className="font-display text-2xl text-gold whitespace-nowrap">{it.price}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center font-body text-sm text-muted-foreground">
          *Prices subject to change. Special items available only on listed days.
        </p>
      </div>
    </section>
  );
}
