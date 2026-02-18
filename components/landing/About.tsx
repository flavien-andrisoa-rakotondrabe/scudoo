export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wider uppercase">
              À propos de nous
            </div>
            <h2 className="text-4xl font-bold text-slate-900">
              Un pilier de croissance pour l'innovation numérique.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              SCUDOO Holding n’est pas qu’une société d’investissement ; c’est
              un moteur de développement. Nous gérons un portefeuille diversifié
              de plateformes avec un focus unique : l’efficacité opérationnelle
              et l’expérience utilisateur exceptionnelle.
            </p>
            <ul className="space-y-4">
              {[
                'Vision à long terme',
                'Expertise technologique pointue',
                'Culture de l’excellence',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-slate-700 font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
            {/* Ici vous pouvez mettre une image stylisée ou un graphique de croissance */}
            <div className="text-center">
              <p className="text-sm font-mono text-slate-400 mb-2 uppercase tracking-[0.2em]">
                Portfolio Focus
              </p>
              <p className="text-5xl font-black text-slate-800">SCUDOO.CA</p>
              <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto group-hover:w-32 transition-all duration-500"></div>
            </div>
            {/* Décoration subtile */}
            <div className="absolute inset-0 border-2 border-white/50 rounded-3xl m-4 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
