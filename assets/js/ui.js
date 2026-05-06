// Câmara de Iperó: Helpers de UI (toast, modal, navbar)

window.UI = {
  toast(msg, type = 'info', duration = 3000) {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 250);
    }, duration);
  },

  modal({ title, body, footer = '', onClose = null }) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="btn btn-ghost btn-sm" data-close>&times;</button>
        </div>
        <div class="modal-body">${body}</div>
        ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
      </div>
    `;
    document.body.appendChild(backdrop);

    const close = () => {
      backdrop.remove();
      onClose?.();
    };
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop || e.target.dataset.close !== undefined) close();
    });
    return { el: backdrop, close };
  },

  renderAppNavbar(active = '') {
    const user = Auth.current();
    if (!user) return '';
    const isDemo = Auth.isDemo();
    const adminLink = user.isAdmin
      ? `<a href="admin.html" class="nav-link ${active === 'admin' ? 'active' : ''}">Admin</a>`
      : '';

    const banner = isDemo ? `
      <div class="demo-banner">
        ⚡ MODO DEMONSTRAÇÃO. Os dados são fictícios e podem ser reiniciados.
        <a href="../index.html#contato">Solicitar acesso completo</a>
      </div>
    ` : '';

    return `
      ${banner}
      <nav class="app-navbar">
        <a href="dashboard.html" class="nav-brand" style="background: white; padding: 0.3rem 0.7rem; border-radius: 0.5rem;">
          <img src="../assets/images/logo-ipero.jpg" alt="Câmara de Iperó" style="height: 32px; width: auto; display: block;">
        </a>
        <div class="nav-links">
          <a href="dashboard.html" class="nav-link ${active === 'dashboard' ? 'active' : ''}">Dashboard</a>
          <a href="tarefas.html" class="nav-link ${active === 'tarefas' ? 'active' : ''}">Tarefas</a>
          <a href="relatorios.html" class="nav-link ${active === 'relatorios' ? 'active' : ''}">Relatórios</a>
          <a href="reuniao.html" class="nav-link ${active === 'reuniao' ? 'active' : ''}" title="Videochamada">Reunião</a>
          <a href="perfil.html" class="nav-link ${active === 'perfil' ? 'active' : ''}">Meu perfil</a>
          ${adminLink}
        </div>
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <div class="user-chip hide-mobile">
            <img src="${getFotoAtual(user)}" alt="" onerror="this.style.display='none'">
            <span>${user.nome.split(' ')[0]}</span>
          </div>
          <button class="btn btn-sm btn-ghost" style="color:white;" onclick="Auth.logout(); location.href='../index.html';">Sair</button>
        </div>
      </nav>
    `;
  },

  // Anima elementos com .fade-in quando entram na viewport
  initFadeIn() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
  }
};
