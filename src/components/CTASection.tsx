export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-color)]">Conéctate al futuro del transporte</h2>
        <p className="mt-2 text-[var(--muted-text-color)]">Únete a Blue y transforma tu movilidad urbana.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/registro" className="px-5 py-3 rounded-full bg-[var(--primary-color)] text-white hover:brightness-110 transition">Registrarse</a>
          <a href="/parceiros" className="px-5 py-3 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition">Ser Socio</a>
        </div>
      </div>
    </section>
  );
}