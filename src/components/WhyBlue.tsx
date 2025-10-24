import { motion } from "framer-motion";

const items = [
  {
    icon: "ri-shield-check-line",
    title: "Seguridad Garantizada",
    desc:
      "Todos los conductores están verificados y la app tiene funciones de seguridad en tiempo real.",
  },
  {
    icon: "ri-price-tag-3-line",
    title: "Precios Justos",
    desc:
      "Tarifas transparentes sin sorpresas. Conoces el valor antes de confirmar el viaje.",
  },
  {
    icon: "ri-time-line",
    title: "Disponible 24/7",
    desc: "Servicio disponible a cualquier hora, todos los días de la semana.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Seguimiento en Tiempo Real",
    desc: "Sigue tu viaje o entrega en tiempo real en el mapa.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Soporte Dedicado",
    desc: "Equipo de soporte listo para ayudarte en cualquier momento.",
  },
  {
    icon: "ri-bank-card-line",
    title: "Múltiples Formas de Pago",
    desc:
      "Paga con tarjeta, efectivo, transferencia o billetera digital.",
  },
];

export default function WhyBlue() {
  return (
    <section className="py-20 bg-[var(--surface-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)]">¿Por qué elegir Blue?</h2>
          <p className="mt-3 text-[var(--muted-text-color)] max-w-2xl mx-auto">
            Tecnología de punta y compromiso con la excelencia en cada viaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl bg-[var(--card-bg)] p-6 shadow hover:shadow-3xl hover:scale-[1.02] transition border border-[var(--border-color)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-color)] text-[var(--on-primary-color)]">
                  <i className={`${item.icon} text-2xl`} />
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-color)]">{item.title}</h3>
              </div>
              <p className="text-[var(--muted-text-color)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}