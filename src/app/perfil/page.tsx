'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('info');
  const [editMode, setEditMode] = useState(false);
  
  const [userData, setUserData] = useState({
    nome: 'Maria Silva',
    email: 'maria.silva@email.com',
    telefone: '+55 (11) 98765-4321',
    cpf: '123.456.789-00',
    endereco: 'Rua das Flores, 123 - São Paulo',
    dataNascimento: '15/03/1990'
  });

  const viagens = [
    {
      id: '001',
      data: '2024-10-20',
      origem: 'Av. Paulista, 1000',
      destino: 'Shopping Center',
      valor: 'R$ 25,00',
      status: 'Concluída'
    },
    {
      id: '002',
      data: '2024-10-18',
      origem: 'Rua Augusta, 500',
      destino: 'Aeroporto',
      valor: 'R$ 80,00',
      status: 'Concluída'
    },
    {
      id: '003',
      data: '2024-10-15',
      origem: 'Centro',
      destino: 'Zona Sul',
      valor: 'R$ 35,00',
      status: 'Concluída'
    }
  ];

  const entregas = [
    {
      id: 'DEL001',
      data: '2024-10-22',
      origem: 'Restaurante Central',
      destino: 'Casa',
      valor: 'R$ 15,00',
      status: 'Entregue'
    },
    {
      id: 'DEL002',
      data: '2024-10-19',
      origem: 'Loja de Eletrônicos',
      destino: 'Escritório',
      valor: 'R$ 20,00',
      status: 'Entregue'
    }
  ];

  const metodoPagamento = [
    {
      tipo: 'Cartão de Crédito',
      numero: '**** **** **** 1234',
      bandeira: 'Visa',
      principal: true
    },
    {
      tipo: 'Cartão de Débito',
      numero: '**** **** **** 5678',
      bandeira: 'Mastercard',
      principal: false
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background-color)]">
      {/* Header */}
      <div className="bg-[var(--surface-bg)] border-b border-[var(--border-color)] py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] inline-flex items-center gap-2 mb-2">
                <i className="ri-arrow-left-line"></i>
                Voltar
              </Link>
              <h1 className="text-3xl font-bold text-[var(--text-color)]">Meu Perfil</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-2xl font-bold">
                MS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Tabs de navegação */}
          <div className="flex flex-wrap gap-2 mb-6 bg-[var(--card-bg)] p-2 rounded-xl border border-[var(--border-color)]">
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-lg transition-all ${
                activeTab === 'info' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'text-[var(--muted-text-color)] hover:bg-[var(--surface-bg)]'
              }`}
            >
              <i className="ri-user-line mr-2"></i>
              Informações
            </button>
            <button
              onClick={() => setActiveTab('viagens')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-lg transition-all ${
                activeTab === 'viagens' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'text-[var(--muted-text-color)] hover:bg-[var(--surface-bg)]'
              }`}
            >
              <i className="ri-car-line mr-2"></i>
              Viagens
            </button>
            <button
              onClick={() => setActiveTab('entregas')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-lg transition-all ${
                activeTab === 'entregas' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'text-[var(--muted-text-color)] hover:bg-[var(--surface-bg)]'
              }`}
            >
              <i className="ri-bike-line mr-2"></i>
              Entregas
            </button>
            <button
              onClick={() => setActiveTab('pagamento')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-lg transition-all ${
                activeTab === 'pagamento' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'text-[var(--muted-text-color)] hover:bg-[var(--surface-bg)]'
              }`}
            >
              <i className="ri-bank-card-line mr-2"></i>
              Pagamento
            </button>
          </div>

          {/* Conteúdo das tabs */}
          <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] overflow-hidden">
            {/* Tab: Informações pessoais */}
            {activeTab === 'info' && (
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-color)]">Informações Pessoais</h2>
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className="px-4 py-2 rounded-lg bg-[var(--primary-color)] text-white hover:brightness-110 transition flex items-center gap-2"
                  >
                    <i className={`${editMode ? 'ri-close-line' : 'ri-edit-line'}`}></i>
                    {editMode ? 'Cancelar' : 'Editar'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={userData.nome}
                      disabled={!editMode}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface-bg)] border border-[var(--border-color)] text-[var(--text-color)] disabled:opacity-60"
                      onChange={(e) => setUserData({...userData, nome: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">Email</label>
                    <input
                      type="email"
                      value={userData.email}
                      disabled={!editMode}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface-bg)] border border-[var(--border-color)] text-[var(--text-color)] disabled:opacity-60"
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={userData.telefone}
                      disabled={!editMode}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface-bg)] border border-[var(--border-color)] text-[var(--text-color)] disabled:opacity-60"
                      onChange={(e) => setUserData({...userData, telefone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">CPF</label>
                    <input
                      type="text"
                      value={userData.cpf}
                      disabled
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface-bg)] border border-[var(--border-color)] text-[var(--text-color)] opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">Data de Nascimento</label>
                    <input
                      type="text"
                      value={userData.dataNascimento}
                      disabled={!editMode}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface-bg)] border border-[var(--border-color)] text-[var(--text-color)] disabled:opacity-60"
                      onChange={(e) => setUserData({...userData, dataNascimento: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[var(--muted-text-color)] mb-2">Endereço</label>
                    <input
                      type="text"
                      value={userData.endereco}
                      disabled={!editMode}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface-bg)] border border-[var(--border-color)] text-[var(--text-color)] disabled:opacity-60"
                      onChange={(e) => setUserData({...userData, endereco: e.target.value})}
                    />
                  </div>
                </div>

                {editMode && (
                  <div className="mt-6 flex justify-end">
                    <button className="px-6 py-3 rounded-lg bg-[var(--primary-color)] text-white hover:brightness-110 transition">
                      Salvar Alterações
                    </button>
                  </div>
                )}

                {/* Estatísticas */}
                <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
                  <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Estatísticas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[var(--surface-bg)] p-4 rounded-lg text-center border border-[var(--border-color)]">
                      <div className="text-3xl font-bold text-[var(--primary-color)]">24</div>
                      <div className="text-sm text-[var(--muted-text-color)] mt-1">Viagens</div>
                    </div>
                    <div className="bg-[var(--surface-bg)] p-4 rounded-lg text-center border border-[var(--border-color)]">
                      <div className="text-3xl font-bold text-[var(--primary-color)]">12</div>
                      <div className="text-sm text-[var(--muted-text-color)] mt-1">Entregas</div>
                    </div>
                    <div className="bg-[var(--surface-bg)] p-4 rounded-lg text-center border border-[var(--border-color)]">
                      <div className="text-3xl font-bold text-[var(--primary-color)]">4.9</div>
                      <div className="text-sm text-[var(--muted-text-color)] mt-1">Avaliação</div>
                    </div>
                    <div className="bg-[var(--surface-bg)] p-4 rounded-lg text-center border border-[var(--border-color)]">
                      <div className="text-3xl font-bold text-[var(--primary-color)]">R$ 850</div>
                      <div className="text-sm text-[var(--muted-text-color)] mt-1">Economizado</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Viagens */}
            {activeTab === 'viagens' && (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[var(--text-color)] mb-6">Histórico de Viagens</h2>
                <div className="space-y-4">
                  {viagens.map((viagem) => (
                    <div
                      key={viagem.id}
                      className="p-4 bg-[var(--surface-bg)] rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-color)] transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-[var(--muted-text-color)]">#{viagem.id}</span>
                            <span className="text-sm text-[var(--muted-text-color)]">•</span>
                            <span className="text-sm text-[var(--muted-text-color)]">{viagem.data}</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-start gap-2">
                              <i className="ri-map-pin-line text-[var(--primary-color)] mt-1"></i>
                              <span className="text-[var(--text-color)]">{viagem.origem}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <i className="ri-map-pin-fill text-[var(--primary-color)] mt-1"></i>
                              <span className="text-[var(--text-color)]">{viagem.destino}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-[var(--text-color)]">{viagem.valor}</div>
                            <div className="text-sm text-green-500">{viagem.status}</div>
                          </div>
                          <button className="px-4 py-2 rounded-lg border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--surface-bg)] transition">
                            Detalhes
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Entregas */}
            {activeTab === 'entregas' && (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[var(--text-color)] mb-6">Histórico de Entregas</h2>
                <div className="space-y-4">
                  {entregas.map((entrega) => (
                    <div
                      key={entrega.id}
                      className="p-4 bg-[var(--surface-bg)] rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-color)] transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="ri-bike-line text-[var(--primary-color)]"></i>
                            <span className="text-sm text-[var(--muted-text-color)]">{entrega.id}</span>
                            <span className="text-sm text-[var(--muted-text-color)]">•</span>
                            <span className="text-sm text-[var(--muted-text-color)]">{entrega.data}</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-start gap-2">
                              <i className="ri-store-line text-[var(--primary-color)] mt-1"></i>
                              <span className="text-[var(--text-color)]">{entrega.origem}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <i className="ri-home-line text-[var(--primary-color)] mt-1"></i>
                              <span className="text-[var(--text-color)]">{entrega.destino}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-[var(--text-color)]">{entrega.valor}</div>
                            <div className="text-sm text-green-500">{entrega.status}</div>
                          </div>
                          <button className="px-4 py-2 rounded-lg border border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--surface-bg)] transition">
                            Rastrear
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Método de Pagamento */}
            {activeTab === 'pagamento' && (
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-color)]">Métodos de Pagamento</h2>
                  <button className="px-4 py-2 rounded-lg bg-[var(--primary-color)] text-white hover:brightness-110 transition flex items-center gap-2">
                    <i className="ri-add-line"></i>
                    Adicionar Cartão
                  </button>
                </div>
                <div className="space-y-4">
                  {metodoPagamento.map((metodo, index) => (
                    <div
                      key={index}
                      className="p-6 bg-[var(--surface-bg)] rounded-xl border border-[var(--border-color)] hover:border-[var(--primary-color)] transition"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] flex items-center justify-center text-white">
                            <i className="ri-bank-card-line text-xl"></i>
                          </div>
                          <div>
                            <div className="font-medium text-[var(--text-color)]">{metodo.tipo}</div>
                            <div className="text-sm text-[var(--muted-text-color)]">{metodo.numero}</div>
                            <div className="text-sm text-[var(--muted-text-color)]">{metodo.bandeira}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {metodo.principal && (
                            <span className="px-3 py-1 rounded-full bg-[var(--primary-color)] text-white text-xs">
                              Principal
                            </span>
                          )}
                          <button className="p-2 rounded-lg hover:bg-[var(--card-bg)] text-[var(--text-color)]">
                            <i className="ri-more-2-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
