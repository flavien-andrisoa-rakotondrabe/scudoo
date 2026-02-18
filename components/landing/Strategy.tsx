export default function Strategy() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Vision & Développement</h2>
        <p className="text-slate-600 mb-8">
          Notre plan de développement définit les jalons de notre croissance
          pour les plateformes SCUDOO.
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 inline-block">
          <p className="font-semibold mb-4 text-sm uppercase tracking-widest text-blue-600">
            Document Officiel
          </p>
          <a
            href="/plan-directionnel-scudoo.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Télécharger le Plan Directionnel (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
