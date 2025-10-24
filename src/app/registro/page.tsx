"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validation";
import type { z } from "zod";
import { formatCPF, formatPhone } from "../../utils/formatters";

export default function RegistroPage() {
  type FormData = z.infer<typeof registerSchema>;
  const { register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(registerSchema) });

  function onSubmit() { return new Promise((resolve) => setTimeout(resolve, 1200)); }

  return (
    <main className="pt-24 px-4 pb-12 min-h-screen bg-[var(--background-color)]">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-[var(--text-color)] mb-6">Registrarse</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Nombre *</label>
            <input {...register("nombre")} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" />
            {errors.nombre && <span className="text-red-600 text-xs">{errors.nombre.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Email *</label>
            <input type="email" {...register("email")} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" />
            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Teléfono *</label>
            <input {...register("telefono")} onChange={(e) => setValue("telefono", formatPhone(e.target.value))} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="(11) 99999-9999" />
            {errors.telefono && <span className="text-red-600 text-xs">{errors.telefono.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">CPF *</label>
            <input {...register("cpf")} onChange={(e) => setValue("cpf", formatCPF(e.target.value))} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="000.000.000-00" />
            {errors.cpf && <span className="text-red-600 text-xs">{errors.cpf.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Contraseña *</label>
            <input type="password" {...register("password")} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" />
            {errors.password && <span className="text-red-600 text-xs">{errors.password.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text-color)]">Confirmar contraseña *</label>
            <input type="password" {...register("confirmar")} className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" />
            {errors.confirmar && <span className="text-red-600 text-xs">{errors.confirmar.message}</span>}
          </div>
          <label className="inline-flex items-center gap-2 text-sm text-[var(--text-color)]">
            <input type="checkbox" {...register("terminos")} className="rounded" />
            Acepto los términos de uso y privacidad
          </label>
          {errors.terminos && <span className="text-red-600 text-xs block">{errors.terminos.message}</span>}

          <button disabled={isSubmitting} className="w-full px-4 py-2 rounded-full bg-[var(--primary-color)] text-white hover:brightness-110 transition disabled:opacity-50">
            {isSubmitting ? "Enviando..." : "Crear cuenta"}
          </button>
        </form>
        <p className="text-center text-sm text-[var(--muted-text-color)] mt-6">
          ¿Ya tienes cuenta? <a href="/login" className="text-[var(--primary-color)] hover:brightness-110">Inicia sesión aquí</a>
        </p>
      </div>
    </main>
  );
}