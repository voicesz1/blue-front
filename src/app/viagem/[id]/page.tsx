'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ViagemDetalhesPage() {
  const params = useParams();
  const [viagemData, setViagemData] = useState({
    id: params.id as string,
    status: 'em_andamento',
    motorista: {
      nome: 'João Santos',
      foto: '',
      avaliacao: 4.8,
      totalViagens: 342,
      veiculo: {
        modelo: 'Honda Civic',
        cor: 'Prata',
        placa: 'ABC-1234'
      }
    },
    origem: {
      endereco: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
      horario: '14:30'
    },
    destino: {
      endereco: 'Shopping Morumbi - Av. Roque Petroni Júnior, 1089',
      previsao: '15:15'
    },
    distancia: '12.5 km',
    duracao: '45 min',
    valor: 'R$ 32,50',
    metodoPagamento: 'Cartão de Crédito',
    progresso: 65
  });

  const [mensagens, setMensagens] = useState([
    {
      remetente: 'motorista',
      texto: 'Olá! Estou a caminho do local de embarque.',
      horario: '14:28'
    },
    {
      remetente: 'passageiro',
      texto: 'Ok, obrigado! Estarei no portão principal.',
      horario: '14:29'
    }
  ]);

  const [novaMensagem, setNovaMensagem] = useState('');

  const enviarMensagem = () => {
    if (novaMensagem.trim()) {
      setMensagens([...mensagens, {
        remetente: 'passageiro',
        texto: novaMensagem,
        horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNovaMensagem('');
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background-color)]">
      {/* Header */}
      <div className="bg-[var(--surface-bg)] border-b border-[var(--border-color)] py-6">
        <div className="container mx-auto px-4">
          <Link href="/perfil" className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] inline-flex items-center gap-2 mb-3">
            <i className="ri-arrow-left-line"></i>
            Voltar ao Perfil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-color)]">Viagem #{viagemData.id}</h1>
              <p className="text-[var(--muted-text-color)] mt-1">
                {viagemData.status === 'em_andamento' && 'Em andamento'}
                {viagemData.status === 'concluida' && 'Concluída'}
                {viagemData.status === 'cancelada' && 'Cancelada'}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-full font-medium ${
              viagemData.status === 'em_andamento' ? 'bg-green-500/20 text-green-500' :
              viagemData.status === 'concluida' ? 'bg-blue-500/20 text-blue-500' :
              'bg-red-500/20 text-red-500'
            }`}>
              {viagemData.status === 'em_andamento' && <><i className="ri-time-line mr-2"></i>Ativa</>}
              {viagemData.status === 'concluida' && <><i className="ri-check-line mr-2"></i>Concluída</>}
              {viagemData.status === 'cancelada' && <><i className="ri-close-line mr-2"></i>Cancelada</>}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progresso da Viagem */}
            {viagemData.status === 'em_andamento' && (
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
                <h2 className="text-xl font-bold text-[var(--text-color)] mb-4">Progresso da Viagem</h2>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--muted-text-color)]">Origem</span>
                    <span className="text-[var(--muted-text-color)]">{viagemData.progresso}%</span>
                    <span className="text-[var(--muted-text-color)]">Destino</span>
                  </div>
                  <div className="w-full bg-[var(--surface-bg)] rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-[var(--primary-color)] h-full rounded-full transition-all duration-500"
                      style={{ width: `${viagemData.progresso}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-[var(--muted-text-color)] text-sm mt-4">
                  <i className="ri-time-line text-[var(--primary-color)]"></i>
                  <span>Previsão de chegada: {viagemData.destino.previsao}</span>
                </div>
              </div>
            )}

            {/* Mapa */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[var(--text-color)] mb-4">Rota da Viagem</h2>
              <div className="aspect-video bg-[var(--surface-bg)] rounded-lg flex items-center justify-center border border-[var(--border-color)]">
                <div className="text-center">
                  <i className="ri-map-2-line text-5xl text-[var(--muted-text-color)] mb-3"></i>
                  <p className="text-[var(--muted-text-color)]">Visualização do mapa em tempo real</p>
                  <p className="text-sm text-[var(--muted-text-color)] mt-1">Disponível no aplicativo Blue</p>
                </div>
              </div>
              
              {/* Detalhes da Rota */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[var(--primary-color)]"></div>
                    <div className="w-0.5 h-full bg-[var(--border-color)] my-2"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--muted-text-color)]">Origem - {viagemData.origem.horario}</p>
                    <p className="text-[var(--text-color)] font-medium">{viagemData.origem.endereco}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-[var(--primary-color)]"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--muted-text-color)]">Destino - {viagemData.destino.previsao}</p>
                    <p className="text-[var(--text-color)] font-medium">{viagemData.destino.endereco}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações da Viagem */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[var(--text-color)] mb-4">Informações da Viagem</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-4 rounded-lg text-center">
                  <i className="ri-map-pin-distance-line text-2xl text-[var(--primary-color)] mb-2"></i>
                  <p className="text-sm text-[var(--muted-text-color)]">Distância</p>
                  <p className="font-bold text-[var(--text-color)]">{viagemData.distancia}</p>
                </div>
                <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-4 rounded-lg text-center">
                  <i className="ri-time-line text-2xl text-[var(--primary-color)] mb-2"></i>
                  <p className="text-sm text-[var(--muted-text-color)]">Duração</p>
                  <p className="font-bold text-[var(--text-color)]">{viagemData.duracao}</p>
                </div>
                <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-4 rounded-lg text-center">
                  <i className="ri-money-dollar-circle-line text-2xl text-[var(--primary-color)] mb-2"></i>
                  <p className="text-sm text-[var(--muted-text-color)]">Valor</p>
                  <p className="font-bold text-[var(--text-color)]">{viagemData.valor}</p>
                </div>
                <div className="bg-[var(--surface-bg)] border border-[var(--border-color)] p-4 rounded-lg text-center">
                  <i className="ri-bank-card-line text-2xl text-[var(--primary-color)] mb-2"></i>
                  <p className="text-sm text-[var(--muted-text-color)]">Pagamento</p>
                  <p className="font-bold text-[var(--text-color)] text-xs">{viagemData.metodoPagamento}</p>
                </div>
              </div>
            </div>

            {/* Chat */}
            {viagemData.status === 'em_andamento' && (
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
                <h2 className="text-xl font-bold text-[var(--text-color)] mb-4">Chat com o Motorista</h2>
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {mensagens.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.remetente === 'passageiro' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.remetente === 'passageiro'
                          ? 'bg-[var(--primary-color)] text-white'
                          : 'bg-[var(--surface-bg)] text-[var(--text-color)] border border-[var(--border-color)]'
                      }`}>
                        <p className="text-sm">{msg.texto}</p>
                        <p className={`text-xs mt-1 ${
                          msg.remetente === 'passageiro' ? 'text-white/70' : 'text-[var(--muted-text-color)]'
                        }`}>
                          {msg.horario}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={novaMensagem}
                    onChange={(e) => setNovaMensagem(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-4 py-3 border border-[var(--border-color)] rounded-lg bg-[var(--surface-bg)] text-[var(--text-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                  <button
                    onClick={enviarMensagem}
                    className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:brightness-110 transition"
                  >
                    <i className="ri-send-plane-fill"></i>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-6">
            {/* Informações do Motorista */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[var(--text-color)] mb-4">Motorista</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-2xl font-bold">
                  JS
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[var(--text-color)]">{viagemData.motorista.nome}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <i className="ri-star-fill text-yellow-500"></i>
                    <span className="text-[var(--text-color)]">{viagemData.motorista.avaliacao}</span>
                    <span className="text-[var(--muted-text-color)]">({viagemData.motorista.totalViagens} viagens)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted-text-color)]">Veículo:</span>
                  <span className="text-sm font-medium text-[var(--text-color)]">{viagemData.motorista.veiculo.modelo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted-text-color)]">Cor:</span>
                  <span className="text-sm font-medium text-[var(--text-color)]">{viagemData.motorista.veiculo.cor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted-text-color)]">Placa:</span>
                  <span className="text-sm font-medium text-[var(--text-color)]">{viagemData.motorista.veiculo.placa}</span>
                </div>
              </div>

              {viagemData.status === 'em_andamento' && (
                <div className="mt-6 space-y-2">
                  <button className="w-full px-4 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:brightness-110 transition flex items-center justify-center gap-2">
                    <i className="ri-phone-line"></i>
                    Ligar para Motorista
                  </button>
                  <button className="w-full px-4 py-3 border-2 border-[var(--border-color)] text-[var(--text-color)] rounded-lg hover:bg-[var(--surface-bg)] transition flex items-center justify-center gap-2">
                    <i className="ri-share-line"></i>
                    Compartilhar Viagem
                  </button>
                </div>
              )}
            </div>

            {/* Ações Rápidas */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[var(--text-color)] mb-4">Ações</h2>
              <div className="space-y-2">
                {viagemData.status === 'em_andamento' && (
                  <button className="w-full px-4 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-2 font-medium">
                    <i className="ri-close-circle-line"></i>
                    Cancelar Viagem
                  </button>
                )}
                {viagemData.status === 'concluida' && (
                  <>
                    <button className="w-full px-4 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:brightness-110 transition flex items-center justify-center gap-2">
                      <i className="ri-star-line"></i>
                      Avaliar Viagem
                    </button>
                    <button className="w-full px-4 py-3 border-2 border-[var(--border-color)] text-[var(--text-color)] rounded-lg hover:bg-[var(--surface-bg)] transition flex items-center justify-center gap-2">
                      <i className="ri-file-text-line"></i>
                      Ver Recibo
                    </button>
                  </>
                )}
                <button className="w-full px-4 py-3 border-2 border-[var(--border-color)] text-[var(--text-color)] rounded-lg hover:bg-[var(--surface-bg)] transition flex items-center justify-center gap-2">
                  <i className="ri-customer-service-2-line"></i>
                  Suporte
                </button>
              </div>
            </div>

            {/* Dicas de Segurança */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[var(--text-color)] mb-4 flex items-center gap-2">
                <i className="ri-shield-check-line text-[var(--primary-color)]"></i>
                Dicas de Segurança
              </h2>
              <ul className="space-y-3 text-sm text-[var(--muted-text-color)]">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-green-500 mt-0.5"></i>
                  <span>Verifique a placa e o motorista antes de entrar</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-green-500 mt-0.5"></i>
                  <span>Compartilhe sua viagem com amigos</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-green-500 mt-0.5"></i>
                  <span>Use sempre o cinto de segurança</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
