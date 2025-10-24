import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Viajes", value: "2M+" },
    { label: "Socios", value: "50K+" },
    { label: "Ciudades", value: "120+" },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, idx) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className="rounded-2xl bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 text-center">
              <div className="text-3xl font-bold text-[var(--primary-color)]">{s.value}</div>
              <div className="text-sm text-[var(--text-color)] mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}