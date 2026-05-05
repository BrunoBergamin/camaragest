// CâmaraGest: Auth Mock (login fake via localStorage)
// Em produção, troca por Supabase Auth.

const AUTH_KEY = 'camaragest_user';
const DEMO_FLAG = 'camaragest_is_demo';

window.Auth = {
  loginAs(vereadorId, isDemo = false) {
    const user = window.getVereador(vereadorId);
    if (!user) return false;
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    localStorage.setItem(DEMO_FLAG, isDemo ? '1' : '0');
    return true;
  },

  loginEmailSenha(email, senha) {
    const user = MOCK_DATA.vereadores.find(v => v.email === email);
    if (!user) return { ok: false, msg: 'Email não encontrado.' };
    if (senha.length < 4) return { ok: false, msg: 'Senha incorreta.' };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    localStorage.setItem(DEMO_FLAG, '0');
    return { ok: true, user };
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(DEMO_FLAG);
  },

  current() {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  },

  isDemo() {
    return localStorage.getItem(DEMO_FLAG) === '1';
  },

  // Guard: chama no início de páginas /app/. Redireciona se não logado.
  requireAuth() {
    if (!this.current()) {
      window.location.href = '../index.html';
      return false;
    }
    return true;
  },

  requireAdmin() {
    const u = this.current();
    if (!u || !u.isAdmin) {
      window.location.href = 'dashboard.html';
      return false;
    }
    return true;
  },

  // No modo demo, bloqueia ação destrutiva. Retorna true se foi bloqueada.
  blockIfDemo(actionName = 'esta ação') {
    if (this.isDemo()) {
      window.UI?.toast(`Modo demonstração: ${actionName} desabilitada.`, 'warning');
      return true;
    }
    return false;
  }
};
