export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-dark">Conéctate al futuro del transporte</h2>
        <p className="mt-2 text-gray-600">Únete a Blue y transforma tu movilidad urbana.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/registro" className="px-5 py-3 rounded-full bg-brand-blue text-white">Registrarse</a>
          <a href="/parceiros" className="px-5 py-3 rounded-full border border-brand-blue text-brand-blue">Ser Socio</a>
        </div>
      </div>
    </section>
  );
}