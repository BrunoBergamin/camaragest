// CâmaraGest: Auth Mock (login fake via localStorage)
// Em produção, troca por Supabase Auth.

const AUTH_KEY = 'camaragest_user';
const DEMO_FLAG = 'camaragest_is_demo';

window.Auth = {
  loginAs(usuarioId, isDemo = false) {
    // Aceita ID de vereador OU atendente
    const user = window.getUsuario ? window.getUsuario(usuarioId) : window.getVereador(usuarioId);
    if (!user) return false;
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    localStorage.setItem(DEMO_FLAG, isDemo ? '1' : '0');
    return true;
  },

  loginEmailSenha(email, senha) {
    // Procura em vereadores, atendentes e superadmins
    const todos = [...MOCK_DATA.vereadores, ...(MOCK_DATA.atendentes || []), ...(MOCK_DATA.superadmins || [])];
    const user = todos.find(u => u.email === email);
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

  // Apenas superadmin (Omini Fox)
  requireSuperadmin() {
    const u = this.current();
    if (!u || u.papel !== 'superadmin') {
      window.location.href = 'dashboard.html';
      return false;
    }
    return true;
  },

  // Compatibilidade: requireAdmin agora exige superadmin
  requireAdmin() {
    return this.requireSuperadmin();
  },

  // Usuário pode gerenciar demandas? Atendente OU Superadmin
  podeGerenciarDemandas() {
    const u = this.current();
    if (!u) return false;
    return u.papel === 'superadmin' || u.papel === 'atendente';
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
