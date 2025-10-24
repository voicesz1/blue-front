"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../utils/ThemeContext";

export default function Header({ onPlanificar }: { onPlanificar?: () => void }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface-bg)] bg-opacity-80 backdrop-blur border-b border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo Blue" className="h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted-text-color)]">
          <Link href="/" className="transition-colors hover:text-[var(--primary-color)]">Inicio</Link>
          <Link href="/parceiros" className="transition-colors hover:text-[var(--primary-color)]">Ser Socio</Link>
          <Link href="/login" className="transition-colors hover:text-[var(--primary-color)]">Iniciar Sesión</Link>
          <Link href="/registro" className="transition-colors hover:text-[var(--primary-color)]">Registrarse</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Alternar para modo claro" : "Alternar para modo escuro"}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--surface-bg)] transition"
            title={isDark ? "Claro" : "Escuro"}
          >
            <i className={`${isDark ? "ri-sun-line" : "ri-moon-line"} text-lg`} />
          </button>

          <button
            onClick={onPlanificar}
            className="px-4 py-2 rounded-full bg-[var(--primary-color)] text-[var(--on-primary-color)] hover:brightness-110 transition"
          >
            Planificar Viaje
          </button>
          <Link
            href="/registro"
            className="px-4 py-2 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--on-primary-color)] transition"
          >
            Descargar App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <i className="ri-menu-3-line text-2xl text-[var(--text-color)]" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--surface-bg)]">
          <nav className="px-4 py-4 flex flex-col gap-3 text-[var(--muted-text-color)]">
            {/* Theme toggle mobile */}
            <button
              onClick={() => { toggleTheme(); }}
              className="mb-2 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--surface-bg)] transition"
              aria-label={isDark ? "Alternar para modo claro" : "Alternar para modo escuro"}
            >
              <i className={`${isDark ? "ri-sun-line" : "ri-moon-line"} text-lg`} />
              <span>{isDark ? "Tema claro" : "Tema escuro"}</span>
            </button>

            <Link href="/" onClick={() => setOpen(false)} className="py-2">Inicio</Link>
            <Link href="/parceiros" onClick={() => setOpen(false)} className="py-2">Ser Socio</Link>
            <Link href="/login" onClick={() => setOpen(false)} className="py-2">Iniciar Sesión</Link>
            <Link href="/registro" onClick={() => setOpen(false)} className="py-2">Registrarse</Link>
            <button
              onClick={() => { setOpen(false); onPlanificar?.(); }}
              className="mt-2 w-full px-4 py-2 rounded-full bg-[var(--primary-color)] text-[var(--on-primary-color)]"
            >
              Planificar Viaje
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}