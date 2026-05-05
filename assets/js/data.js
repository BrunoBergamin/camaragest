// CâmaraGest: Dados mockados para demonstração
// Em produção, esses dados virão do Supabase. No protótipo, ficam aqui.

window.MOCK_DATA = {
  vereadores: [
    {
      id: 'v1',
      nome: 'João Silva Pereira',
      cargo: 'Presidente',
      partido: 'PSD',
      bio: 'Presidente da Câmara Municipal de Iperó. 3º mandato. Foco em transparência e modernização da gestão pública.',
      foto: 'https://i.pravatar.cc/300?img=12',
      telefone: '(15) 98765-4321',
      email: 'joao.silva@camaraipero.sp.gov.br',
      isAdmin: true,
      ativo: true
    },
    {
      id: 'v2',
      nome: 'Maria Aparecida Souza',
      cargo: 'Vereadora',
      partido: 'PT',
      bio: 'Vereadora atuante nas áreas de educação e saúde pública. Engenheira de formação.',
      foto: 'https://i.pravatar.cc/300?img=49',
      telefone: '(15) 98765-1111',
      email: 'maria.souza@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v3',
      nome: 'Carlos Eduardo Rocha',
      cargo: 'Vereador',
      partido: 'MDB',
      bio: 'Vereador focado em infraestrutura urbana e mobilidade. Engenheiro civil.',
      foto: 'https://i.pravatar.cc/300?img=33',
      telefone: '(15) 98765-2222',
      email: 'carlos.rocha@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v4',
      nome: 'Ana Beatriz Lima',
      cargo: 'Vereadora',
      partido: 'PSDB',
      bio: 'Vereadora dedicada à juventude, esporte e cultura. Formada em Direito.',
      foto: 'https://i.pravatar.cc/300?img=44',
      telefone: '(15) 98765-3333',
      email: 'ana.lima@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v5',
      nome: 'Roberto Almeida Santos',
      cargo: 'Vereador',
      partido: 'PL',
      bio: 'Vereador focado em segurança pública e desenvolvimento econômico local.',
      foto: 'https://i.pravatar.cc/300?img=68',
      telefone: '(15) 98765-4444',
      email: 'roberto.santos@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v6',
      nome: 'Patrícia Mendes Oliveira',
      cargo: 'Vereadora',
      partido: 'PP',
      bio: 'Vereadora atuante em meio ambiente e sustentabilidade. Bióloga de formação.',
      foto: 'https://i.pravatar.cc/300?img=47',
      telefone: '(15) 98765-5555',
      email: 'patricia.mendes@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    }
  ],

  tarefas: [
    {
      id: 't1',
      titulo: 'Visita técnica à obra da nova UBS',
      descricao: 'Visitar o canteiro de obras da Unidade Básica de Saúde do bairro Centro e elaborar relatório do andamento.',
      responsavelId: 'v2',
      criadorId: 'v1',
      status: 'em_andamento',
      prioridade: 'alta',
      prazo: '2026-05-12',
      criadaEm: '2026-05-01'
    },
    {
      id: 't2',
      titulo: 'Audiência pública sobre orçamento 2027',
      descricao: 'Organizar audiência pública (formato híbrido) para discussão do orçamento do próximo ano. Cidadãos podem participar online via plataforma.',
      responsavelId: 'v1',
      criadorId: 'v1',
      status: 'pendente',
      prioridade: 'alta',
      prazo: '2026-05-20',
      criadaEm: '2026-04-28',
      videochamada: true,
      salaJitsi: 'AudienciaPublica-Orcamento2027-Ipero'
    },
    {
      id: 't3',
      titulo: 'Reunião com associação de moradores Vila Nova',
      descricao: 'Atender demandas de pavimentação e iluminação pública apresentadas pela associação.',
      responsavelId: 'v3',
      criadorId: 'v1',
      status: 'pendente',
      prioridade: 'media',
      prazo: '2026-05-15',
      criadaEm: '2026-05-02'
    },
    {
      id: 't4',
      titulo: 'Projeto de lei: incentivo cultural',
      descricao: 'Elaborar minuta de projeto de lei de incentivo a eventos culturais municipais.',
      responsavelId: 'v4',
      criadorId: 'v1',
      status: 'em_andamento',
      prioridade: 'media',
      prazo: '2026-05-25',
      criadaEm: '2026-04-25'
    },
    {
      id: 't5',
      titulo: 'Resposta ofício 0125/2026',
      descricao: 'Elaborar resposta ao ofício recebido do Executivo sobre questionamento da área de educação.',
      responsavelId: 'v2',
      criadorId: 'v1',
      status: 'concluida',
      prioridade: 'media',
      prazo: '2026-04-30',
      criadaEm: '2026-04-22'
    },
    {
      id: 't6',
      titulo: 'Vistoria praça central',
      descricao: 'Vistoriar manutenção da praça central após reclamações dos moradores.',
      responsavelId: 'v6',
      criadorId: 'v1',
      status: 'concluida',
      prioridade: 'baixa',
      prazo: '2026-04-28',
      criadaEm: '2026-04-20'
    },
    {
      id: 't7',
      titulo: 'Reunião de Comissão de Obras (online)',
      descricao: 'Reunião remota da comissão para discutir andamento das obras públicas. Modalidade videochamada conforme Lei 14.030/2020.',
      responsavelId: 'v3',
      criadorId: 'v1',
      status: 'em_andamento',
      prioridade: 'alta',
      prazo: '2026-06-10',
      criadaEm: '2026-04-15',
      videochamada: true,
      salaJitsi: 'ComissaoObras-Junho2026-Ipero'
    },
    {
      id: 't8',
      titulo: 'Sessão solene Dia do Trabalho',
      descricao: 'Organizar sessão solene em homenagem ao Dia do Trabalho.',
      responsavelId: 'v5',
      criadorId: 'v1',
      status: 'concluida',
      prioridade: 'baixa',
      prazo: '2026-05-01',
      criadaEm: '2026-04-10'
    }
  ],

  relatorios: [
    {
      id: 'r1',
      autorId: 'v2',
      titulo: 'Andamento da obra da UBS Centro',
      descricao: 'Visita técnica realizada na obra da nova Unidade Básica de Saúde do Centro. Estrutura externa em fase final, com previsão de conclusão em julho. Os equipamentos já foram adquiridos. A entrega à população deve ocorrer em agosto após a vistoria sanitária.',
      categoria: 'projeto',
      localizacao: 'Centro - Iperó/SP',
      criadoEm: '2026-05-03',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800', legenda: 'Fachada externa da UBS' },
        { url: 'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=800', legenda: 'Área interna em acabamento' },
        { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800', legenda: 'Sala de espera em montagem' }
      ]
    },
    {
      id: 'r2',
      autorId: 'v3',
      titulo: 'Buracos na Rua das Acácias',
      descricao: 'Recebemos diversas reclamações de moradores sobre buracos na Rua das Acácias, no bairro Vila Nova. Realizei vistoria e constatei a necessidade urgente de recapeamento. Solicitei oficialmente ao Executivo providências.',
      categoria: 'situacao_cidade',
      localizacao: 'Vila Nova - Iperó/SP',
      criadoEm: '2026-05-02',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80', legenda: 'Buraco em frente à escola' },
        { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', legenda: 'Trecho danificado da via' }
      ]
    },
    {
      id: 'r3',
      autorId: 'v4',
      titulo: 'Festival de Cultura Popular 2026',
      descricao: 'Acompanhei o Festival de Cultura Popular de Iperó realizado no último final de semana. Excelente participação de grupos folclóricos locais e regionais. Reforça a importância da cultura como instrumento de coesão social.',
      categoria: 'evento',
      localizacao: 'Praça Central - Iperó/SP',
      criadoEm: '2026-04-29',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', legenda: 'Apresentação de grupo folclórico' },
        { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800', legenda: 'Público presente no festival' },
        { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800', legenda: 'Barracas de comidas típicas' }
      ]
    },
    {
      id: 'r4',
      autorId: 'v6',
      titulo: 'Plantio de mudas no Parque Municipal',
      descricao: 'Acompanhei a ação de plantio de 200 mudas de espécies nativas no Parque Municipal, em parceria com escolas da rede pública. Iniciativa importante para conscientização ambiental.',
      categoria: 'projeto',
      localizacao: 'Parque Municipal - Iperó/SP',
      criadoEm: '2026-04-27',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800', legenda: 'Plantio com participação de alunos' },
        { url: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800', legenda: 'Mudas de espécies nativas' }
      ]
    },
    {
      id: 'r5',
      autorId: 'v5',
      titulo: 'Visita à delegacia: melhorias necessárias',
      descricao: 'Realizei visita à delegacia municipal e identifiquei necessidades de melhorias estruturais e ampliação do efetivo policial. Apresentarei requerimento na próxima sessão.',
      categoria: 'situacao_cidade',
      localizacao: 'Centro - Iperó/SP',
      criadoEm: '2026-04-25',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800', legenda: 'Fachada da delegacia' }
      ]
    }
  ]
};

// Helpers de acesso
window.getVereador = (id) => MOCK_DATA.vereadores.find(v => v.id === id);
window.getTarefa = (id) => MOCK_DATA.tarefas.find(t => t.id === id);
window.getRelatorio = (id) => MOCK_DATA.relatorios.find(r => r.id === id);

// Fallback de imagem: SVG inline verde com ícone de câmera (sempre carrega, mesmo offline)
window.imgFallback = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230F5132'/%3E%3Cstop offset='1' stop-color='%230a3d24'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='800' height='600'/%3E%3Ctext x='50%25' y='45%25' fill='%23FFD700' font-family='sans-serif' font-size='80' text-anchor='middle' dy='.3em'%3E%F0%9F%93%B7%3C/text%3E%3Ctext x='50%25' y='65%25' fill='%23FFD700' font-family='sans-serif' font-size='22' font-weight='600' text-anchor='middle'%3EImagem indispon%C3%ADvel%3C/text%3E%3C/svg%3E";

window.fmtData = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
};

window.statusLabel = (s) => ({
  pendente: 'Pendente',
  em_andamento: 'Em andamento',
  concluida: 'Concluída'
}[s] || s);

window.statusBadge = (s) => ({
  pendente: 'badge-muted',
  em_andamento: 'badge-warning',
  concluida: 'badge-success'
}[s] || 'badge-muted');

window.prioridadeLabel = (p) => ({ baixa: 'Baixa', media: 'Média', alta: 'Alta' }[p] || p);
window.prioridadeBadge = (p) => ({
  baixa: 'badge-primary',
  media: 'badge-warning',
  alta: 'badge-danger'
}[p] || 'badge-muted');

window.categoriaLabel = (c) => ({
  projeto: 'Projeto',
  situacao_cidade: 'Situação da cidade',
  evento: 'Evento',
  outro: 'Outro'
}[c] || c);
