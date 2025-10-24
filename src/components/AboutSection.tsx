import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-[var(--surface-bg)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">Acerca de Blue</h2>
          <p className="text-[var(--muted-text-color)]">Conoce nuestra plataforma y cómo estamos transformando la movilidad urbana y las entregas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[var(--primary-color)]/10 border border-[var(--border-color)] rounded-lg shadow-lg p-8 flex items-center justify-center h-[400px]">
              <div className="text-center">
                <div className="text-[var(--primary-color)] text-6xl mb-4">
                  <i className="ri-taxi-line"></i>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-color)]">Blue</h3>
                <p className="text-[var(--muted-text-color)] mt-2">Movilidad y Delivery</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Nuestra Misión</h3>
              <p className="text-[var(--muted-text-color)]">
                Blue nació con el objetivo de simplificar la vida de las personas, ofreciendo soluciones de movilidad urbana y delivery en una única plataforma. 
                Queremos conectar personas, lugares y productos de forma rápida, segura y accesible.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Cómo Funciona</h3>
              <p className="text-[var(--muted-text-color)]">
                Nuestra plataforma conecta pasajeros con conductores asociados para viajes urbanos e intermunicipales. 
                Además, ofrecemos servicio de delivery para cualquier tipo de producto, desde comidas hasta medicamentos y documentos.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-4 rounded-lg shadow-sm">
                <div className="text-[var(--primary-color)] text-2xl mb-2">
                  <i className="ri-taxi-line"></i>
                </div>
                <h4 className="font-medium mb-1 text-[var(--text-color)]">Viajes</h4>
                <p className="text-sm text-[var(--muted-text-color)]">Solicita un coche en minutos y llega a tu destino con seguridad y confort.</p>
              </div>
              
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-4 rounded-lg shadow-sm">
                <div className="text-[var(--primary-color)] text-2xl mb-2">
                  <i className="ri-shopping-bag-line"></i>
                </div>
                <h4 className="font-medium mb-1 text-[var(--text-color)]">Delivery</h4>
                <p className="text-sm text-[var(--muted-text-color)]">Envía o recibe cualquier producto con nuestro servicio de entrega rápida.</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">Nuestras Ventajas</h3>
              <ul className="space-y-2 text-[var(--muted-text-color)]">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Plataforma unificada para viajes y delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Conductores verificados y capacitados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Precios justos y transparentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Atención 24/7 para soporte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}