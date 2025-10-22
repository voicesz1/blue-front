"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header({ onPlanificar }: { onPlanificar?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          
          <img src="/images/logo.png" alt="Logo Blue" className="h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
          <Link href="/parceiros" className="hover:text-brand-blue transition-colors">Ser Socio</Link>
          <Link href="/login" className="hover:text-brand-blue transition-colors">Iniciar Sesión</Link>
          <Link href="/registro" className="hover:text-brand-blue transition-colors">Registrarse</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onPlanificar}
            className="px-4 py-2 rounded-full bg-brand-blue text-white hover:brightness-110 transition">
            Planificar Viaje
          </button>
          <Link href="/registro" className="px-4 py-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition">Descargar App</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <i className="ri-menu-3-line text-2xl" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">Inicio</Link>
            <Link href="/parceiros" onClick={() => setOpen(false)} className="py-2">Ser Socio</Link>
            <Link href="/login" onClick={() => setOpen(false)} className="py-2">Iniciar Sesión</Link>
            <Link href="/registro" onClick={() => setOpen(false)} className="py-2">Registrarse</Link>
            <button onClick={() => { setOpen(false); onPlanificar?.(); }} className="mt-2 w-full px-4 py-2 rounded-full bg-brand-blue text-white">Planificar Viaje</button>
          </nav>
        </div>
      )}
    </header>
  );
}