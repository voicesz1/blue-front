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
    <main className="pt-24 px-4">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-brand-dark mb-6">Registrarse</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nombre *</label>
            <input {...register("nombre")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            {errors.nombre && <span className="text-red-600 text-xs">{errors.nombre.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Email *</label>
            <input type="email" {...register("email")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Teléfono *</label>
            <input {...register("telefono")} onChange={(e) => setValue("telefono", formatPhone(e.target.value))} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="(11) 99999-9999" />
            {errors.telefono && <span className="text-red-600 text-xs">{errors.telefono.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">CPF *</label>
            <input {...register("cpf")} onChange={(e) => setValue("cpf", formatCPF(e.target.value))} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="000.000.000-00" />
            {errors.cpf && <span className="text-red-600 text-xs">{errors.cpf.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Contraseña *</label>
            <input type="password" {...register("password")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            {errors.password && <span className="text-red-600 text-xs">{errors.password.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Confirmar contraseña *</label>
            <input type="password" {...register("confirmar")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            {errors.confirmar && <span className="text-red-600 text-xs">{errors.confirmar.message}</span>}
          </div>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" {...register("terminos")} />
            Acepto los términos de uso y privacidad
          </label>
          {errors.terminos && <span className="text-red-600 text-xs">{errors.terminos.message}</span>}

          <button disabled={isSubmitting} className="w-full px-4 py-2 rounded-full bg-brand-blue text-white">
            {isSubmitting ? "Enviando..." : "Crear cuenta"}
          </button>
        </form>
      </div>
    </main>
  );
}