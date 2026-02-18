export default function Careers() {
  return (
    <section id="careers" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Façonnez l'avenir avec nous
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            SCUDOO Holding recherche des esprits innovants. Nous valorisons
            l'autonomie, la précision technique et l'audace créative.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            Test Créatif
          </h3>
          <p className="mb-6 opacity-80">
            Démontrez votre savoir-faire en soumettant votre proposition
            directement via notre portail de sélection.
          </p>
          <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-400 transition">
            Démarrer le processus de sélection
          </button>
        </div>
      </div>
    </section>
  );
}
