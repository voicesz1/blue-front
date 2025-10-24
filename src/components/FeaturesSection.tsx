export default function FeaturesSection() {
  const features = [
    { title: "Seguridad", desc: "Conductores verificados y autos inspeccionados" },
    { title: "Rapidez", desc: "Llegadas más rápidas con optimización de rutas" },
    { title: "Transparencia", desc: "Precios claros y justos, sin sorpresas" },
    { title: "Soporte", desc: "Atención 24/7 para resolver tus dudas" },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-6">Características</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 hover:bg-[var(--card-bg)] hover:shadow transition">
              <h3 className="font-semibold text-[var(--text-color)] mb-2">{f.title}</h3>
              <p className="text-[var(--muted-text-color)] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}