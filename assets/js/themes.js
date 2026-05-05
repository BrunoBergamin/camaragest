// Sistema de temas: institucional (default), cyber, casual
(function () {
  const TEMAS = {
    institucional: {
      nome: 'Institucional',
      desc: 'Verde oficial e dourado. Sério, sóbrio, formal.',
      icone: '🏛️'
    },
    cyber: {
      nome: 'Cibernético',
      desc: 'Tons escuros com neon ciano e dourado. Futurista, moderno.',
      icone: '⚡'
    },
    casual: {
      nome: 'Casual',
      desc: 'Verde claro e laranja em fundo creme. Leve, amigável.',
      icone: '🎨'
    }
  };

  function getTemaAtual() {
    return localStorage.getItem('ipero_tema') || 'institucional';
  }

  function aplicarTema(tema) {
    if (!TEMAS[tema]) tema = 'institucional';
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('ipero_tema', tema);
  }

  // Aplica imediatamente (antes da página renderizar)
  aplicarTema(getTemaAtual());

  // Cria botão e modal após DOM carregado
  document.addEventListener('DOMContentLoaded', function () {
    // Botão flutuante
    const fab = document.createElement('button');
    fab.className = 'theme-fab';
    fab.title = 'Trocar tema visual';
    fab.innerHTML = '🎨';
    fab.addEventListener('click', abrirModal);
    document.body.appendChild(fab);

    function abrirModal() {
      const atual = getTemaAtual();
      const backdrop = document.createElement('div');
      backdrop.className = 'theme-modal-backdrop';
      backdrop.innerHTML = `
        <div class="theme-modal" onclick="event.stopPropagation()">
          <div style="text-align: center; margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; font-weight: 800; margin: 0; color: var(--text);">Escolha o visual</h2>
            <p style="color: var(--muted); margin: 0.4rem 0 0; font-size: 0.92rem;">Personalize o sistema do jeito que mais combina com você.</p>
          </div>
          <div class="theme-options">
            ${Object.keys(TEMAS).map(key => `
              <div class="theme-option ${atual === key ? 'active' : ''}" data-tema="${key}">
                <div class="theme-preview theme-preview-${key}"></div>
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">${TEMAS[key].icone}</div>
                <div style="font-weight: 700; font-size: 1rem; margin-bottom: 0.3rem;">${TEMAS[key].nome}</div>
                <div style="font-size: 0.78rem; color: var(--muted); line-height: 1.4;">${TEMAS[key].desc}</div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center; margin-top: 1.5rem;">
            <button class="btn btn-ghost" id="theme-fechar">Fechar</button>
          </div>
        </div>
      `;
      backdrop.addEventListener('click', () => backdrop.remove());
      document.body.appendChild(backdrop);

      backdrop.querySelectorAll('.theme-option').forEach(el => {
        el.addEventListener('click', () => {
          const tema = el.dataset.tema;
          aplicarTema(tema);
          // Atualiza marcação visual
          backdrop.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
          el.classList.add('active');
          // Fecha após animação curta
          setTimeout(() => backdrop.remove(), 350);
          // Toast confirmando (se UI estiver disponível)
          if (window.UI && UI.toast) {
            UI.toast(`Tema "${TEMAS[tema].nome}" aplicado!`, 'success', 2000);
          }
        });
      });

      backdrop.querySelector('#theme-fechar').addEventListener('click', () => backdrop.remove());
    }
  });

  // Expor pra debug e uso externo
  window.Tema = { aplicar: aplicarTema, atual: getTemaAtual };
})();
