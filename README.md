# CâmaraGest

Plataforma de gestão de tarefas, projetos e prestação de contas para câmaras municipais.

> **Status atual:** Protótipo de alta fidelidade (frontend completo com dados mockados). Sem backend real, perfeito para apresentação comercial. Backend (Supabase) entra na próxima fase, após validação com o cliente.

---

## Como rodar localmente

Por ser HTML/CSS/JS puro, basta abrir `index.html` no navegador. Para evitar bloqueios de CORS em alguns navegadores, prefira rodar com um servidor local:

```powershell
# Opção 1: Python (se tiver instalado)
python -m http.server 5500

# Opção 2: Node (npx, sem instalar nada permanentemente)
npx serve .

# Opção 3: Extensão "Live Server" do VS Code
# Botão direito no index.html → "Open with Live Server"
```

Depois abra `http://localhost:5500` no navegador.

---

## Estrutura

```
camaragest/
├── index.html              ← Landing comercial (vende o produto)
├── demo.html               ← Escolha de papel para demonstração
├── app/
│   ├── login.html          ← Login real (email/senha)
│   ├── dashboard.html
│   ├── tarefas.html        ← Lista + Kanban
│   ├── relatorios.html     ← Feed em grid
│   ├── relatorio.html      ← Detalhe + galeria
│   ├── perfil.html         ← Edição de perfil + foto
│   ├── vereador.html       ← Perfil público
│   └── admin.html          ← Painel administrativo
└── assets/
    ├── css/styles.css
    └── js/
        ├── data.js         ← Dados mockados (vereadores, tarefas, relatórios)
        ├── auth-mock.js    ← Login fake via localStorage
        ├── ui.js           ← Helpers (toast, modal, navbar)
```

---

## Como apresentar (sem levar PC)

Basta abrir a URL pública (após o deploy no Vercel) em qualquer navegador, no celular ou tablet.

**Roteiro sugerido (5 a 8 minutos):**

1. **Landing**: abre `index.html`, mostra hero, benefícios, "Como funciona" e o portfólio (Omini Fox e Fla Beauty).
2. **Demonstração**: clica em **Ver demonstração ao vivo** → escolhe **Entrar como Presidente**.
3. **Dashboard**: mostra a visão geral (cards, próximas tarefas, equipe).
4. **Tarefas**: alterna lista ↔ Kanban, filtra, **cria uma tarefa nova ao vivo**.
5. **Relatórios**: abre um relatório, mostra a galeria, **publica um relatório novo**.
6. **Painel admin**: mostra a equipe, **cadastra um vereador fictício na hora**.
7. **Perfil**: clica em **Meu perfil**, troca a foto (faz upload local).
8. **Volta à landing**: preenche o formulário de contato com o presidente do lado.

---

## Credenciais para login direto (`/app/login.html`)

| Papel | Email | Senha |
|---|---|---|
| Presidente (admin) | `joao.silva@camaraipero.sp.gov.br` | `demo1234` |
| Vereadora | `maria.souza@camaraipero.sp.gov.br` | `demo1234` |

Qualquer email da lista em `assets/js/data.js` funciona, senha mínima 4 caracteres.

---

## Deploy no Vercel (URL pública)

1. Cria conta em [vercel.com](https://vercel.com) com login do GitHub.
2. Cria um repositório no GitHub e faz push deste projeto.
3. No Vercel: **New Project** → seleciona o repositório → **Deploy**.
4. URL gerada (ex: `camaragest.vercel.app`), pronto, está online.
5. Cada `git push` atualiza automaticamente.

Para projeto estático puro, não precisa configurar build, framework, nem variáveis de ambiente.

---

## Próximas fases (após fechar com o cliente)

- **Substituir mocks por Supabase** (auth real, PostgreSQL, storage de imagens): `auth-mock.js` → cliente Supabase.
- Convite de vereadores por email real.
- Notificações (tarefa atribuída, prazo se aproximando).
- Portal público para o cidadão consultar projetos (transparência).
- Calendário de prazos e sessões.
- Exportar relatório em PDF.
- Multi-câmara (vender a outras prefeituras com o mesmo sistema).

---

## Tecnologias usadas

- HTML5 + Tailwind CSS (via CDN) + JavaScript vanilla
- Google Fonts (Inter)
- localStorage (auth mock)
- Imagens: Unsplash + Pravatar (placeholders)

Sem build, sem Node.js, sem dependências instaladas. Sobe em qualquer hospedagem estática.
