"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";

export default function ParceirosPage() {
  type PessoaData = {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco: string;
  };
  type VeiculoData = {
    tipo: string; // carro, moto, bicicleta
    marca: string;
    modelo: string;
    ano: string;
    placa?: string; // opcional para entregador
    cor: string;
  };
  type DisponibilidadeData = {
    dias: string[];
    horario: string; // manhã, tarde, noite
  };

  const [perfil, setPerfil] = useState<"motorista" | "entregador">("motorista");
  const [etapa, setEtapa] = useState(1);

  const [pessoa, setPessoa] = useState<PessoaData>({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    endereco: "",
  });
  const [veiculo, setVeiculo] = useState<VeiculoData>({
    tipo: "carro",
    marca: "",
    modelo: "",
    ano: "",
    placa: "",
    cor: "",
  });
  const [disp, setDisp] = useState<DisponibilidadeData>({ dias: [], horario: "manhã" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const passos = [
    { numero: 1, titulo: "Dados pessoais" },
    { numero: 2, titulo: perfil === "motorista" ? "Veículo" : "Meio de entrega" },
    { numero: 3, titulo: "Disponibilidade" },
  ];

  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

  function toggleDia(dia: string) {
    setDisp((d) => ({
      ...d,
      dias: d.dias.includes(dia) ? d.dias.filter((x) => x !== dia) : [...d.dias, dia],
    }));
  }

  function validarEtapaAtual(): boolean {
    if (etapa === 1) {
      return Boolean(pessoa.nome && pessoa.email && pessoa.telefone && pessoa.cpf && pessoa.endereco);
    }
    if (etapa === 2) {
      const base = Boolean(veiculo.tipo && veiculo.marca && veiculo.modelo && veiculo.ano && veiculo.cor);
      const precisaPlaca = perfil === "motorista" && veiculo.tipo !== "bicicleta";
      return precisaPlaca ? base && Boolean(veiculo.placa) : base;
    }
    if (etapa === 3) {
      return disp.dias.length > 0 && Boolean(disp.horario);
    }
    return true;
  }

  function avancar() {
    if (!validarEtapaAtual()) return;
    setEtapa((e) => Math.min(3, e + 1));
  }
  function voltar() {
    setEtapa((e) => Math.max(1, e - 1));
  }

  async function enviar() {
    if (!validarEtapaAtual()) return;
    setStatus("loading");
    // Simula envio; troque por integração real com sua API.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <main className="min-h-screen bg-[var(--background-color)]">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[var(--primary-color)] to-blue-800 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seja Parceiro Blue</h1>
            <p className="text-xl text-blue-100">Mobilidade e Delivery em um só app. Cadastre-se como Motorista ou Entregador.</p>
          </motion.div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-12 bg-[var(--background-color)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[var(--surface-bg)] rounded-2xl shadow-xl p-6 md:p-10 border border-[var(--border-color)]">
            {/* Abas de perfil */}
            <div className="flex gap-3 mb-6 bg-[var(--card-bg)] p-2 rounded-xl border border-[var(--border-color)]">
              {[
                { key: "motorista", label: "Motorista" },
                { key: "entregador", label: "Entregador" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setPerfil(tab.key as any); setEtapa(1); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    perfil === tab.key
                      ? "bg-[var(--primary-color)] text-white shadow"
                      : "bg-[var(--surface-bg)] text-[var(--muted-text-color)] border border-[var(--border-color)] hover:text-[var(--text-color)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Passos */}
            <div className="flex items-center justify-between mb-8">
              {passos.map((step, idx) => (
                <div key={step.numero} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        etapa >= step.numero
                          ? "bg-[var(--primary-color)] text-white shadow-lg"
                          : "bg-[var(--surface-bg)] border-2 border-[var(--border-color)] text-[var(--muted-text-color)]"
                      }`}
                    >
                      {etapa > step.numero ? "✓" : step.numero}
                    </div>
                    <span className="text-xs mt-2 text-[var(--text-color)] font-medium hidden md:block">{step.titulo}</span>
                  </div>
                  {idx < passos.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 transition-all ${etapa > step.numero ? "bg-[var(--primary-color)]" : "bg-[var(--border-color)]"}`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Etapas */}
            {etapa === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Nome *</label>
                    <input
                      value={pessoa.nome}
                      onChange={(e) => setPessoa({ ...pessoa, nome: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">E-mail *</label>
                    <input
                      type="email"
                      value={pessoa.email}
                      onChange={(e) => setPessoa({ ...pessoa, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Telefone *</label>
                    <input
                      value={pessoa.telefone}
                      onChange={(e) => setPessoa({ ...pessoa, telefone: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Documento (CPF) *</label>
                    <input
                      value={pessoa.cpf}
                      onChange={(e) => setPessoa({ ...pessoa, cpf: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Endereço *</label>
                  <input
                    value={pessoa.endereco}
                    onChange={(e) => setPessoa({ ...pessoa, endereco: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                    placeholder="Rua, número, bairro"
                  />
                </div>
              </motion.div>
            )}

            {etapa === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Tipo *</label>
                    <select
                      value={veiculo.tipo}
                      onChange={(e) => setVeiculo({ ...veiculo, tipo: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                    >
                      {perfil === "motorista" ? (
                        <>
                          <option value="carro">Carro</option>
                          <option value="moto">Moto</option>
                        </>
                      ) : (
                        <>
                          <option value="moto">Moto</option>
                          <option value="bicicleta">Bicicleta</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Marca *</label>
                    <input
                      value={veiculo.marca}
                      onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="Ex: Honda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Modelo *</label>
                    <input
                      value={veiculo.modelo}
                      onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="Ex: Civic"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Ano *</label>
                    <input
                      value={veiculo.ano}
                      onChange={(e) => setVeiculo({ ...veiculo, ano: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="Ex: 2020"
                    />
                  </div>
                  {perfil === "motorista" && veiculo.tipo !== "bicicleta" && (
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Placa *</label>
                      <input
                        value={veiculo.placa}
                        onChange={(e) => setVeiculo({ ...veiculo, placa: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                        placeholder="Ex: ABC1D23"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Cor *</label>
                    <input
                      value={veiculo.cor}
                      onChange={(e) => setVeiculo({ ...veiculo, cor: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                      placeholder="Ex: Preto"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {etapa === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-color)] mb-3">Dias disponíveis *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {diasSemana.map((dia) => (
                      <button
                        key={dia}
                        type="button"
                        onClick={() => toggleDia(dia)}
                        className={`px-4 py-3 rounded-lg font-medium transition-all ${
                          disp.dias.includes(dia)
                            ? "bg-[var(--primary-color)] text-white shadow-md"
                            : "bg-[var(--background-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--primary-color)]"
                        }`}
                      >
                        {dia}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-color)] mb-2">Horário preferido *</label>
                  <select
                    value={disp.horario}
                    onChange={(e) => setDisp({ ...disp, horario: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--background-color)] border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent text-[var(--text-color)] border-[var(--border-color)]"
                  >
                    <option value="manhã">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Ações */}
            <div className="mt-8 flex items-center justify-between">
              <button onClick={voltar} className="px-4 py-2 rounded-lg bg-[var(--background-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--primary-color)]">
                Voltar
              </button>
              {etapa < 3 ? (
                <button onClick={avancar} className="px-4 py-2 rounded-lg bg-[var(--primary-color)] text-[var(--on-primary-color)] hover:brightness-110">
                  Próximo
                </button>
              ) : (
                <button onClick={enviar} disabled={status === "loading"} className="px-4 py-2 rounded-lg bg-[var(--primary-color)] text-[var(--on-primary-color)] hover:brightness-110 disabled:opacity-60">
                  {status === "loading" ? "Enviando..." : "Enviar"}
                </button>
              )}
            </div>

            {/* Benefícios e Requisitos */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[var(--background-color)] rounded-2xl p-8 border border-[var(--border-color)]">
                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6">Benefícios</h3>
                <ul className="space-y-4 text-[var(--muted-text-color)]">
                  <li>Ganhos semanais</li>
                  <li>Suporte 24/7</li>
                  <li>Flexibilidade de horários</li>
                  <li>Campanhas e bônus por performance</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[var(--background-color)] rounded-2xl p-8 border border-[var(--border-color)]">
                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6">Requisitos</h3>
                <ul className="space-y-4 text-[var(--muted-text-color)]">
                  <li>Documentos válidos (CNH/CPF, veículo em dia)</li>
                  <li>Bom estado do veículo (quando aplicável)</li>
                  <li>Experiência mínima recomendada</li>
                  <li>Seguir termos e políticas da plataforma</li>
                </ul>
              </motion.div>
            </div>

            {/* Sucesso */}
            {status === "success" && (
              <div className="mt-8 p-6 rounded-xl bg-green-600/10 border border-green-600 text-[var(--text-color)]">
                Cadastro enviado! Entraremos em contato em breve.
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
