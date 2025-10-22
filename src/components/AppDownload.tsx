export default function AppDownload() {
  return (
    <section className="py-20 bg-blue-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 text-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Coluna Esquerda - Conteúdo */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold">Descarga la App Blue</h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Disponible gratis para iOS y Android. ¡Comienza a usar ahora y aprovecha ofertas exclusivas para nuevos usuarios!
              </p>

              {/* Botões de Download */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
                  <i className="ri-apple-fill text-2xl" />
                  <div>
                    <div className="text-xs">Descargar en</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
                  <i className="ri-google-play-fill text-2xl" />
                  <div>
                    <div className="text-xs">Disponible en</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Badges informativos */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <i className="ri-smartphone-line text-2xl" />
                  <span className="text-white">Gratis para descargar</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-shield-check-line text-2xl" />
                  <span className="text-white">100% Seguro</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Imagem */}
            <div className="min-h-[500px] w-full">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                alt="Mockup de celular con Blue App"
                className="w-full h-full object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}