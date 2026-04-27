import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "./hooks";
import biryani from "@/assets/hero-biryani.jpg";
import chicken from "@/assets/chicken-biryani.jpg";
import handi from "@/assets/handi-fire.jpg";
import spices from "@/assets/spices.jpg";
import gathering from "@/assets/gathering.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import firni from "@/assets/firni.jpg";
import kala from "@/assets/kala-bhuna.jpg";
import borhani from "@/assets/borhani.jpg";

type Item = { src: string; cat: "Food" | "Ambiance" | "Kitchen" | "Events"; caption: string; bn: string };

const items: Item[] = [
  { src: biryani, cat: "Food", caption: "Mutton Kacchi", bn: "মাটন কাচ্চি" },
  { src: interior, cat: "Ambiance", caption: "Brass Lanterns", bn: "পিতলের প্রদীপ" },
  { src: handi, cat: "Kitchen", caption: "The Sealed Handi", bn: "দম বন্ধ হাঁড়ি" },
  { src: gathering, cat: "Events", caption: "Festive Tables", bn: "উৎসবের আসর" },
  { src: chicken, cat: "Food", caption: "Chicken Kacchi", bn: "চিকেন কাচ্চি" },
  { src: spices, cat: "Kitchen", caption: "Whole Spices", bn: "গোটা মশলা" },
  { src: firni, cat: "Food", caption: "Saffron Firni", bn: "জাফরানি ফিরনি" },
  { src: kala, cat: "Food", caption: "Kala Bhuna", bn: "কালা ভুনা" },
  { src: borhani, cat: "Food", caption: "Borhani", bn: "বোরহানি" },
];

const filters = ["All", "Food", "Ambiance", "Kitchen", "Events"] as const;

export function Gallery() {
  const ref = useReveal();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  const nav = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + filtered.length) % filtered.length);
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-card overflow-hidden texture-jute">
      <div ref={ref} className="reveal container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-bangla text-gold text-lg mb-3">আমাদের মুহূর্ত</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-4">Gallery</h2>
          <p className="font-body italic text-foreground/70">
            A peek into our kitchen, our plates, and the smiles around them.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 h-10 rounded-full font-ui text-sm font-semibold transition-all ${
                filter === f
                  ? "gradient-gold text-ink shadow-gold"
                  : "glass text-foreground/80 border border-gold/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((it, i) => (
            <button
              key={`${it.src}-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-gold/20 hover:ring-gold transition-all duration-500 hover:shadow-gold focus:outline-none"
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="font-bangla text-gold text-sm">{it.bn}</p>
                <p className="font-display text-cream text-base">{it.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full glass-dark text-cream"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={() => nav(-1)}
            className="absolute left-4 md:left-10 h-12 w-12 grid place-items-center rounded-full glass-dark text-cream"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => nav(1)}
            className="absolute right-4 md:right-10 h-12 w-12 grid place-items-center rounded-full glass-dark text-cream"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure className="max-w-5xl w-full">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-deep"
            />
            <figcaption className="text-center mt-4">
              <p className="font-bangla text-gold">{filtered[lightbox].bn}</p>
              <p className="font-display text-cream text-xl">{filtered[lightbox].caption}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
