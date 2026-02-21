import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Strategy from "@/components/landing/Strategy";
import Careers from "@/components/landing/Careers";
import NavBar from "@/components/utils/NavBar";

export default function LandingPage() {
  return (
    <div className="w-full">
      <NavBar />
      <main className="min-h-screen bg-white text-slate-900">
        <Hero />
        <About />
        <Strategy />
        <Careers />
      </main>
      <footer className="py-10 border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 SCUDOO Holding. Tous droits réservés.
      </footer>
    </div>
  );
}
