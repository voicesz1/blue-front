'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ViagensPage() {
  const [filtro, setFiltro] = useState('todas'); // todas, concluidas, canceladas

  const viagens = [
    {
      id: '001',
      data: '2024-10-24',
      hora: '14:30',
      origem: 'Av. Paulista, 1000',
      destino: 'Shopping Center Norte',
      valor: 'R$ 32,50',
      status: 'em_andamento',
      motorista: 'João Santos',
      distancia: '12.5 km'
    },
    {
      id: '002',
      data: '2024-10-22',
      hora: '09:15',
      origem: 'Rua Augusta, 500',
      destino: 'Aeroporto Internacional',
      valor: 'R$ 95,00',
      status: 'concluida',
      motorista: 'Maria Silva',
      distancia: '28.3 km',
      avaliacao: 5
    },
    {
      id: '003',
      data: '2024-10-20',
      hora: '18:45',
      origem: 'Centro Empresarial',
      destino: 'Estação de Metrô',
      valor: 'R$ 18,00',
      status: 'concluida',
      motorista: 'Pedro Oliveira',
      distancia: '5.2 km',
      avaliacao: 4
    },
    {
      id: '004',
      data: '2024-10-18',
      hora: '12:00',
      origem: 'Shopping Iguatemi',
      destino: 'Parque Ibirapuera',
      valor: 'R$ 25,00',
      status: 'cancelada',
      motorista: 'Carlos Souza',
      distancia: '8.7 km'
    },
    {
      id: '005',
      data: '2024-10-15',
      hora: '07:30',
      origem: 'Residência',
      destino: 'Escritório Central',
      valor: 'R$ 22,00',
      status: 'concluida',
      motorista: 'Ana Costa',
      distancia: '6.8 km',
      avaliacao: 5
    }
  ];

  const viagensFiltradas = viagens.filter(viagem => {
    if (filtro === 'todas') return true;
    if (filtro === 'concluidas') return viagem.status === 'concluida';
    if (filtro === 'canceladas') return viagem.status === 'cancelada';
    if (filtro === 'em_andamento') return viagem.status === 'em_andamento';
    return true;
  });

  const totalGasto = viagens
    .filter(v => v.status === 'concluida')
    .reduce((acc, v) => acc + parseFloat(v.valor.replace('R$ ', '').replace(',', '.')), 0);

  const totalViagens = viagens.filter(v => v.status === 'concluida').length;
  const mediaAvaliacao = viagens
    .filter(v => v.avaliacao)
    .reduce((acc, v) => acc + (v.avaliacao || 0), 0) / viagens.filter(v => v.avaliacao).length;

  return (
    <main className="min-h-screen bg-[var(--background-color)]">
      {/* Header */}
      <div className="bg-[var(--surface-bg)] border-b border-[var(--border-color)] py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] inline-flex items-center gap-2 mb-3">
            <i className="ri-arrow-left-line"></i>
            Voltar
          </Link>
          <h1 className="text-3xl font-bold text-[var(--text-color)]">Minhas Viagens</h1>
          <p className="text-[var(--muted-text-color)] mt-1">Histórico completo de suas viagens</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <i className="ri-car-line text-2xl text-[var(--primary-color)]"></i>
                <span className="text-xs text-[var(--muted-text-color)]">Total</span>
              </div>
              <p className="text-3xl font-bold text-[var(--text-color)]">{totalViagens}</p>
              <p className="text-sm text-[var(--muted-text-color)] mt-1">Viagens Concluídas</p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <i className="ri-money-dollar-circle-line text-2xl text-[var(--primary-color)]"></i>
                <span className="text-xs text-[var(--muted-text-color)]">Total</span>
              </div>
              <p className="text-3xl font-bold text-[var(--text-color)]">R$ {totalGasto.toFixed(2)}</p>
              <p className="text-sm text-[var(--muted-text-color)] mt-1">Gasto Total</p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <i className="ri-star-fill text-2xl text-yellow-500"></i>
                <span className="text-xs text-[var(--muted-text-color)]">Média</span>
              </div>
              <p className="text-3xl font-bold text-[var(--text-color)]">{mediaAvaliacao.toFixed(1)}</p>
              <p className="text-sm text-[var(--muted-text-color)] mt-1">Avaliação Média</p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <i className="ri-map-pin-distance-line text-2xl text-[var(--primary-color)]"></i>
                <span className="text-xs text-[var(--muted-text-color)]">Total</span>
              </div>
              <p className="text-3xl font-bold text-[var(--text-color)]">61.5</p>
              <p className="text-sm text-[var(--muted-text-color)] mt-1">Km Percorridos</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFiltro('todas')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filtro === 'todas'
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-[var(--surface-bg)] text-[var(--muted-text-color)] hover:text-[var(--text-color)]'
                }`}
              >
                Todas ({viagens.length})
              </button>
              <button
                onClick={() => setFiltro('em_andamento')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filtro === 'em_andamento'
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-[var(--surface-bg)] text-[var(--muted-text-color)] hover:text-[var(--text-color)]'
                }`}
              >
                Em Andamento ({viagens.filter(v => v.status === 'em_andamento').length})
              </button>
              <button
                onClick={() => setFiltro('concluidas')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filtro === 'concluidas'
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-[var(--surface-bg)] text-[var(--muted-text-color)] hover:text-[var(--text-color)]'
                }`}
              >
                Concluídas ({viagens.filter(v => v.status === 'concluida').length})
              </button>
              <button
                onClick={() => setFiltro('canceladas')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filtro === 'canceladas'
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-[var(--surface-bg)] text-[var(--muted-text-color)] hover:text-[var(--text-color)]'
                }`}
              >
                Canceladas ({viagens.filter(v => v.status === 'cancelada').length})
              </button>
            </div>
          </div>

          {/* Lista de Viagens */}
          <div className="space-y-4">
            {viagensFiltradas.map((viagem) => (
              <div
                key={viagem.id}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[var(--primary-color)] transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    {/* Header da viagem */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          viagem.status === 'em_andamento' ? 'bg-green-500' :
                          viagem.status === 'concluida' ? 'bg-blue-500' :
                          'bg-red-500'
                        }`}></div>
                        <div>
                          <span className="font-medium text-[var(--text-color)]">Viagem #{viagem.id}</span>
                          <span className="text-sm text-[var(--muted-text-color)] ml-3">{viagem.data} • {viagem.hora}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        viagem.status === 'em_andamento' ? 'bg-green-500/20 text-green-500' :
                        viagem.status === 'concluida' ? 'bg-blue-500/20 text-blue-500' :
                        'bg-red-500/20 text-red-500'
                      }`}>
                        {viagem.status === 'em_andamento' && 'Em Andamento'}
                        {viagem.status === 'concluida' && 'Concluída'}
                        {viagem.status === 'cancelada' && 'Cancelada'}
                      </div>
                    </div>

                    {/* Rota */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-3">
                        <i className="ri-map-pin-line text-[var(--primary-color)] mt-1"></i>
                        <div className="flex-1">
                          <p className="text-sm text-[var(--muted-text-color)]">Origem</p>
                          <p className="text-[var(--text-color)] font-medium">{viagem.origem}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="ri-map-pin-fill text-[var(--primary-color)] mt-1"></i>
                        <div className="flex-1">
                          <p className="text-sm text-[var(--muted-text-color)]">Destino</p>
                          <p className="text-[var(--text-color)] font-medium">{viagem.destino}</p>
                        </div>
                      </div>
                    </div>

                    {/* Detalhes */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted-text-color)]">
                      <div className="flex items-center gap-1">
                        <i className="ri-user-line text-[var(--primary-color)]"></i>
                        <span>{viagem.motorista}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="ri-map-pin-distance-line text-[var(--primary-color)]"></i>
                        <span>{viagem.distancia}</span>
                      </div>
                      {viagem.avaliacao && (
                        <div className="flex items-center gap-1">
                          <i className="ri-star-fill text-yellow-500"></i>
                          <span>{viagem.avaliacao}.0</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex lg:flex-col items-center gap-3 lg:text-right">
                    <div className="flex-1 lg:flex-none">
                      <p className="text-sm text-[var(--muted-text-color)]">Valor</p>
                      <p className="text-2xl font-bold text-[var(--text-color)]">{viagem.valor}</p>
                    </div>
                    <Link
                      href={`/viagem/${viagem.id}`}
                      className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:brightness-110 transition whitespace-nowrap"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {viagensFiltradas.length === 0 && (
            <div className="text-center py-16 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl">
              <i className="ri-car-line text-6xl text-[var(--muted-text-color)] mb-4"></i>
              <h3 className="text-xl font-medium text-[var(--text-color)] mb-2">Nenhuma viagem encontrada</h3>
              <p className="text-[var(--muted-text-color)]">Tente ajustar os filtros ou faça sua primeira viagem</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:brightness-110 transition"
              >
                <i className="ri-add-line"></i>
                Planejar Nova Viagem
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
