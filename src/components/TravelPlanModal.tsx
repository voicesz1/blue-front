"use client";
import { useState } from "react";

type PlanData = {
  origen: string;
  destino: string;
  fecha: string;
  hora: string;
  servicio: "Blue Car" | "Blue Moto";
  pasajeros: number;
};

export default function TravelPlanModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [data, setData] = useState<PlanData>({ origen: "", destino: "", fecha: "", hora: "", servicio: "Blue Car", pasajeros: 1 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmando, setConfirmando] = useState(false);
  const [success, setSuccess] = useState(false);

  // Limite de passageiros de acordo com o serviço selecionado
  const maxPasajeros = data.servicio === "Blue Moto" ? 1 : 4;

  function validar() {
    const e: Record<string, string> = {};
    if (!data.origen) e.origen = "Origen es obligatorio";
    if (!data.destino) e.destino = "Destino es obligatorio";
    if (!data.fecha) e.fecha = "Fecha es obligatoria";
    if (!data.hora) e.hora = "Hora es obligatoria";
    if (!data.pasajeros || data.pasajeros < 1) {
      e.pasajeros = "Número de pasajeros inválido";
    } else if (data.pasajeros > maxPasajeros) {
      e.pasajeros = data.servicio === "Blue Moto" ? "Moto permite solo 1 pasajero" : `Máximo ${maxPasajeros} pasajeros`;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit() {
    if (!validar()) return;
    setConfirmando(true);
    setTimeout(() => {
      setConfirmando(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 1200);
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 top-10 mx-auto max-w-2xl rounded-2xl bg-white shadow-3xl p-6">
        <h3 className="text-xl font-bold text-brand-dark">Planificar Viaje</h3>
        <p className="text-sm text-gray-600 mb-4">Completa los datos y confirma tu viaje</p>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Origen *</label>
            <input value={data.origen} onChange={(e) => setData({ ...data, origen: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Ej: Av. Siempre Viva" />
            {errors.origen && <span className="text-red-600 text-xs">{errors.origen}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Destino *</label>
            <input value={data.destino} onChange={(e) => setData({ ...data, destino: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Ej: Plaza Central" />
            {errors.destino && <span className="text-red-600 text-xs">{errors.destino}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Fecha *</label>
            <input type="date" value={data.fecha} onChange={(e) => setData({ ...data, fecha: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" />
            {errors.fecha && <span className="text-red-600 text-xs">{errors.fecha}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Hora *</label>
            <input type="time" value={data.hora} onChange={(e) => setData({ ...data, hora: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2" />
            {errors.hora && <span className="text-red-600 text-xs">{errors.hora}</span>}
          </div>
          <div>
            <label className="text-sm font-medium">Servicio *</label>
            <select
              value={data.servicio}
              onChange={(e) => {
                const servicio = e.target.value as PlanData["servicio"];
                const max = servicio === "Blue Moto" ? 1 : 4;
                const pasajeros = Math.min(Math.max(1, data.pasajeros), max);
                setData({ ...data, servicio, pasajeros });
                setErrors((prev) => ({ ...prev, pasajeros: "" }));
              }}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option>Blue Car</option>
              <option>Blue Moto</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Pasajeros *</label>
            <input
              type="number"
              min={1}
              max={maxPasajeros}
              value={data.pasajeros}
              onChange={(e) => {
                const val = Number(e.target.value);
                const clamped = Math.min(Math.max(1, val), maxPasajeros);
                setData({ ...data, pasajeros: clamped });
              }}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
            {errors.pasajeros && <span className="text-red-600 text-xs">{errors.pasajeros}</span>}
          </div>
        </div>

        {/* Resumen */}
        <div className="mt-4 rounded-xl bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">Resumen del viaje</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Origen: <span className="font-medium">{data.origen || "-"}</span></li>
            <li>Destino: <span className="font-medium">{data.destino || "-"}</span></li>
            <li>Fecha: <span className="font-medium">{data.fecha || "-"}</span></li>
            <li>Hora: <span className="font-medium">{data.hora || "-"}</span></li>
            <li>Servicio: <span className="font-medium">{data.servicio}</span></li>
            <li>Pasajeros: <span className="font-medium">{data.pasajeros}</span></li>
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-full border">Cancelar</button>
          <button onClick={submit} className="px-5 py-2 rounded-full bg-brand-blue text-white hover:brightness-110 transition disabled:opacity-50" disabled={confirmando}>
            {confirmando ? "Confirmando..." : "Confirmar"}
          </button>
          {success && <span className="text-green-600 text-sm">¡Solicitud enviada con éxito!</span>}
        </div>
      </div>
    </div>
  );
}