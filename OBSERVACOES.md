# CâmaraGest: Documento de Apresentação ao Cliente

Este documento reúne tudo o que a CâmaraGest oferece à Câmara Municipal, organizado por importância e prioridade. Use como roteiro de conversa com o presidente e como material de apoio para enviar depois da apresentação.

---

## 1. Posicionamento: "Sob medida, não de prateleira"

> **Cada Câmara tem sua realidade. A CâmaraGest se adapta à sua Câmara, não o contrário.**

A maioria dos sistemas vendidos para câmaras municipais são engessados: o município se encaixa no software, paga caro pela licença e ainda precisa adaptar os processos. A CâmaraGest inverte isso:

- **Cores e visual da Câmara contratante**, incluindo brasão e identidade local.
- **Categorias de relatório alinhadas ao município**: você define se quer "Saúde", "Obras", "Educação" como categorias.
- **Telas e fluxos personalizados**, adaptamos à rotina dos vereadores.
- **Novos módulos sob demanda**: mandato muda, sistema acompanha.

**Como vender:** a apresentação inicial mostra a base. Depois do contrato, fazemos uma reunião de descoberta com o presidente e a equipe, listamos as personalizações e entregamos uma versão exclusiva da Câmara.

---

## 2. Funcionalidades já entregues (MVP)

Tudo abaixo já está pronto e demonstrável:

| Recurso | O que faz | Quem usa |
|---|---|---|
| **Login seguro** | Cada vereador tem login individual com senha criptografada | Todos |
| **Painel do presidente** | Cadastrar, ativar e gerenciar vereadores | Presidente |
| **Gestão de tarefas** | Criar tarefas com prazo, responsável e prioridade | Presidente cria, vereadores executam |
| **Visão Kanban e Lista** | Duas formas de visualizar, escolha a que preferir | Todos |
| **Relatórios com fotos** | Vereadores documentam projetos e situações da cidade | Vereadores |
| **Galeria de imagens** | Cada relatório com galeria profissional | Todos |
| **Perfil personalizado** | Cada vereador edita foto, bio e contato | Todos |
| **Página pública do vereador** | Mostra trabalho e relatórios do vereador | Cidadão (visualização) |
| **Dashboard inteligente** | Visão geral em tempo real | Todos |
| **Mobile first** | Funciona perfeito em celular, tablet e PC | Todos |
| **🎥 Videochamadas integradas** | Reuniões e sessões remotas em 1 clique | Presidente, vereadores |
| **🎥 Tarefas com videochamada** | Marque uma tarefa como reunião e a sala é gerada automaticamente | Presidente cria, todos entram |
| **♿ Acessibilidade VLibras** | Tradução automática para Libras | Cidadão deficiente auditivo |
| **📄 Exportação em PDF** | Baixe relatórios formatados profissionalmente | Imprensa, arquivamento |
| **🏛️ Portal público da Câmara** | Página pública de transparência sem login | Cidadão |
| **📞 Ouvidoria Legislativa** | Canal direto cidadão ↔ vereador | Cidadão |

---

## 3. Funcionalidades de evolução (pacotes opcionais)

Estas funcionalidades não estão ativadas no momento, mas podem ser implementadas conforme a Câmara contratante decidir. Cada uma entra como módulo adicional.

### 📺 Transmissão ao vivo de sessões
Sessões plenárias transmitidas em tempo real para o cidadão pelo navegador. Arquivo histórico de todas as sessões. **Custo:** apenas a infraestrutura de transmissão (incluso no projeto).

### 🗳️ Votação eletrônica em sessão
Vereadores votam pelo celular ou tablet durante sessões. Resultado em tempo real, histórico permanente do voto de cada vereador (transparência total). **Custo:** desenvolvimento personalizado, sem mensalidade extra.

### 📑 Acompanhamento de Projetos de Lei
Módulo dedicado a projetos de lei: tramitação, status, votação, anexos, autoria. Substitui controle em Word/Excel. **Custo:** desenvolvimento personalizado.

### 🔔 Notificações por email automáticas
Quando uma tarefa é atribuída, o prazo se aproxima ou um novo relatório é publicado, o vereador recebe email. **Custo:** infraestrutura de envio incluída até 3.000 emails/mês.

### 📱 Notificações por WhatsApp
Mesma lógica das notificações por email, mas via WhatsApp Business. **Custo:** envolve serviço de mensageria adicional, incluso no plano premium ou cobrado como custo de infraestrutura repassado.

### 📅 Calendário de sessões e agenda pública
Sessões, audiências e reuniões em calendário único. Versão pública para o cidadão saber quando participar. **Custo:** desenvolvimento personalizado.

### 🗺️ Mapa interativo de demandas (próxima evolução prioritária)

Mapa da cidade de Iperó com todas as demandas dos cidadãos plotadas por localização geográfica.

**Como funciona:**
- Atendente registra demanda com endereço e bairro
- Sistema mostra um pino colorido no mapa (verde = resolvida, amarelo = em atendimento, vermelho = aberta urgente)
- Vereador clica no pino → popup com nome do cidadão, descrição e botões **"🚗 Abrir no Waze"** e **"🗺️ Abrir no Google Maps"**
- Os botões geram link direto que abre o app de navegação no celular ou web no PC
- Filtros por categoria, status, região, vereador
- Vereadores podem ter "regiões responsáveis" cadastradas (ex: Cleyton e Luis cuidam da Vila Nova) e o sistema sugere automaticamente os responsáveis quando atendente registra uma demanda daquele bairro

**Por que é forte:**
- Transforma o sistema em ferramenta de campo (vereador sai do gabinete e vai direto pra demanda)
- Visualização imediata de "onde a Câmara está atendendo" | argumento poderoso de transparência
- WOW factor enorme em apresentações
- Tecnologia gratuita (Leaflet + OpenStreetMap, sem chave de API)

**Esforço de implementação:** 1-2 horas (já foi feita análise técnica). Cobertura:
1. Adicionar `lat/lng` nas demandas
2. Criar página `app/mapa.html` com Leaflet
3. Adicionar campo `regioesResponsaveis` no perfil dos vereadores
4. Adicionar link "🗺️ Mapa" na navbar
5. Botão "📍 Ver no mapa" na página de detalhe da demanda

**Custo:** desenvolvimento personalizado, sem mensalidade adicional (Leaflet e OpenStreetMap são open-source).

**Status:** ideia validada, aguardando momento certo. Implementar após apresentação inicial à Câmara de Iperó (2026-05-07), conforme retorno e fechamento de contrato.

### 🏢 Multi-câmara
Após a primeira Câmara, a plataforma pode ser oferecida a outras câmaras da região, com dados isolados por organização. **Custo:** sem impacto técnico, modelo de negócio escalável.

> **Como funciona o "custo":** o cliente não precisa entender de tecnologia. O valor de cada módulo é apresentado em proposta personalizada após a reunião de levantamento. Alguns módulos têm custo apenas único (desenvolvimento), outros podem ter mensalidade adicional quando dependem de serviços externos pagos (como WhatsApp Business). **Tudo transparente, sem surpresa.**

---

## 4. Segurança e Conformidade Legal

A CâmaraGest atende às principais leis brasileiras de proteção de dados, transparência e acessibilidade. Você pode mostrar isso ao Procurador da Câmara como argumento técnico-jurídico forte.

### Segurança técnica
- Conexão criptografada (HTTPS/SSL 256-bits, padrão bancário).
- Senhas armazenadas com criptografia (hash bcrypt, nem nós conseguimos ler).
- Backup automático diário em servidores redundantes.
- Hospedagem em nuvem profissional.
- Controle de acesso por função (RBAC).
- Logs de auditoria (quem fez o quê e quando).

### Leis atendidas

| Lei | Nome | Como atendemos |
|---|---|---|
| **13.709/2018** | LGPD: Proteção de Dados Pessoais | Coleta mínima, consentimento, direito de acesso e exclusão |
| **12.527/2011** | LAI: Lei de Acesso à Informação | Portal público com dados abertos ao cidadão |
| **13.460/2017** | Direitos do Usuário de Serviço Público | Canal de ouvidoria estruturado |
| **14.030/2020** | Sessões Remotas | Suporte a deliberações por videochamada |
| **13.146/2015** | Lei Brasileira de Inclusão | VLibras e suporte a leitores de tela |
| **12.965/2014** | Marco Civil da Internet | Guarda de logs, neutralidade, privacidade |

### Garantias
- 🇧🇷 Servidores no Brasil (soberania de dados)
- 🔒 Criptografia 256-bits ponta a ponta
- 📋 Termo de Uso e Política de Privacidade documentados
- 🛟 DPO (Encarregado pela Proteção de Dados) disponível para consulta

---

## 5. O que destacar para cada público na apresentação

| Para quem | O que enfatizar |
|---|---|
| **Presidente da Câmara** | Personalização, controle administrativo, painel completo, **videochamadas** |
| **Vereadores** | Mobile-first, perfil público (marca pessoal), facilidade de subir relatórios |
| **Procurador / Jurídico** | Conformidade LGPD, LAI, Lei das Sessões Remotas e demais leis |
| **Imprensa local** | Portal de transparência, exportação PDF, transmissão ao vivo |
| **Cidadão / eleitor** | Ouvidoria, agenda pública, transparência das ações dos vereadores |

---

## 6. Estratégia de venda em 3 etapas

### Etapa 1: Apresentação inicial (esta)
Mostra o MVP rodando, posiciona como "produto base personalizável", levanta dores específicas da Câmara de Iperó. **Não cobrar nada nessa fase.** Foco: gerar interesse e fazer o presidente querer ver mais.

### Etapa 2: Reunião de levantamento + proposta personalizada
Depois do interesse, marcar uma reunião de 1 hora com o presidente e a equipe. Listar:
- O que a Câmara já usa hoje (planilhas, WhatsApp, papel?).
- Quais 2-3 dores principais.
- Quais módulos extras fazem sentido (transmissão? votação eletrônica? projetos de lei?).

Depois, enviar **proposta com pacote sob medida e valor** (mensalidade + setup único de implantação).

### Etapa 3: Implantação e evolução contínua
- Setup inicial: personalização visual, cadastro dos vereadores, treinamento da equipe.
- Mensalidade cobre: hospedagem, suporte, atualizações, 1-2 melhorias por trimestre.
- Evolução contínua: novos módulos sob demanda, conforme o mandato pede.

---

## 7. Pacotes (valores sob consulta)

> Os valores são apresentados em proposta personalizada após a reunião de levantamento. **Sem letras miúdas, sem custo escondido.**

### 📦 Pacote Essencial
Para câmaras menores que querem começar a digitalizar.
- Login e gestão de vereadores
- Tarefas e relatórios
- Portal público de transparência
- Ouvidoria Legislativa
- Hospedagem, backup e suporte
- ✅ Atende LGPD + LAI

### 📦 Pacote Completo
Para câmaras que querem modernização real.
- Tudo do Essencial
- 🎥 Videochamadas integradas (reuniões e sessões híbridas)
- 📺 Transmissão ao vivo de sessões
- 📄 Exportação de relatórios em PDF
- 🔔 Notificações por email
- ♿ Acessibilidade VLibras
- ✅ Atende LGPD + LAI + Lei das Sessões Remotas + LBI

### 📦 Pacote Premium
Para câmaras que querem ser referência no estado.
- Tudo do Completo
- 🗳️ Votação eletrônica
- 📑 Projetos de Lei (módulo completo)
- 📅 Calendário e agenda pública
- 📱 Notificações por WhatsApp
- Personalização visual completa (cores, brasão)
- Treinamento presencial da equipe
- Suporte prioritário

### 💼 Setup único (implantação)
Cobrado uma única vez, no início. Inclui:
- Personalização visual com cores e brasão
- Cadastro inicial dos vereadores
- Treinamento da equipe (presencial ou online)
- Migração de dados existentes (se houver)
- Documentação técnica e jurídica entregue ao Procurador

---

## 8. O que está sob nosso controle (transparência operacional)

A CâmaraGest é desenvolvida com tecnologias maduras, padrão de mercado e usadas por governos no mundo todo:
- **Hospedagem em nuvem profissional** com SLA de disponibilidade
- **Videochamadas próprias** sem dependência de Zoom/Meet/WhatsApp
- **Tradutor de Libras oficial do Governo Federal** (VLibras)
- **Banco de dados padrão internacional** usado por governos e bancos

Todas as escolhas técnicas são reversíveis. Se a Câmara um dia quiser migrar, os dados ficam dela. **Sem trava, sem refém de fornecedor.**

---

## 9. Próximas ações práticas

- [ ] Subir o sistema no GitHub e gerar URL pública para apresentação
- [ ] Preparar imagem para compartilhamento bonito no WhatsApp (Open Graph)
- [ ] Levantar 2-3 dores específicas da Câmara de Iperó antes da apresentação (conversa informal)
- [ ] Apresentação com presidente. Não vender ainda, gerar interesse
- [ ] Após "sim, quero ver mais", marcar reunião de levantamento (1 hora)
- [ ] Enviar proposta personalizada (com valores) por email/WhatsApp em até 48h
- [ ] Após contrato fechado: ativar Supabase real (auth + banco), personalizar visual, treinar equipe

---

## 10. Lembretes importantes

- **Nunca prometer prazo apertado.** Sempre dar 30 a 60 dias de implantação para ter folga.
- **Sempre incluir treinamento da equipe.** Sistema bom mal treinado é desastre.
- **Evolução contínua é o diferencial.** O cliente paga mensalidade porque o sistema melhora todo trimestre.
- **Jurídico da Câmara vai pedir LGPD.** Já tem documento pronto (ver seção 4).
- **Não usar termos técnicos com cliente.** Fala "videochamada", não "Jitsi". Fala "nuvem segura", não "Supabase".

---

*Documento mantido pela equipe CâmaraGest. Atualizar à medida que features forem entregues ou ideias surgirem.*
