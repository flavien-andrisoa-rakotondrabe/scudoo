import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Strategy from '@/components/landing/Strategy';
import Careers from '@/components/landing/Careers';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation simple */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">
          SCUDOO <span className="text-blue-600">HOLDING</span>
        </div>
        <a
          href="#careers"
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Nous rejoindre
        </a>
      </nav>

      <Hero />
      <About />
      <Strategy />
      <Careers />

      <footer className="py-10 border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 SCUDOO Holding. Tous droits réservés.
      </footer>
    </main>
  );
}
