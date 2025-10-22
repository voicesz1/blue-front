import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: "ri-taxi-fill",
      title: "Blue Car",
      desc: "Viajes cómodos con conductores profesionales. Flota con diferentes categorías de vehículos.",
      features: ["Autos Premium", "Conductores verificados", "Pago seguro"],
    },
    {
      icon: "ri-motorbike-fill",
      title: "Blue Moto",
      desc: "Llega más rápido a tu destino, ideal para trayectos cortos y tráfico intenso.",
      features: ["Rápido y Ágil", "Económico", "Casco incluido"],
    },
    {
      icon: "ri-truck-fill",
      title: "Blue Delivery",
      desc: "Entrega rápida de paquetes, documentos y comidas. Seguimiento en tiempo real.",
      features: ["Seguimiento Real", "Entrega Express", "Seguro incluido"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">Nuestros Servicios</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Soluciones completas de movilidad y entrega para facilitar tu día a día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl bg-white shadow p-6 hover:shadow-3xl hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white">
                  <i className={`${s.icon} text-2xl`} />
                </span>
                <h3 className="text-xl font-semibold text-brand-dark">{s.title}</h3>
              </div>

              <p className="text-gray-700 mb-4">{s.desc}</p>

              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue text-white text-xs">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}