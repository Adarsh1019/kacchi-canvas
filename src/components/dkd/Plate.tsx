import { useReveal } from "./hooks";
import hero from "@/assets/hero-biryani.jpg";

export function Plate() {
  const ref = useReveal();
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden texture-jute">
      {/* Spotlight */}
      <div className="absolute inset-0 bg-gradient-spotlight opacity-60 pointer-events-none" />
      <div ref={ref} className="reveal container mx-auto px-4 text-center relative">
        <p className="font-bangla text-gold text-lg mb-3">প্লেটের গৌরব</p>
        <h2 className="font-display text-4xl md:text-6xl gradient-text">Glory of the Plate</h2>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Steam */}
          <svg
            viewBox="0 0 200 100"
            className="absolute left-1/2 -translate-x-1/2 -top-16 w-40 h-24 opacity-60 pointer-events-none"
            fill="none"
          >
            {[0, 1, 2].map((i) => (
              <path
                key={i}
                d={`M ${80 + i * 20} 100 Q ${70 + i * 25} 60, ${100 + i * 10} 30 T ${100} 0`}
                stroke="hsl(var(--gold-glow))"
                strokeWidth="2"
                strokeLinecap="round"
                className="steam"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            ))}
          </svg>

          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-deep ring-1 ring-gold/30">
            <img
              src={hero}
              alt="Dhakaiya Mutton Kacchi Biriyani"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

            {/* Price stamp */}
            <div className="absolute top-6 right-6 h-24 w-24 rounded-full gradient-gold grid place-items-center shadow-glow rotate-12">
              <div className="text-center text-ink leading-none">
                <div className="font-display text-[10px] tracking-widest">FROM</div>
                <div className="font-display font-black text-2xl mt-1">₹350</div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-10 font-display text-3xl md:text-4xl text-cream">
          Dhakaiya Mutton Kacchi Biriyani
        </h3>
        <p className="mt-3 font-body italic text-cream/70 max-w-xl mx-auto">
          Slow-cooked for hours. Devoured in minutes. Our soul dish — served with
          a perfectly crisp jali kabab.
        </p>
      </div>
    </section>
  );
}
