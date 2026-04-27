import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#legacy", label: "Legacy" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-8 overflow-hidden texture-jute">
      {/* Floral SVG pattern bg */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="floral" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 5 Q25 15 35 20 Q25 25 20 35 Q15 25 5 20 Q15 15 20 5 Z"
              fill="none"
              stroke="hsl(var(--gold))"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floral)" />
      </svg>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center shadow-gold">
                <span className="font-display font-black text-xl text-ink">D</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg tracking-widest text-cream">DKD</p>
                <p className="font-bangla text-xs text-gold">ঢাকাইয়া কাচ্চি</p>
              </div>
            </div>
            <p className="font-body italic text-cream/60 text-sm leading-relaxed">
              Authentic Dhaka-style Kacchi Biryani, slow-cooked with two centuries of tradition.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-gold mb-4 text-sm tracking-widest uppercase">Explore</h4>
            <ul className="space-y-2 font-body text-sm text-cream/70">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3 text-sm font-body text-cream/70">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /><span>62, Hem Chandra Naskar Rd, Kolkata - 700010</span></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /><a href="tel:09147368610" className="hover:text-gold">9147368610</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /><a href="mailto:dhakaiyakacchidine@gmail.com" className="hover:text-gold break-all">dhakaiyakacchidine@gmail.com</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-gold mb-4 text-sm tracking-widest uppercase">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-10 w-10 grid place-items-center rounded-full glass-dark text-cream hover:text-gold hover:shadow-gold transition"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-display text-gold mb-2 text-sm tracking-widest uppercase">Hours</h4>
              <p className="font-body text-sm text-cream/70">Daily · 12:30 PM – 10:30 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/50">
            © {new Date().getFullYear()} Dhakaiya Kacchi Dine. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/50 italic">
            Crafted with <span className="text-gold">❤</span> &amp; ghee · Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
}
