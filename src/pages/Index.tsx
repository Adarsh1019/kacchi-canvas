import { useEffect } from "react";
import { Navbar } from "@/components/dkd/Navbar";
import { Hero } from "@/components/dkd/Hero";
import { Kitchen } from "@/components/dkd/Kitchen";
import { Plate } from "@/components/dkd/Plate";
import { Menu } from "@/components/dkd/Menu";
import { Heritage } from "@/components/dkd/Heritage";
import { Gathering } from "@/components/dkd/Gathering";
import { Legacy } from "@/components/dkd/Legacy";
import { Gallery } from "@/components/dkd/Gallery";
import { Contact } from "@/components/dkd/Contact";
import { Footer } from "@/components/dkd/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Dhakaiya Kacchi Dine — Authentic Dhaka Kacchi Biryani in Kolkata";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Authentic Dhaka-style Kacchi Biryani in Kolkata. Slow-cooked in clay handi. Dine-in, takeaway & delivery at Beleghata, Phoolbagan."
    );
    setMeta("og:title", "Dhakaiya Kacchi Dine — Authentic Kacchi Biryani Kolkata", "property");
    setMeta(
      "og:description",
      "200-year-old Dhaka tradition served fresh in Kolkata. Mutton & Chicken Kacchi, Tehari, Khichuri.",
      "property"
    );
    setMeta("og:type", "restaurant.restaurant", "property");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD
    const ldId = "dkd-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.id = ldId;
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Dhakaiya Kacchi Dine",
      servesCuisine: ["Bangladeshi", "Bengali", "Mughlai", "Biryani"],
      priceRange: "₹200–400",
      telephone: "+91-9147368610",
      email: "dhakaiyakacchidine@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "62, Hem Chandra Naskar Road, Trikon Park",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700010",
        addressCountry: "IN",
      },
      openingHours: "Mo-Su 12:30-22:30",
    });
    document.head.appendChild(ld);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Kitchen />
      <Plate />
      <Menu />
      <Heritage />
      <Gathering />
      <Legacy />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
