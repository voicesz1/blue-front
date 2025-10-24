# Página de Parceiros - Blue Home

## Visão Geral
A página de parceiros (`/parceiros`) foi reformulada para ser simples, direta e com suporte ao modo noturno, facilitando o cadastro de motoristas e entregadores.

## ✨ Características Principais

### 🎨 Design
- **Modo Noturno/Claro** - Integrado com o ThemeContext do projeto
- **Interface moderna e limpa** seguindo as diretrizes de design da Apple
- **Responsiva** - funciona perfeitamente em todos os dispositivos
- **Animações suaves** com Framer Motion
- **Variáveis CSS** para consistência visual com o resto do site

### 📋 Formulário Simplificado
O formulário foi reduzido para apenas os campos essenciais:

1. **Nome Completo** *
2. **Email** *
3. **Telefone** * (com máscara automática)
4. **Cidade** *
5. **Tipo de Veículo** * (Moto, Carro, Van, Caminhão)
6. **Experiência com Entregas** (opcional)

*Campos obrigatórios marcados com asterisco

### ✅ Validações em Tempo Real
- Validação de email (formato correto)
- Validação de telefone (10 ou 11 dígitos)
- Máscara automática de telefone: (00) 00000-0000
- Feedback visual de erros com ícones e mensagens
- Border vermelho em campos com erro

### 🎯 Seções da Página

1. **Hero Section**
   - Banner com gradiente azul
   - Ícone de caminhão
   - Título e subtítulo atrativos

2. **Benefícios** (4 cards)
   - 💰 Ganhos Flexíveis
   - 📱 App Intuitivo
   - ⚡ Pagamentos Rápidos
   - 🎯 Bonificações

3. **Formulário de Cadastro**
   - Form simplificado e objetivo
   - Ícones visuais em cada campo
   - Validação em tempo real
   - Loading spinner durante envio
   - Mensagem de sucesso

4. **FAQ**
   - 4 perguntas frequentes
   - Animações ao scrollar

5. **CTA Footer**
   - Chamada final para ação
   - Botão para scroll ao topo

## 🌓 Modo Noturno

A página usa as mesmas variáveis CSS das outras páginas:

```css
--background-color
--surface-bg
--text-color
--muted-text-color
--border-color
--primary-color
--on-primary-color
```

O modo noturno é controlado automaticamente pelo `ThemeContext` e pode ser alternado no Header.

## 🚀 Como Usar

1. Navegue para: `http://localhost:3001/parceiros`
2. Preencha os campos obrigatórios
3. Clique em "Enviar Cadastro"
4. Aguarde a confirmação de sucesso

## 📱 Responsividade

- **Mobile**: Formulário em coluna única, otimizado para touch
- **Tablet**: Grid de 2 colunas nos benefícios
- **Desktop**: Grid de 4 colunas nos benefícios, layout completo

## 🔄 Próximos Passos Sugeridos

1. **Backend Integration** - Conectar com API real
2. **Upload de Documentos** - CNH, documentos do veículo
3. **Email Notifications** - Confirmação automática
4. **Dashboard Admin** - Gerenciar cadastros
5. **Analytics** - Rastrear conversões

---

**Blue Home** - Conectando pessoas, facilitando entregas 🚀
