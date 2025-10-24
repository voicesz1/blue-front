'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RastreamentoPage() {
  const [codigoRastreio, setCodigoRastreio] = useState('');
  const [statusPedido, setStatusPedido] = useState<null | {
    codigo: string;
    status: string;
    etapa: number;
    origem: string;
    destino: string;
    previsao: string;
    entregador: string;
    telefoneEntregador: string;
    atualizacoes: Array<{
      tempo: string;
      status: string;
      descricao: string;
    }>;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (codigoRastreio.trim() !== '') {
      // Dados simulados para demonstração
      setStatusPedido({
        codigo: codigoRastreio,
        status: 'Em trânsito',
        etapa: 2,
        origem: 'Av. Paulista, 1000 - São Paulo',
        destino: 'Rua Augusta, 500 - São Paulo',
        previsao: '15 minutos',
        entregador: 'Carlos Silva',
        telefoneEntregador: '+55 (11) 98765-4321',
        atualizacoes: [
          {
            tempo: '10:30',
            status: 'Pedido confirmado',
            descricao: 'Seu pedido foi recebido e confirmado'
          },
          {
            tempo: '10:45',
            status: 'Entregador a caminho',
            descricao: 'O entregador está a caminho para retirar seu item'
          },
          {
            tempo: '11:00',
            status: 'Item coletado',
            descricao: 'Seu item foi coletado e está a caminho do destino'
          }
        ]
      });
    }
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
          <h1 className="text-3xl md:text-4xl font-bold">Rastreamento de Pedido</h1>
          <p className="opacity-90 mt-2">Acompanhe sua entrega em tempo real</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] overflow-hidden">
            {/* Tabs de navegação */}
            <div className="flex border-b border-[var(--border-color)]">
              <Link href="/delivery" className="flex-1 py-4 px-6 text-center text-[var(--muted-text-color)] hover:text-[var(--text-color)]">
                Fazer um Pedido
              </Link>
              <button className="flex-1 py-4 px-6 text-center border-b-2 border-[var(--primary-color)] text-[var(--primary-color)] font-medium">
                Rastrear Pedido
              </button>
            </div>

            {/* Formulário de rastreamento */}
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="mb-8">
                <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">
                  Código de Rastreamento
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={codigoRastreio}
                    onChange={(e) => setCodigoRastreio(e.target.value)}
                    placeholder="Ex: BLU123456789"
                    className="flex-1 px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:brightness-110 transition font-medium flex items-center gap-2"
                  >
                    <i className="ri-search-line"></i>
                    Rastrear
                  </button>
                </div>
              </form>

              {/* Resultado do rastreamento */}
              {statusPedido ? (
                <div className="space-y-6">
                  {/* Status atual */}
                  <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-[var(--text-color)]">{statusPedido.status}</h2>
                        <p className="text-[var(--muted-text-color)] text-sm">Pedido #{statusPedido.codigo}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[var(--muted-text-color)]">Previsão de entrega</p>
                        <p className="text-2xl font-bold text-[var(--primary-color)]">{statusPedido.previsao}</p>
                      </div>
                    </div>

                    {/* Barra de progresso */}
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="text-xs font-medium text-[var(--muted-text-color)]">Confirmado</div>
                        <div className="text-xs font-medium text-[var(--muted-text-color)]">Coletado</div>
                        <div className="text-xs font-medium text-[var(--muted-text-color)]">A caminho</div>
                        <div className="text-xs font-medium text-[var(--muted-text-color)]">Entregue</div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-[var(--border-color)]">
                        <div
                          style={{ width: `${(statusPedido.etapa / 3) * 100}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[var(--primary-color)] transition-all duration-500"
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Detalhes da viagem e do entregador */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 text-[var(--text-color)]">Detalhes da Entrega</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-[var(--muted-text-color)] mb-1">Origem</p>
                          <div className="flex items-start gap-2">
                            <i className="ri-map-pin-line text-[var(--primary-color)] mt-1"></i>
                            <p className="text-[var(--text-color)]">{statusPedido.origem}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-[var(--muted-text-color)] mb-1">Destino</p>
                          <div className="flex items-start gap-2">
                            <i className="ri-map-pin-fill text-[var(--primary-color)] mt-1"></i>
                            <p className="text-[var(--text-color)]">{statusPedido.destino}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-4 text-[var(--text-color)]">Informações do Entregador</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-bold text-lg">
                          CS
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-color)]">{statusPedido.entregador}</p>
                          <p className="text-sm text-[var(--muted-text-color)]">
                            <i className="ri-star-fill text-yellow-500"></i> 4.9 (152 entregas)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--muted-text-color)] text-sm">
                        <i className="ri-phone-line text-[var(--primary-color)]"></i>
                        <span>{statusPedido.telefoneEntregador}</span>
                      </div>
                    </div>
                  </div>

                  {/* Linha do tempo de atualizações */}
                  <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 text-[var(--text-color)]">Histórico de Atualizações</h3>
                    <div className="space-y-4">
                      {statusPedido.atualizacoes.map((atualizacao, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-[var(--primary-color)]"></div>
                            {index < statusPedido.atualizacoes.length - 1 && (
                              <div className="w-0.5 flex-1 bg-[var(--border-color)] my-1"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <div className="flex items-start justify-between mb-1">
                              <p className="font-medium text-[var(--text-color)]">{atualizacao.status}</p>
                              <span className="text-sm text-[var(--muted-text-color)]">{atualizacao.tempo}</span>
                            </div>
                            <p className="text-sm text-[var(--muted-text-color)]">{atualizacao.descricao}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mapa de entrega */}
                  <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 text-[var(--text-color)]">Localização em Tempo Real</h3>
                    <div className="aspect-video bg-[var(--background-color)] rounded-lg flex items-center justify-center border border-[var(--border-color)]">
                      <div className="text-center">
                        <i className="ri-map-2-line text-5xl text-[var(--muted-text-color)] mb-3"></i>
                        <p className="text-[var(--muted-text-color)]">Mapa de rastreamento em tempo real</p>
                        <p className="text-sm text-[var(--muted-text-color)] mt-1">Visualização disponível no aplicativo</p>
                      </div>
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition font-medium">
                      <i className="ri-message-3-line"></i>
                      Contatar Entregador
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--border-color)] text-[var(--text-color)] rounded-lg hover:bg-[var(--surface-bg)] transition font-medium">
                      <i className="ri-customer-service-2-line"></i>
                      Suporte
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition font-medium">
                      <i className="ri-close-circle-line"></i>
                      Cancelar Entrega
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-[var(--muted-text-color)] text-6xl mb-4">
                    <i className="ri-search-line"></i>
                  </div>
                  <h3 className="text-xl font-medium text-[var(--text-color)] mb-2">Digite seu código de rastreamento</h3>
                  <p className="text-[var(--muted-text-color)]">
                    Você pode encontrar o código no email de confirmação ou no app Blue
                  </p>
                  
                  {/* Cards informativos */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                      <div className="text-[var(--primary-color)] text-3xl mb-3">
                        <i className="ri-time-line"></i>
                      </div>
                      <h4 className="font-semibold text-[var(--text-color)] mb-2">Rastreamento em Tempo Real</h4>
                      <p className="text-sm text-[var(--muted-text-color)]">Acompanhe cada etapa da sua entrega</p>
                    </div>
                    
                    <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                      <div className="text-[var(--primary-color)] text-3xl mb-3">
                        <i className="ri-notification-line"></i>
                      </div>
                      <h4 className="font-semibold text-[var(--text-color)] mb-2">Notificações Instantâneas</h4>
                      <p className="text-sm text-[var(--muted-text-color)]">Receba atualizações por SMS e email</p>
                    </div>
                    
                    <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                      <div className="text-[var(--primary-color)] text-3xl mb-3">
                        <i className="ri-phone-line"></i>
                      </div>
                      <h4 className="font-semibold text-[var(--text-color)] mb-2">Contato Direto</h4>
                      <p className="text-sm text-[var(--muted-text-color)]">Fale com o entregador a qualquer momento</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
