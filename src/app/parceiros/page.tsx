"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { partnerStep1Schema, partnerStep2Schema, partnerStep3Schema } from "../../utils/validation";
import { formatCPF, formatPhone, formatCEP } from "../../utils/formatters";

export default function ParceirosPage() {
  const [tab, setTab] = useState<"Conductor" | "Repartidor">("Conductor");
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  type Step1 = z.infer<typeof partnerStep1Schema>;
  type Step2 = z.infer<typeof partnerStep2Schema>;
  type Step3 = z.infer<typeof partnerStep3Schema>;

  const f1 = useForm<Step1>({ resolver: zodResolver(partnerStep1Schema) });
  const f2 = useForm<Step2>({ resolver: zodResolver(partnerStep2Schema) });
  const f3 = useForm<Step3>({ resolver: zodResolver(partnerStep3Schema) });

  async function submitAll() {
    const ok1 = await f1.trigger();
    const ok2 = await f2.trigger();
    const ok3 = await f3.trigger();
    if (ok1 && ok2 && ok3) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1500);
      setStep(1);
      f1.reset(); f2.reset(); f3.reset();
    }
  }

  return (
    <main className="pt-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-blue-gradient text-white p-8 mb-8">
          <h1 className="text-3xl font-bold">Sé Socio Blue</h1>
          <p className="text-white/90">Conduce y gana. Inspirado en Uber, adaptado para ti.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          {(["Conductor", "Repartidor"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-full border ${tab === t ? "bg-brand-blue text-white border-brand-blue" : "text-brand-blue"}`}>{t}</button>
          ))}
        </div>

        {/* Breadcrumb/Progress */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span className={`px-2 py-1 rounded ${step >= 1 ? "bg-brand-blue text-white" : "bg-gray-100"}`}>1. Datos personales</span>
          <i className="ri-arrow-right-s-line" />
          <span className={`px-2 py-1 rounded ${step >= 2 ? "bg-brand-blue text-white" : "bg-gray-100"}`}>2. {tab === "Conductor" ? "Vehículo" : "Equipos"}</span>
          <i className="ri-arrow-right-s-line" />
          <span className={`px-2 py-1 rounded ${step >= 3 ? "bg-brand-blue text-white" : "bg-gray-100"}`}>3. Disponibilidad</span>
        </div>

        {/* Steps */}
        {step === 1 && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Nombre *</label>
              <input {...f1.register("nombre")} className="mt-1 w-full rounded-lg border px-3 py-2" />
              {f1.formState.errors.nombre && <span className="text-red-600 text-xs">Nombre obligatorio</span>}
            </div>
            <div>
              <label className="text-sm font-medium">Correo electrónico *</label>
              <input type="email" {...f1.register("email")} className="mt-1 w-full rounded-lg border px-3 py-2" />
              {f1.formState.errors.email && <span className="text-red-600 text-xs">Correo electrónico inválido</span>}
            </div>
            <div>
              <label className="text-sm font-medium">Teléfono *</label>
              <input {...f1.register("telefono")} onChange={(e) => f1.setValue("telefono", formatPhone(e.target.value))} className="mt-1 w-full rounded-lg border px-3 py-2" />
              {f1.formState.errors.telefono && <span className="text-red-600 text-xs">Teléfono inválido</span>}
            </div>
            <div>
              <label className="text-sm font-medium">Documento (CPF) *</label>
              <input {...f1.register("cpf")} onChange={(e) => f1.setValue("cpf", formatCPF(e.target.value))} className="mt-1 w-full rounded-lg border px-3 py-2" />
              {f1.formState.errors.cpf && <span className="text-red-600 text-xs">Documento inválido</span>}
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Dirección *</label>
              <input {...f1.register("direccion")} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Calle, número, barrio" />
            </div>
          </form>
        )}

        {step === 2 && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Tipo *</label>
              <select {...f2.register("tipo")} className="mt-1 w-full rounded-lg border px-3 py-2">
                <option>Auto</option>
                <option>Moto</option>
                <option>Delivery</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Modelo *</label>
              <input {...f2.register("modelo")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Placa *</label>
              <input {...f2.register("placa")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Año *</label>
              <input {...f2.register("ano")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Disponibilidad *</label>
              <select {...f3.register("disponibilidad")} className="mt-1 w-full rounded-lg border px-3 py-2">
                <option>Mañana</option>
                <option>Tarde</option>
                <option>Noche</option>
                <option>Completo</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Ciudad *</label>
              <input {...f3.register("ciudad")} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Código Postal</label>
              <input onChange={(e) => f3.setValue("ciudad", e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder={formatCEP("00000000")} />
            </div>
          </form>
        )}

        <div className="mt-6 flex items-center justify-between">
          <button onClick={() => setStep(Math.max(1, step - 1))} className="px-4 py-2 rounded-full border">Atrás</button>
          <div className="flex items-center gap-3">
            <button onClick={() => setStep(Math.min(3, step + 1))} className="px-4 py-2 rounded-full border">Siguiente</button>
            <button onClick={submitAll} className="px-4 py-2 rounded-full bg-brand-blue text-white">Enviar</button>
            {success && <span className="text-green-600 text-sm">¡Formulario enviado con éxito!</span>}
          </div>
        </div>

        {/* Beneficios y requisitos */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Beneficios y requisitos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white shadow p-6">
              <h3 className="font-semibold mb-2">Beneficios</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Ganancias semanales</li>
                <li>Soporte 24/7</li>
                <li>Flexibilidad de horarios</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow p-6">
              <h3 className="font-semibold mb-2">Requisitos</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Documentación válida</li>
                <li>Revisión del vehículo</li>
                <li>Experiencia mínima</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}