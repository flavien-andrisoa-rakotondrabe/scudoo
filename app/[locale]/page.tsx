import Hero from "@/components/landing/Hero";
import Strategy from "@/components/landing/Strategy";
import Careers from "@/components/landing/Careers";
import NavBar from "@/components/utils/NavBar";
import Vision from "@/components/landing/Vision";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Vision />
        <Strategy />
        <Careers />
      </main>
      <footer className="py-10 border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 SCUDOO Holding. Tous droits réservés.
      </footer>
    </div>
  );
}
