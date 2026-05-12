# Câmara de Iperó: Documento Interno (Omini Fox)

Sistema desenvolvido para uso interno dos vereadores da Câmara Municipal de Iperó.

---

## 1. Estrutura de Papéis

| Papel | Quem | O que faz |
|---|---|---|
| **Super-admin** | Omini Fox (nós) | Acesso total ao sistema, configurações, manutenção, gerenciamento de contas |
| **Atendente** | Funcionário(a) do gabinete | Registra demandas dos cidadãos e direciona ao(s) vereador(es) responsável(eis) |
| **Vereador** | Os 13 vereadores | Recebe demandas, cria suas tarefas, publica relatórios, cadastra seus assessores |

**Importante:** O Presidente da Câmara (Alysson) é um **vereador comum** no sistema. O cargo "Presidente da Mesa" é apenas uma informação visual (badge). Quem tem acesso administrativo somos nós (Omini Fox), não a Câmara.

---

## 2. Módulos Entregues

| Módulo | O que faz | Quem usa |
|---|---|---|
| **Login seguro** | Cada usuário tem login e senha individuais | Todos |
| **Painel personalizado** | Saudação por horário, frase política do dia, métricas | Todos |
| **Tarefas pessoais** | Cada vereador organiza suas próprias tarefas (Kanban + Lista) | Vereadores |
| **Demandas da população** | Atendente registra e direciona ao vereador | Atendente cria, vereador atende |
| **Equipe de gabinete (Assessores)** | Vereador cadastra/edita/remove seus assessores | Vereadores |
| **Relatórios com fotos** | Vereador documenta visitas e ações com galeria | Vereadores |
| **Reunião por vídeo** | Sala integrada (sem instalar nada), link compartilhável | Todos |
| **Perfil editável** | Foto, cargo, partido, bio, contato | Todos |
| **Dashboard com gráficos** | Visão geral em tempo real | Todos |
| **3 Temas visuais** | Institucional, Cibernético, Casual | Todos |

---

## 3. Segurança e Conformidade

A plataforma atende às principais leis brasileiras de proteção de dados:

| Lei | Como atendemos |
|---|---|
| **LGPD (13.709/2018)** | Coleta mínima, consentimento, direito de acesso e exclusão |
| **LAI (12.527/2011)** | Possibilidade de portal público (opcional) |
| **Marco Civil (12.965/2014)** | Guarda de logs, privacidade |

Segurança técnica: HTTPS, senhas com hash, backup automático, hospedagem em nuvem profissional, controle de acesso por função (RBAC), logs de auditoria.

---

## 4. Roteiro de Apresentação

### Como mostrar ao cliente

1. **Abre o link da apresentação** → demo
2. **Mostra os 3 papéis** (3 cards):
   - Vereador (Alysson, atualmente Presidente da Mesa)
   - Atendente (Maria)
   - Vereadora (Maria Goreti)
3. **Entra como Atendente**: mostra o fluxo de registro de demanda → seleção de vereadores → protocolo gerado
4. **Sai, entra como Vereador**: mostra o painel pessoal, demandas recebidas, tarefas, assessores cadastrados
5. **Mostra reunião por vídeo** funcionando ao vivo
6. **Fecha**: "Tudo o que vocês viram é personalizável. Vamos adaptar à rotina do gabinete de vocês."

---

## 5. Próximas evoluções (após contrato)

Ficam guardadas pra discutir com o cliente depois do "sim":

### 🗺️ Mapa interativo de demandas
Mapa de Iperó com pinos coloridos das demandas. Vereador clica e abre Waze/Google Maps pra ir até o local. Vereadores associados a regiões/bairros. **Esforço:** 1-2h. **Custo:** desenvolvimento, sem mensalidade.

### 🔔 Notificações
Email automático (gratuito até 3.000/mês) ou WhatsApp (via API paga). Avisa vereador quando demanda chega, prazo se aproxima, etc.

### 📑 Projetos de Lei
Módulo dedicado a tramitação, votação, anexos.

### 📄 Exportação em PDF
Relatórios formatados pra imprimir ou enviar à imprensa.

### ♿ Acessibilidade VLibras
Tradutor automático de Libras (gratuito, do Governo Federal).

### 📅 Calendário de sessões
Agenda com sessões, audiências, comissões.

---

## 6. Lembretes operacionais (uso interno Omini Fox)

- **Não usar termos técnicos com o cliente.** Falamos "videochamada" (não Jitsi), "nuvem segura" (não Supabase).
- **Quem cadastra vereadores somos nós**, não o presidente. Isso é parte do nosso serviço.
- **Mensalidade cobre:** hospedagem, suporte, atualizações, pequenas evoluções por trimestre.
- **Implantação é cobrada uma vez** (personalização visual, cadastros iniciais, treinamento).
- **Não prometer prazo apertado.** Sempre 30-60 dias de margem.

---

## 7. Próximas ações práticas (Omini Fox)

- [ ] Apresentação inicial à Câmara de Iperó
- [ ] Se houver interesse: marcar reunião de levantamento de necessidades específicas
- [ ] Enviar proposta personalizada com valores
- [ ] Após contrato fechado: substituir mocks por backend real, personalizar cores oficiais da Câmara, treinar equipe

---

*Documento mantido pela equipe Omini Fox. Atualizar à medida que entregas evoluírem.*
