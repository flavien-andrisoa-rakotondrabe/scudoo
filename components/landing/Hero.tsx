export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Propulser les plateformes{' '}
            <span className="text-blue-600 underline decoration-blue-200">
              de demain.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            SCUDOO Holding structure et développe des écosystèmes numériques
            performants. Découvrez notre vision stratégique et rejoignez une
            équipe qui redéfinit les standards de l'industrie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#careers"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-200"
            >
              Voir les opportunités
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-center"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      {/* Petit élément décoratif en arrière-plan */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 translate-x-1/4 -translate-y-1/4">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-600 blur-[120px]"></div>
      </div>
    </section>
  );
}
