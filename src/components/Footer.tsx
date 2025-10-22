export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-gradient text-white">
                <i className="ri-taxi-line text-xl" />
              </span>
              <span className="font-logo text-2xl text-white">Blue</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Movilidad inteligente para tu ciudad. Transporte rápido, seguro y confiable.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="ri-facebook-fill text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="ri-instagram-line text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="ri-twitter-x-line text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="ri-linkedin-fill text-sm" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Blue Car</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Blue Moto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Blue Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Blue Negocios</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Carreras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Prensa</a></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Seguridad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Términos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Blue. Todos los derechos reservados.
          </div>
          <div className="text-gray-500 text-sm">
            Desarrollado por Readdy
          </div>
        </div>
      </div>
    </footer>
  );
}