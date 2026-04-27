import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Phone } from "lucide-react";
import { useTheme } from "./hooks";

const links = [
  { href: "#home", label: "Home" },
  { href: "#kitchen", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#legacy", label: "Legacy" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between rounded-full px-5 transition-all duration-500 ${
          scrolled ? "glass shadow-deep py-2" : "py-3"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 grid place-items-center rounded-full gradient-gold shadow-gold">
            <span className="font-display font-black text-ink text-lg">D</span>
            <span className="absolute -inset-1 rounded-full border border-gold/40 opacity-0 group-hover:opacity-100 transition" />
          </div>
          <div className="hidden sm:block leading-none">
            <div className="font-display text-base font-bold tracking-widest text-foreground">DKD</div>
            <div className="font-bangla text-[10px] text-gold tracking-wider">ঢাকাইয়া কাচ্চি</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link font-ui text-sm tracking-wide uppercase ${
                active === l.href.slice(1) ? "active text-gold" : "text-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center rounded-full glass hover:shadow-glow transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-gold" /> : <Moon className="h-4 w-4 text-foreground" />}
          </button>
          <a
            href="tel:09147368610"
            className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-full gradient-gold text-ink font-ui font-semibold text-sm shadow-gold shimmer"
          >
            <Phone className="h-4 w-4" /> Reserve
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-ink/95 backdrop-blur-xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto pt-28 px-6 flex flex-col gap-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`font-display text-3xl text-cream hover:text-gold transition-all ${
                open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:09147368610"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full gradient-gold text-ink font-ui font-semibold w-fit shadow-gold"
          >
            <Phone className="h-4 w-4" /> Call: 9147368610
          </a>
        </div>
      </div>
    </header>
  );
}
