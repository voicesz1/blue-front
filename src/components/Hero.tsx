"use client";
import { motion } from "framer-motion";

export default function Hero({ onPlanificar }: { onPlanificar?: () => void }) {
  return (
    <section className="relative pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="h-[420px] md:h-[520px] w-full bg-blue-gradient" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Movilidad urbana inteligente</h1>
            <p className="mt-4 text-white/90">Conéctate al futuro del transporte. Viaja con seguridad, recibe tus pedidos rápidamente.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={onPlanificar} className="px-5 py-3 rounded-full bg-white text-brand-blue hover:brightness-95 transition">Planificar Viaje</button>
              <button className="px-5 py-3 rounded-full border border-white text-white hover:bg-white hover:text-brand-blue transition">Descargar App</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="relative h-[280px] md:h-[360px] rounded-3xl overflow-hidden shadow-3xl">
              {/* Hero image */}
              <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />

              {/* Logo dentro da caixa hero */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="absolute top-3 left-3 w-10 h-10 rounded-lg shadow bg-white/70 p-1 backdrop-blur"
              />

              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur rounded-xl px-4 py-2 flex items-center gap-2">
                <i className="ri-taxi-line text-brand-blue text-xl" />
                <span className="text-sm text-brand-dark">Estadísticas: 2M+ viajes, 50K+ socios</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}