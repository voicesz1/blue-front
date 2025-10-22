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
    <main className="pt-24 px-4">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-brand-dark mb-6">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email *</label>
            <input type="email" {...register("email")} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="tu@email.com" />
            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Contraseña *</label>
            <input type="password" {...register("password")} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="********" />
            {errors.password && <span className="text-red-600 text-xs">{errors.password.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" {...register("remember")} />
              Recordarme
            </label>
            <a href="#" className="text-sm text-brand-blue">¿Olvidaste tu contraseña?</a>
          </div>
          <button disabled={isSubmitting} className="w-full px-4 py-2 rounded-full bg-brand-blue text-white">
            {isSubmitting ? "Cargando..." : "Ingresar"}
          </button>
        </form>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="px-4 py-2 rounded-full border flex items-center justify-center gap-2"><i className="ri-google-fill" /> Google</button>
          <button className="px-4 py-2 rounded-full border flex items-center justify-center gap-2"><i className="ri-facebook-circle-fill" /> Facebook</button>
        </div>
      </div>
    </main>
  );
}