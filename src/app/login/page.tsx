"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/validation";
import type { z } from "zod";

export default function LoginPage() {
  type FormData = z.infer<typeof loginSchema>;
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(loginSchema) });

  function onSubmit() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <main className="pt-24 px-4 min-h-screen bg-[var(--background-color)]">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-[var(--text-color)] mb-6">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Email *</label>
            <input type="email" {...register("email")} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="tu@email.com" />
            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Contraseña *</label>
            <input type="password" {...register("password")} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="********" />
            {errors.password && <span className="text-red-600 text-xs">{errors.password.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-[var(--text-color)]">
              <input type="checkbox" {...register("remember")} className="rounded" />
              Recordarme
            </label>
            <a href="#" className="text-sm text-[var(--primary-color)] hover:brightness-110">¿Olvidaste tu contraseña?</a>
          </div>
          <button disabled={isSubmitting} className="w-full px-4 py-2 rounded-full bg-[var(--primary-color)] text-white hover:brightness-110 transition disabled:opacity-50">
            {isSubmitting ? "Cargando..." : "Ingresar"}
          </button>
        </form>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="px-4 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--surface-bg)] transition flex items-center justify-center gap-2"><i className="ri-google-fill" /> Google</button>
          <button className="px-4 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--surface-bg)] transition flex items-center justify-center gap-2"><i className="ri-facebook-circle-fill" /> Facebook</button>
        </div>
        <p className="text-center text-sm text-[var(--muted-text-color)] mt-6">
          ¿No tienes cuenta? <a href="/registro" className="text-[var(--primary-color)] hover:brightness-110">Regístrate aquí</a>
        </p>
      </div>
    </main>
  );
}