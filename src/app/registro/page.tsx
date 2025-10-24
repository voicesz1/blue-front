"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validation";
import type { z } from "zod";
import { formatCPF, formatPhone } from "../../utils/formatters";
import Link from "next/link";

export default function RegistroPage() {
  type FormData = z.infer<typeof registerSchema>;
  const { register, setValue, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({ 
    resolver: zodResolver(registerSchema) 
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const password = watch("password");

  // Validação de força da senha
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { strength: 0, label: "", color: "" };
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength++;

    const labels = ["Muy débil", "Débil", "Media", "Fuerte", "Muy fuerte"];
    const colors = ["#ef4444", "#f59e0b", "#eab308", "#84cc16", "#22c55e"];
    
    return { strength, label: labels[strength - 1] || "", color: colors[strength - 1] || "" };
  };

  const passwordStrength = getPasswordStrength(password || "");

  async function onSubmit(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccess(true);
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[var(--background-color)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary-color)] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--accent-color)] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div className="hidden lg:block">
              <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted-text-color)] hover:text-[var(--primary-color)] mb-8 transition">
                <i className="ri-arrow-left-line"></i>
                Volver al inicio
              </Link>

              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl font-bold text-[var(--text-color)] mb-4">
                    Únete a Blue
                  </h1>
                  <p className="text-xl text-[var(--muted-text-color)]">
                    Crea tu cuenta y comienza a disfrutar de la mejor experiencia de movilidad urbana
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {[
                    {
                      icon: "ri-rocket-line",
                      title: "Registro rápido",
                      description: "Solo toma 2 minutos crear tu cuenta"
                    },
                    {
                      icon: "ri-shield-check-line",
                      title: "100% Seguro",
                      description: "Tus datos están protegidos con encriptación"
                    },
                    {
                      icon: "ri-gift-line",
                      title: "Bono de bienvenida",
                      description: "Recibe R$ 10 en tu primer viaje"
                    },
                    {
                      icon: "ri-customer-service-line",
                      title: "Soporte 24/7",
                      description: "Estamos aquí para ayudarte cuando lo necesites"
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center flex-shrink-0">
                        <i className={`${feature.icon} text-2xl text-[var(--primary-color)]`}></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text-color)] mb-1">{feature.title}</h3>
                        <p className="text-sm text-[var(--muted-text-color)]">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] border-2 border-[var(--surface-bg)] flex items-center justify-center text-white font-bold text-sm">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-yellow-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-sm"></i>
                        ))}
                      </div>
                      <p className="text-sm text-[var(--muted-text-color)]">
                        <span className="font-semibold text-[var(--text-color)]">+500.000</span> usuarios confían en Blue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="lg:hidden mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted-text-color)] hover:text-[var(--primary-color)] mb-4 transition">
                  <i className="ri-arrow-left-line"></i>
                  Volver
                </Link>
                <h1 className="text-3xl font-bold text-[var(--text-color)]">Crear Cuenta</h1>
              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-8">
                {/* Social Login */}
                <div className="space-y-3 mb-8">
                  <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-[var(--border-color)] hover:border-[var(--primary-color)] hover:bg-[var(--surface-bg)] transition text-[var(--text-color)] font-medium">
                    <i className="ri-google-fill text-xl text-red-500"></i>
                    Continuar con Google
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-[var(--border-color)] hover:border-[var(--primary-color)] hover:bg-[var(--surface-bg)] transition text-[var(--text-color)] font-medium">
                    <i className="ri-facebook-circle-fill text-xl text-blue-600"></i>
                    Continuar con Facebook
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[var(--border-color)]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[var(--card-bg)] text-[var(--muted-text-color)]">O regístrate con email</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      <i className="ri-user-line mr-2"></i>
                      Nombre completo *
                    </label>
                    <input 
                      {...register("nombre")} 
                      className="w-full rounded-xl border-2 border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-4 py-3 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/20 transition-all outline-none"
                      placeholder="Juan Pérez"
                    />
                    {errors.nombre && (
                      <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                        <i className="ri-error-warning-line"></i>
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      <i className="ri-mail-line mr-2"></i>
                      Email *
                    </label>
                    <input 
                      type="email" 
                      {...register("email")} 
                      className="w-full rounded-xl border-2 border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-4 py-3 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/20 transition-all outline-none"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                        <i className="ri-error-warning-line"></i>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone and CPF */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                        <i className="ri-phone-line mr-2"></i>
                        Teléfono *
                      </label>
                      <input 
                        {...register("telefono")} 
                        onChange={(e) => setValue("telefono", formatPhone(e.target.value))} 
                        className="w-full rounded-xl border-2 border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-4 py-3 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/20 transition-all outline-none"
                        placeholder="(11) 99999-9999"
                      />
                      {errors.telefono && (
                        <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                          <i className="ri-error-warning-line"></i>
                          {errors.telefono.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                        <i className="ri-id-card-line mr-2"></i>
                        CPF *
                      </label>
                      <input 
                        {...register("cpf")} 
                        onChange={(e) => setValue("cpf", formatCPF(e.target.value))} 
                        className="w-full rounded-xl border-2 border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-4 py-3 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/20 transition-all outline-none"
                        placeholder="000.000.000-00"
                      />
                      {errors.cpf && (
                        <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                          <i className="ri-error-warning-line"></i>
                          {errors.cpf.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      <i className="ri-lock-line mr-2"></i>
                      Contraseña *
                    </label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        {...register("password")} 
                        className="w-full rounded-xl border-2 border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-4 py-3 pr-12 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/20 transition-all outline-none"
                        placeholder="Mínimo 8 caracteres"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-text-color)] hover:text-[var(--text-color)]"
                      >
                        <i className={`${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-xl`}></i>
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {password && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[var(--muted-text-color)]">Fuerza de la contraseña:</span>
                          <span className="text-xs font-medium" style={{ color: passwordStrength.color }}>
                            {passwordStrength.label}
                          </span>
                        </div>
                        <div className="h-2 bg-[var(--surface-bg)] rounded-full overflow-hidden">
                          <div 
                            className="h-full transition-all duration-300 rounded-full"
                            style={{ 
                              width: `${(passwordStrength.strength / 4) * 100}%`,
                              backgroundColor: passwordStrength.color 
                            }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {errors.password && (
                      <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                        <i className="ri-error-warning-line"></i>
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      <i className="ri-lock-2-line mr-2"></i>
                      Confirmar contraseña *
                    </label>
                    <div className="relative">
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        {...register("confirmar")} 
                        className="w-full rounded-xl border-2 border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--text-color)] px-4 py-3 pr-12 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/20 transition-all outline-none"
                        placeholder="Repite tu contraseña"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-text-color)] hover:text-[var(--text-color)]"
                      >
                        <i className={`${showConfirmPassword ? "ri-eye-off-line" : "ri-eye-line"} text-xl`}></i>
                      </button>
                    </div>
                    {errors.confirmar && (
                      <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                        <i className="ri-error-warning-line"></i>
                        {errors.confirmar.message}
                      </p>
                    )}
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        {...register("terminos")} 
                        className="mt-1 w-5 h-5 rounded border-2 border-[var(--border-color)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                      />
                      <span className="text-sm text-[var(--muted-text-color)] group-hover:text-[var(--text-color)] transition">
                        Acepto los{" "}
                        <a href="#" className="text-[var(--primary-color)] hover:underline font-medium">
                          términos de uso
                        </a>
                        {" "}y la{" "}
                        <a href="#" className="text-[var(--primary-color)] hover:underline font-medium">
                          política de privacidad
                        </a>
                      </span>
                    </label>
                    {errors.terminos && (
                      <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                        <i className="ri-error-warning-line"></i>
                        {errors.terminos.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting} 
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-white font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin"></i>
                        Creando cuenta...
                      </>
                    ) : (
                      <>
                        <i className="ri-user-add-line"></i>
                        Crear cuenta
                      </>
                    )}
                  </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-[var(--muted-text-color)] mt-6">
                  ¿Ya tienes cuenta?{" "}
                  <Link href="/login" className="text-[var(--primary-color)] hover:brightness-110 font-medium">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-[scale-in_0.3s_ease-out]">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-4xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">
              ¡Cuenta Creada!
            </h3>
            <p className="text-[var(--muted-text-color)] mb-6">
              Tu cuenta ha sido creada exitosamente. Redirigiendo al inicio de sesión...
            </p>
            <div className="flex items-center justify-center gap-2 text-[var(--primary-color)]">
              <i className="ri-loader-4-line animate-spin"></i>
              <span className="text-sm">Redirigiendo...</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
