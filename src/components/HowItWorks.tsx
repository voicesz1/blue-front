import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: "ri-download-cloud-line",
      title: "Descarga la App",
      desc:
        "Descarga gratis en App Store o Google Play y crea tu cuenta en segundos.",
    },
    {
      n: "02",
      icon: "ri-map-pin-line",
      title: "Elige tu Destino",
      desc:
        "Indica a dónde quieres ir y elige el servicio ideal: auto, moto o delivery.",
    },
    {
      n: "03",
      icon: "ri-user-search-line",
      title: "Encuentra un Conductor",
      desc:
        "La app te conecta automáticamente con el conductor disponible más cercano.",
    },
    {
      n: "04",
      icon: "ri-car-line",
      title: "Disfruta el Viaje",
      desc:
        "Sigue en tiempo real y llega a tu destino con comodidad y seguridad.",
    },
  ];

  const stats = [
    { icon: "ri-user-line", number: "500K+", label: "Usuarios Activos" },
    { icon: "ri-car-line", number: "2M+", label: "Viajes Realizados" },
    { icon: "ri-map-pin-line", number: "50+", label: "Ciudades Atendidas" },
    { icon: "ri-star-line", number: "4.8", label: "Calificación Promedio" },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)]">Cómo Funciona</h2>
          <p className="mt-3 text-[var(--muted-text-color)] max-w-2xl mx-auto">
            Simple, rápido e intuitivo. Comienza a usar en minutos
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow p-6"
            >
              <div className="text-[var(--primary-color)] text-3xl md:text-4xl font-bold mb-2">
                {step.n}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary-color)] text-white">
                  <i className={`${step.icon} text-xl`} />
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-color)]">{step.title}</h3>
              </div>
              <p className="text-[var(--muted-text-color)] text-sm">{step.desc}</p>

              {/* Arrow to next step on desktop */}
              {idx < steps.length - 1 && (
                <span className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 text-[var(--primary-color)]">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-3">
                  <i className={`${s.icon} text-xl`} />
                </div>
                <div className="text-3xl font-bold">{s.number}</div>
                <div className="text-sm opacity-90">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}