"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero({ onPlanificar }: { onPlanificar?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Movilidad urbana inteligente",
      subtitle: "Conéctate al futuro del transporte. Viaja con seguridad, recibe tus pedidos rápidamente.",
      image: "/images/hero.jpg",
      icon: "ri-taxi-line",
      stat: "Estadísticas: 2M+ viajes, 50K+ socios"
    },
    {
      title: "Delivery rápido y seguro",
      subtitle: "Entregamos cualquier cosa, en cualquier lugar, con rapidez y seguridad.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop",
      icon: "ri-bike-line",
      stat: "Entregas en hasta 60 minutos"
    },
    {
      title: "Viajes compartidos",
      subtitle: "Ahorra dinero y ayuda al medio ambiente con viajes compartidos.",
      image: "https://images.unsplash.com/photo-1581262177000-8139a463e531?q=80&w=1200&auto=format&fit=crop",
      icon: "ri-group-line",
      stat: "Reduce costos hasta en un 40%"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="h-[500px] md:h-[600px] w-full bg-blue-gradient dark:bg-gray-800" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              
              <span className="text-white/80 text-sm">¡Ahora con delivery!</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{slides[currentSlide].title}</h1>
            <p className="mt-4 text-white/90">{slides[currentSlide].subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onPlanificar} className="px-5 py-3 rounded-full bg-white text-brand-blue hover:brightness-95 transition flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                Planificar Viaje
              </button>
              <button className="px-5 py-3 rounded-full border border-white text-white hover:bg-white hover:text-brand-blue transition flex items-center gap-2">
                <i className="ri-download-line"></i>
                Descargar App
              </button>
            </div>
            
            {/* Indicadores de slide */}
            <div className="mt-8 flex gap-2">
              {slides.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            key={`image-${currentSlide}`}
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-3xl">
              {/* Hero image */}
              <img src={slides[currentSlide].image} alt="Hero" className="w-full h-full object-cover" />

              {/* Logo dentro da caixa hero */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="absolute top-3 left-3 w-10 h-10 rounded-lg shadow bg-white/70 p-1 backdrop-blur"
              />

              {/* Estatísticas */}
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-[var(--card-bg)]/90 backdrop-blur rounded-xl px-4 py-2 flex items-center gap-2 border border-white/20">
                <i className={`${slides[currentSlide].icon} text-[var(--primary-color)] text-xl`} />
                <span className="text-sm text-brand-dark dark:text-[var(--text-color)]">{slides[currentSlide].stat}</span>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2">
                <i className="ri-shield-check-line text-green-600"></i>
              </div>
              

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}