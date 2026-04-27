import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useReveal, useOpenStatus } from "./hooks";
import { toast } from "sonner";

export function Contact() {
  const ref = useReveal();
  const open = useOpenStatus();
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request received!", {
      description: "We'll call you back shortly to confirm.",
    });
    setForm({ name: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink texture-jute overflow-hidden">
      <div ref={ref} className="reveal container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-bangla text-gold text-lg mb-3">আমাদের খুঁজুন</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-4">Find Your Way</h2>
          <p className="font-body italic text-cream/70">
            Walk in, call ahead, or order home — the table is yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="glass-dark rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* status */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`h-3 w-3 rounded-full ${open ? "pulse-glow-green" : "pulse-glow-red"}`}
              />
              <span className="font-ui text-sm font-semibold text-cream">
                {open ? "Open Now" : "Currently Closed"}
              </span>
              <span className="text-cream/50 text-sm">· Daily 12:30 PM – 10:30 PM</span>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full gradient-gold grid place-items-center shrink-0 shadow-gold">
                  <MapPin className="h-4 w-4 text-ink" />
                </div>
                <div>
                  <p className="font-ui text-xs uppercase tracking-widest text-gold">Address</p>
                  <p className="font-body text-cream/90">62, Hem Chandra Naskar Road,<br />Trikon Park, Beleghata, Kolkata - 700010</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full gradient-gold grid place-items-center shrink-0 shadow-gold pulse-glow-gold">
                  <Phone className="h-4 w-4 text-ink" />
                </div>
                <div>
                  <p className="font-ui text-xs uppercase tracking-widest text-gold">Call Us</p>
                  <a href="tel:09147368610" className="font-display text-2xl text-cream hover:text-gold transition">
                    9147368610
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full gradient-gold grid place-items-center shrink-0 shadow-gold">
                  <Mail className="h-4 w-4 text-ink" />
                </div>
                <div>
                  <p className="font-ui text-xs uppercase tracking-widest text-gold">Email</p>
                  <a href="mailto:dhakaiyakacchidine@gmail.com" className="font-body text-cream/90 hover:text-gold transition break-all">
                    dhakaiyakacchidine@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full gradient-gold grid place-items-center shrink-0 shadow-gold">
                  <Clock className="h-4 w-4 text-ink" />
                </div>
                <div>
                  <p className="font-ui text-xs uppercase tracking-widest text-gold">Hours</p>
                  <p className="font-body text-cream/90">Opens 12:30 PM Daily</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-gold/30">
              <iframe
                title="DKD Location"
                src="https://www.google.com/maps?q=62+Hem+Chandra+Naskar+Road+Phoolbagan+Kolkata&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                className="block w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Reservation form */}
          <form
            onSubmit={submit}
            className="glass-dark rounded-3xl p-8 md:p-10 flex flex-col"
          >
            <h3 className="font-display text-3xl text-cream mb-2">Reserve a Table</h3>
            <p className="font-body italic text-cream/60 mb-6">We'll call back to confirm.</p>

            <div className="grid gap-4">
              <div>
                <label className="font-ui text-xs uppercase tracking-widest text-gold/80">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full h-12 px-4 rounded-xl bg-ink/50 border border-gold/20 focus:border-gold outline-none text-cream font-body"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-ui text-xs uppercase tracking-widest text-gold/80">Phone</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full h-12 px-4 rounded-xl bg-ink/50 border border-gold/20 focus:border-gold outline-none text-cream font-body"
                  />
                </div>
                <div>
                  <label className="font-ui text-xs uppercase tracking-widest text-gold/80">Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="mt-2 w-full h-12 px-4 rounded-xl bg-ink/50 border border-gold/20 focus:border-gold outline-none text-cream font-body"
                  />
                </div>
              </div>
              <div>
                <label className="font-ui text-xs uppercase tracking-widest text-gold/80">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-ink/50 border border-gold/20 focus:border-gold outline-none text-cream font-body resize-none"
                  placeholder="Number of guests, special requests…"
                />
              </div>

              <button
                type="submit"
                className="shimmer mt-3 inline-flex items-center justify-center gap-2 h-14 rounded-full gradient-gold text-ink font-ui font-semibold tracking-wide shadow-gold hover:shadow-glow transition"
              >
                <Send className="h-4 w-4" /> Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
