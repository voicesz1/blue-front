'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DeliveryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    origem: '',
    destino: '',
    tipoItem: 'comida',
    tamanho: 'pequeno',
    peso: '',
    instrucoes: '',
    nome: '',
    telefone: '',
    metodoPagamento: 'cartao'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pedido enviado com sucesso!');
    router.push('/delivery/rastreamento');
  };

  return (
    <main className="min-h-screen bg-[var(--background-color)]">
      {/* Header da página */}
      <div className="bg-[var(--primary-color)] text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3">
            <i className="ri-arrow-left-line"></i>
            Voltar
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Blue Delivery</h1>
          <p className="opacity-90 mt-2">Entregamos qualquer coisa, em qualquer lugar, com rapidez e segurança.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] overflow-hidden">
            {/* Tabs de navegação */}
            <div className="flex border-b border-[var(--border-color)]">
              <button className="flex-1 py-4 px-6 text-center border-b-2 border-[var(--primary-color)] text-[var(--primary-color)] font-medium">
                Fazer um Pedido
              </button>
              <Link href="/delivery/rastreamento" className="flex-1 py-4 px-6 text-center text-[var(--muted-text-color)] hover:text-[var(--text-color)]">
                Rastrear Pedido
              </Link>
            </div>

            {/* Formulário de pedido */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--text-color)]">Detalhes da Entrega</h2>
                </div>

                {/* Endereço de origem */}
                <div className="space-y-2">
                  <label htmlFor="origem" className="block text-sm font-medium text-[var(--muted-text-color)]">Endereço de Origem</label>
                  <input
                    type="text"
                    id="origem"
                    name="origem"
                    value={formData.origem}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Rua, número, bairro, cidade"
                  />
                </div>

                {/* Endereço de destino */}
                <div className="space-y-2">
                  <label htmlFor="destino" className="block text-sm font-medium text-[var(--muted-text-color)]">Endereço de Destino</label>
                  <input
                    type="text"
                    id="destino"
                    name="destino"
                    value={formData.destino}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Rua, número, bairro, cidade"
                  />
                </div>

                {/* Tipo de item */}
                <div className="space-y-2">
                  <label htmlFor="tipoItem" className="block text-sm font-medium text-[var(--muted-text-color)]">Tipo de Item</label>
                  <select
                    id="tipoItem"
                    name="tipoItem"
                    value={formData.tipoItem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="comida">Comida</option>
                    <option value="documentos">Documentos</option>
                    <option value="roupas">Roupas</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                {/* Tamanho do pacote */}
                <div className="space-y-2">
                  <label htmlFor="tamanho" className="block text-sm font-medium text-[var(--muted-text-color)]">Tamanho do Pacote</label>
                  <select
                    id="tamanho"
                    name="tamanho"
                    value={formData.tamanho}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="pequeno">Pequeno (até 30cm)</option>
                    <option value="medio">Médio (30-60cm)</option>
                    <option value="grande">Grande (60-100cm)</option>
                  </select>
                </div>

                {/* Peso estimado */}
                <div className="space-y-2">
                  <label htmlFor="peso" className="block text-sm font-medium text-[var(--muted-text-color)]">Peso Estimado (kg)</label>
                  <input
                    type="number"
                    id="peso"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    step="0.1"
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Ex: 2.5"
                  />
                </div>

                {/* Instruções especiais */}
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="instrucoes" className="block text-sm font-medium text-[var(--muted-text-color)]">Instruções Especiais (Opcional)</label>
                  <textarea
                    id="instrucoes"
                    name="instrucoes"
                    value={formData.instrucoes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Exemplo: Deixar com o porteiro, Ligar antes de chegar, etc."
                  />
                </div>

                <div className="md:col-span-2 border-t border-[var(--border-color)] pt-6 mt-4">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--text-color)]">Informações de Contato</h2>
                </div>

                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-sm font-medium text-[var(--muted-text-color)]">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <label htmlFor="telefone" className="block text-sm font-medium text-[var(--muted-text-color)]">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="+55 (00) 00000-0000"
                  />
                </div>

                {/* Método de pagamento */}
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="metodoPagamento" className="block text-sm font-medium text-[var(--muted-text-color)]">Método de Pagamento</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, metodoPagamento: 'cartao' }))}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.metodoPagamento === 'cartao'
                          ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/10'
                          : 'border-[var(--border-color)] hover:border-[var(--primary-color)]/50'
                      }`}
                    >
                      <i className="ri-bank-card-line text-2xl text-[var(--primary-color)] block mb-2"></i>
                      <span className="text-sm font-medium text-[var(--text-color)]">Cartão</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, metodoPagamento: 'pix' }))}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.metodoPagamento === 'pix'
                          ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/10'
                          : 'border-[var(--border-color)] hover:border-[var(--primary-color)]/50'
                      }`}
                    >
                      <i className="ri-qr-code-line text-2xl text-[var(--primary-color)] block mb-2"></i>
                      <span className="text-sm font-medium text-[var(--text-color)]">PIX</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, metodoPagamento: 'dinheiro' }))}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.metodoPagamento === 'dinheiro'
                          ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/10'
                          : 'border-[var(--border-color)] hover:border-[var(--primary-color)]/50'
                      }`}
                    >
                      <i className="ri-money-dollar-circle-line text-2xl text-[var(--primary-color)] block mb-2"></i>
                      <span className="text-sm font-medium text-[var(--text-color)]">Dinheiro</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Resumo do pedido */}
              <div className="mt-8 p-6 bg-[var(--surface-bg)] border border-[var(--border-color)] rounded-lg">
                <h3 className="font-medium text-[var(--text-color)] mb-4 flex items-center gap-2">
                  <i className="ri-file-list-line"></i>
                  Resumo do Pedido
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--muted-text-color)]">Taxa de entrega:</span>
                    <span className="font-medium text-[var(--text-color)]">R$ 15,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--muted-text-color)]">Taxa de serviço:</span>
                    <span className="font-medium text-[var(--text-color)]">R$ 5,00</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-[var(--border-color)] mt-3">
                    <span className="font-medium text-[var(--text-color)]">Total:</span>
                    <span className="font-bold text-lg text-[var(--primary-color)]">R$ 20,00</span>
                  </div>
                </div>
              </div>

              {/* Botão de envio */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-[var(--primary-color)] hover:brightness-110 text-white font-medium py-4 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  <i className="ri-send-plane-fill"></i>
                  Solicitar Entrega
                </button>
              </div>
            </form>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="text-[var(--primary-color)] text-3xl mb-3">
                <i className="ri-time-line"></i>
              </div>
              <h3 className="font-semibold text-lg text-[var(--text-color)]">Entrega Rápida</h3>
              <p className="text-[var(--muted-text-color)] mt-2">Entregamos em até 60 minutos na sua região.</p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="text-[var(--primary-color)] text-3xl mb-3">
                <i className="ri-shield-check-line"></i>
              </div>
              <h3 className="font-semibold text-lg text-[var(--text-color)]">Segurança Garantida</h3>
              <p className="text-[var(--muted-text-color)] mt-2">Seus itens são segurados durante todo o trajeto.</p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="text-[var(--primary-color)] text-3xl mb-3">
                <i className="ri-map-pin-line"></i>
              </div>
              <h3 className="font-semibold text-lg text-[var(--text-color)]">Rastreamento em Tempo Real</h3>
              <p className="text-[var(--muted-text-color)] mt-2">Acompanhe sua entrega em tempo real pelo app.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}