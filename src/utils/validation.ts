import { z } from "zod";

export const emailSchema = z.string().email({ message: "Email inválido" });
export const passwordSchema = z.string().min(6, { message: "Mínimo 6 caracteres" });
export const cpfSchema = z
  .string()
  .regex(/\d{3}\.\d{3}\.\d{3}-\d{2}/, { message: "CPF inválido" });
export const phoneSchema = z
  .string()
  .regex(/\(\d{2}\) \d{5}-\d{4}/, { message: "Teléfono inválido" });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  remember: z.boolean().optional(),
});

export const registerSchema = z.object({
  nombre: z.string().min(1, { message: "Nombre es obligatorio" }),
  email: emailSchema,
  telefono: phoneSchema,
  cpf: cpfSchema,
  password: passwordSchema,
  confirmar: passwordSchema,
  terminos: z.literal(true, { errorMap: () => ({ message: "Acepta los términos" }) }),
}).refine((data) => data.password === data.confirmar, {
  path: ["confirmar"],
  message: "Las contraseñas no coinciden",
});

export const partnerStep1Schema = z.object({
  nombre: z.string().min(1),
  email: emailSchema,
  telefono: phoneSchema,
  cpf: cpfSchema,
  direccion: z.string().min(1),
});

export const partnerStep2Schema = z.object({
  tipo: z.enum(["Auto", "Moto", "Delivery"]),
  modelo: z.string().min(1),
  placa: z.string().min(1),
  ano: z.string().min(1),
});

export const partnerStep3Schema = z.object({
  disponibilidad: z.enum(["Mañana", "Tarde", "Noche", "Completo"]),
  ciudad: z.string().min(1),
});