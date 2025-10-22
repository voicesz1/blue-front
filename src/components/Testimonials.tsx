"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresaria",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    text:
      "Uso Blue diariamente para ir al trabajo. El servicio es excelente, conductores educados y precios justos. ¡Lo recomiendo!",
  },
  {
    name: "Carlos Mendes",
    role: "Estudiante",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    text:
      "La opción de moto es perfecta cuando tengo prisa. Siempre llego a tiempo a clases. ¡App muy práctica!",
  },
  {
    name: "Ana Paula Costa",
    role: "Diseñadora",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    text:
      "¡Blue Delivery salvó mi proyecto! Necesitaba enviar documentos urgentes y llegaron en tiempo récord. ¡Perfecto!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">Lo que dicen nuestros usuarios</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Miles de personas confían en Blue todos los días
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!px-2"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="rounded-2xl bg-white shadow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-brand-dark">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i key={i} className="ri-star-fill" />
                  ))}
                </div>

                <p className="text-gray-700">“{t.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}