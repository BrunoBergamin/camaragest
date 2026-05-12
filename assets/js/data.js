// Câmara de Iperó: Dados dos vereadores reais (legislatura 2025-2028)
// Fonte: site oficial https://camaraipero.sp.gov.br/

// URL absoluta do site (raiz do projeto), funciona em /app/ e na raiz, GitHub Pages e localhost
const BASE = (function () {
  const path = location.pathname;
  if (path.includes('/app/')) {
    return path.substring(0, path.indexOf('/app/') + 1);
  }
  const last = path.lastIndexOf('/');
  return last >= 0 ? path.substring(0, last + 1) : '/';
})();

window.MOCK_DATA = {
  // Super-admin (Omini Fox): só nós temos acesso. Não aparece em listagens públicas.
  superadmins: [
    {
      id: 's1',
      nome: 'Omini Fox',
      cargo: 'Administrador do Sistema',
      bio: 'Equipe técnica responsável pela manutenção e configuração da plataforma.',
      foto: 'https://i.pravatar.cc/300?u=ominifox',
      telefone: '',
      email: 'admin@ominifox.com.br',
      papel: 'superadmin',
      isAdmin: true,
      ativo: true
    }
  ],

  atendentes: [
    {
      id: 'a1',
      nome: 'Maria',
      cargo: 'Atendente',
      bio: 'Atendente do gabinete da Câmara. Recebe demandas dos cidadãos e direciona aos vereadores responsáveis.',
      foto: 'https://i.pravatar.cc/300?img=47',
      telefone: '(15) 3266-3446',
      email: 'atendimento@camaraipero.sp.gov.br',
      papel: 'atendente',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'a2',
      nome: 'Rafael Costa',
      cargo: 'Atendente',
      bio: 'Atendente do gabinete. Cadastra ofícios, atende telefone e protocola pedidos da população.',
      foto: 'https://i.pravatar.cc/300?img=33',
      telefone: '(15) 3266-3446',
      email: 'atendimento2@camaraipero.sp.gov.br',
      papel: 'atendente',
      isAdmin: false,
      ativo: true
    }
  ],

  vereadores: [
    {
      id: 'v1',
      nome: 'Alysson Alessandro de Barros',
      cargo: 'Presidente da Câmara',
      partido: 'Podemos',
      bio: 'Presidente da Câmara Municipal de Iperó. 5º mandato consecutivo. Bacharel em Direito (Universidade Paulista) e formação em Gestão Pública (Estácio). Servidor público municipal desde 2001.',
      foto: BASE + 'assets/images/vereadores/v1.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.alysson@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v2',
      nome: 'Anderson Fernando Marques de Almeida',
      cargo: '1º Secretário',
      partido: 'MDB',
      bio: 'Primeiro-Secretário da Mesa Diretora da Câmara Municipal de Iperó. Conhecido como Anderson Parma.',
      foto: BASE + 'assets/images/vereadores/v2.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.anderson@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v3',
      nome: 'Angelo Valário Sobrinho',
      cargo: 'Vereador',
      partido: 'Podemos',
      bio: 'Advogado e vereador pelo Podemos. Conhecido como Nenão. Exerceu a Presidência da Câmara no biênio 2021-2022.',
      foto: BASE + 'assets/images/vereadores/v3.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.angelo@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v4',
      nome: 'Cleyton dos Santos Batista de Jesus',
      cargo: 'Vereador',
      partido: 'Cidadania',
      bio: 'Vereador pelo Cidadania. Relator da Comissão de Obras e Serviços Públicos. Suplente na Comissão de Educação, Saúde, Assistência Social e Meio Ambiente.',
      foto: BASE + 'assets/images/vereadores/v4.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.cleyton@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v5',
      nome: 'Josimar Aparecido Ferreira',
      cargo: 'Vereador',
      partido: 'PSB',
      bio: 'Conhecido como Joca. Segundo mandato como vereador (2021-2024 e 2025-2028). Integrou a Mesa Diretora no período de 2020 a 2022.',
      foto: BASE + 'assets/images/vereadores/v5.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.josimar@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v6',
      nome: 'Luis Rodrigues Moreira',
      cargo: '2º Secretário',
      partido: 'PSD',
      bio: 'Segundo-Secretário da Mesa Diretora. Conhecido como Nino Dan. Filiado ao Partido Social Democrático.',
      foto: BASE + 'assets/images/vereadores/v6.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.luis@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v7',
      nome: 'Maria Goreti Gomes',
      cargo: 'Vereadora',
      partido: 'PSD',
      bio: 'Conhecida como Goreti. Presidente da Comissão de Educação, Saúde, Assistência Social e Meio Ambiente (2025-2026). Graduada em Gestão Pública e cursando Neurociência.',
      foto: BASE + 'assets/images/vereadores/v7.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.goreti@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v8',
      nome: 'Sérgio Poli Simon',
      cargo: 'Vereador',
      partido: 'PSD',
      bio: 'Presidente da Comissão de Finanças e Orçamento (2025-2026). Ensino superior completo. Filiado ao PSD.',
      foto: BASE + 'assets/images/vereadores/v8.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.sergio@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v9',
      nome: 'Valéria Regina Matheus de Souza',
      cargo: 'Vereadora',
      partido: 'Republicanos',
      bio: 'Vereadora pelo Republicanos. Membro da Comissão de Finanças e Orçamento (2025-2026).',
      foto: BASE + 'assets/images/vereadores/v9.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.valeria@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v10',
      nome: 'Valter Rodrigues Vieira',
      cargo: 'Vereador',
      partido: 'PSD',
      bio: 'Conhecido como Valtinho. Filiado ao PSD. Formação em Gestão Pública.',
      foto: BASE + 'assets/images/vereadores/v10.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.valter@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v11',
      nome: 'Vinicius Antonio de Paula Moraga Ramos',
      cargo: '3º Secretário',
      partido: 'PSB',
      bio: 'Terceiro-Secretário da Mesa Diretora. Conhecido como Bob. Graduado em Gestão Pública pela Anhanguera.',
      foto: BASE + 'assets/images/vereadores/v11.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.vinicius@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v12',
      nome: 'Waldir Luiz Paula Leite',
      cargo: 'Vereador',
      partido: 'Republicanos',
      bio: 'Vereador pelo Republicanos. Membro da Comissão de Justiça e Redação (2025-2026).',
      foto: BASE + 'assets/images/vereadores/v12.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.waldir@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    },
    {
      id: 'v13',
      nome: 'Willians Fagundes',
      cargo: 'Vice-Presidente',
      partido: 'Podemos',
      bio: 'Vice-Presidente da Câmara Municipal de Iperó. Graduado em Gestão Pública e pós-graduado em Gestão de Cidades.',
      foto: BASE + 'assets/images/vereadores/v13.jpg',
      telefone: '(15) 3266-3446',
      email: 'ver.willians@camaraipero.sp.gov.br',
      isAdmin: false,
      ativo: true
    }
  ],

  tarefas: [
    {
      id: 't1',
      titulo: 'Visita técnica à obra da nova UBS',
      descricao: 'Visitar o canteiro de obras da Unidade Básica de Saúde do bairro Centro e elaborar relatório do andamento.',
      responsavelId: 'v7',
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
      responsavelId: 'v4',
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
      responsavelId: 'v9',
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
      responsavelId: 'v7',
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
      responsavelId: 'v12',
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
      responsavelId: 'v4',
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
      responsavelId: 'v13',
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
      autorId: 'v7',
      titulo: 'Andamento da obra da UBS Centro',
      descricao: 'Visita técnica realizada na obra da nova Unidade Básica de Saúde do Centro. Estrutura externa em fase final, com previsão de conclusão em julho. Os equipamentos já foram adquiridos. A entrega à população deve ocorrer em agosto após a vistoria sanitária.',
      categoria: 'projeto',
      localizacao: 'Centro - Iperó/SP',
      criadoEm: '2026-05-03',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80', legenda: 'Fachada externa da UBS' },
        { url: 'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=800&q=80', legenda: 'Área interna em acabamento' },
        { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', legenda: 'Sala de espera em montagem' }
      ]
    },
    {
      id: 'r2',
      autorId: 'v4',
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
      autorId: 'v9',
      titulo: 'Festival de Cultura Popular 2026',
      descricao: 'Acompanhei o Festival de Cultura Popular de Iperó realizado no último final de semana. Excelente participação de grupos folclóricos locais e regionais. Reforça a importância da cultura como instrumento de coesão social.',
      categoria: 'evento',
      localizacao: 'Praça Central - Iperó/SP',
      criadoEm: '2026-04-29',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', legenda: 'Apresentação de grupo folclórico' },
        { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80', legenda: 'Público presente no festival' },
        { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80', legenda: 'Barracas de comidas típicas' }
      ]
    },
    {
      id: 'r4',
      autorId: 'v12',
      titulo: 'Plantio de mudas no Parque Municipal',
      descricao: 'Acompanhei a ação de plantio de 200 mudas de espécies nativas no Parque Municipal, em parceria com escolas da rede pública. Iniciativa importante para conscientização ambiental.',
      categoria: 'projeto',
      localizacao: 'Parque Municipal - Iperó/SP',
      criadoEm: '2026-04-27',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', legenda: 'Plantio com participação de alunos' },
        { url: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80', legenda: 'Mudas de espécies nativas' }
      ]
    },
    {
      id: 'r5',
      autorId: 'v8',
      titulo: 'Visita à delegacia: melhorias necessárias',
      descricao: 'Realizei visita à delegacia municipal e identifiquei necessidades de melhorias estruturais e ampliação do efetivo policial. Apresentarei requerimento na próxima sessão.',
      categoria: 'situacao_cidade',
      localizacao: 'Centro - Iperó/SP',
      criadoEm: '2026-04-25',
      imagens: [
        { url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80', legenda: 'Fachada da delegacia' }
      ]
    }
  ],

  demandas: [
    {
      id: 'd1',
      protocolo: '2026-001',
      cidadao: { nome: 'José Antônio Pereira', telefone: '(15) 99876-1234', endereco: 'Rua das Acácias, 234', bairro: 'Vila Nova' },
      categoria: 'obras',
      descricao: 'Buracos enormes na Rua das Acácias estão impedindo passagem de carros e ônibus escolares. Necessária urgência no recapeamento.',
      regiao: 'Vila Nova',
      vereadoresResponsaveis: ['v4', 'v6'],
      atendenteId: 'a1',
      status: 'em_atendimento',
      prioridade: 'alta',
      criadaEm: '2026-05-04',
      observacoes: 'Cidadão relata risco de acidente com crianças.'
    },
    {
      id: 'd2',
      protocolo: '2026-002',
      cidadao: { nome: 'Maria das Graças Lima', telefone: '(15) 99765-4321', endereco: 'Av. Brasil, 1500', bairro: 'Centro' },
      categoria: 'saude',
      descricao: 'Falta de médico na UBS do Centro às quartas-feiras. Mães com bebês ficam sem atendimento.',
      regiao: 'Centro',
      vereadoresResponsaveis: ['v7', 'v1'],
      atendenteId: 'a1',
      status: 'aberta',
      prioridade: 'alta',
      criadaEm: '2026-05-05',
      observacoes: ''
    },
    {
      id: 'd3',
      protocolo: '2026-003',
      cidadao: { nome: 'Carlos Eduardo Souza', telefone: '(15) 99654-3210', endereco: 'Rua dos Ipês, 78', bairro: 'Jardim Bela Vista' },
      categoria: 'iluminacao',
      descricao: 'Postes apagados há mais de 2 semanas na Rua dos Ipês, gerando insegurança à noite.',
      regiao: 'Jardim Bela Vista',
      vereadoresResponsaveis: ['v3'],
      atendenteId: 'a2',
      status: 'aberta',
      prioridade: 'media',
      criadaEm: '2026-05-05',
      observacoes: ''
    },
    {
      id: 'd4',
      protocolo: '2026-004',
      cidadao: { nome: 'Ana Beatriz Ferreira', telefone: '(15) 99543-2109', endereco: 'Praça da Matriz, s/n', bairro: 'Centro' },
      categoria: 'cultura',
      descricao: 'Sugestão de criação de feira cultural mensal na praça central com artesãos locais.',
      regiao: 'Centro',
      vereadoresResponsaveis: ['v9', 'v11'],
      atendenteId: 'a1',
      status: 'em_atendimento',
      prioridade: 'baixa',
      criadaEm: '2026-04-30',
      observacoes: 'Sugestão muito bem recebida pelos vereadores.'
    },
    {
      id: 'd5',
      protocolo: '2026-005',
      cidadao: { nome: 'Roberto Silva Santos', telefone: '(15) 99432-1098', endereco: 'Rua Primavera, 45', bairro: 'Jardim Primavera' },
      categoria: 'seguranca',
      descricao: 'Aumento de furtos no bairro nas últimas semanas. Solicita aumento do efetivo policial e ronda noturna.',
      regiao: 'Jardim Primavera',
      vereadoresResponsaveis: ['v8'],
      atendenteId: 'a1',
      status: 'aberta',
      prioridade: 'alta',
      criadaEm: '2026-05-06',
      observacoes: ''
    },
    {
      id: 'd6',
      protocolo: '2026-006',
      cidadao: { nome: 'Lúcia Helena Martins', telefone: '(15) 99321-0987', endereco: 'Rua das Flores, 100', bairro: 'Vila Nova' },
      categoria: 'meio_ambiente',
      descricao: 'Lixo acumulado em terreno baldio próximo à escola está atraindo ratos e insetos.',
      regiao: 'Vila Nova',
      vereadoresResponsaveis: ['v12'],
      atendenteId: 'a2',
      status: 'resolvida',
      prioridade: 'alta',
      criadaEm: '2026-04-25',
      observacoes: 'Limpeza realizada pela prefeitura em 02/05.'
    },
    {
      id: 'd7',
      protocolo: '2026-007',
      cidadao: { nome: 'Paulo Henrique Oliveira', telefone: '(15) 99210-9876', endereco: 'Av. Central, 800', bairro: 'Centro' },
      categoria: 'educacao',
      descricao: 'Pais reclamam de falta de merenda escolar adequada na escola municipal Anita Garibaldi.',
      regiao: 'Centro',
      vereadoresResponsaveis: ['v7'],
      atendenteId: 'a1',
      status: 'em_atendimento',
      prioridade: 'alta',
      criadaEm: '2026-05-01',
      observacoes: 'Vereadora Goreti já protocolou requerimento.'
    },
    {
      id: 'd8',
      protocolo: '2026-008',
      cidadao: { nome: 'Sandra Regina Costa', telefone: '(15) 99109-8765', endereco: 'Rua Bela Vista, 22', bairro: 'Jardim Bela Vista' },
      categoria: 'social',
      descricao: 'Idosa solicita ajuda para acessar benefício do BPC. Não tem familiares para auxiliar.',
      regiao: 'Jardim Bela Vista',
      vereadoresResponsaveis: ['v10', 'v3'],
      atendenteId: 'a2',
      status: 'aberta',
      prioridade: 'media',
      criadaEm: '2026-05-06',
      observacoes: 'Encaminhada também ao CRAS.'
    }
  ],

  // Assessores: vereador pode cadastrar pessoas da sua equipe de gabinete
  assessores: [
    {
      id: 'as1',
      vereadorId: 'v1',
      nome: 'Lucas Andrade',
      cargo: 'Assessor Parlamentar',
      telefone: '(15) 99888-1111',
      email: 'lucas.andrade@camaraipero.sp.gov.br',
      foto: 'https://i.pravatar.cc/300?img=68',
      ativo: true
    },
    {
      id: 'as2',
      vereadorId: 'v1',
      nome: 'Camila Ferreira',
      cargo: 'Assessora de Imprensa',
      telefone: '(15) 99888-2222',
      email: 'camila.ferreira@camaraipero.sp.gov.br',
      foto: 'https://i.pravatar.cc/300?img=45',
      ativo: true
    },
    {
      id: 'as3',
      vereadorId: 'v7',
      nome: 'Bruno Santos',
      cargo: 'Assessor Parlamentar',
      telefone: '(15) 99888-3333',
      email: 'bruno.santos@camaraipero.sp.gov.br',
      foto: 'https://i.pravatar.cc/300?img=51',
      ativo: true
    }
  ]
};

// Helpers de acesso
window.getVereador = (id) => MOCK_DATA.vereadores.find(v => v.id === id);
window.getAtendente = (id) => MOCK_DATA.atendentes.find(a => a.id === id);
window.getSuperadmin = (id) => (MOCK_DATA.superadmins || []).find(s => s.id === id);
window.getAssessor = (id) => (MOCK_DATA.assessores || []).find(a => a.id === id);
window.getUsuario = (id) => getVereador(id) || getAtendente(id) || getSuperadmin(id);
window.getTarefa = (id) => MOCK_DATA.tarefas.find(t => t.id === id);
window.getRelatorio = (id) => MOCK_DATA.relatorios.find(r => r.id === id);
window.getDemanda = (id) => MOCK_DATA.demandas.find(d => d.id === id);
window.getAssessoresDoVereador = (vereadorId) => (MOCK_DATA.assessores || []).filter(a => a.vereadorId === vereadorId && a.ativo);

// Retorna o papel do usuário: 'superadmin' | 'atendente' | 'vereador'
window.getPapel = function(user) {
  if (!user) return null;
  if (user.papel === 'superadmin' || (user.isAdmin && user.id && user.id.startsWith('s'))) return 'superadmin';
  if (user.papel === 'atendente') return 'atendente';
  return 'vereador';
};

window.papelLabel = (p) => ({
  superadmin: 'Administrador',
  atendente: 'Atendente',
  vereador: 'Vereador'
}[p] || p);

// Resolve o caminho da foto do usuário corretamente (lida com BASE diferente entre páginas)
// Se for dataURL (upload local), usa direto. Senão, busca do MOCK_DATA com BASE da página atual.
window.getFotoAtual = function(user) {
  if (!user) return '';
  if (user.foto && user.foto.startsWith('data:')) return user.foto;
  const v = getVereador(user.id);
  return v ? v.foto : (user.foto || '');
};

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
  pendente: 'badge-danger',
  em_andamento: 'badge-warning',
  concluida: 'badge-success'
}[s] || 'badge-muted');

// Cor hex padrão por status (usado em bolinhas, gráficos, bordas)
window.statusCor = (s) => ({
  pendente: '#dc2626',     // vermelho
  em_andamento: '#f59e0b', // amarelo
  concluida: '#10b981'     // verde
}[s] || '#9ca3af');

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

// === Hierarquia da Mesa Diretora ===
// Ordem oficial: Presidente, Vice, 1º Sec, 2º Sec, 3º Sec, depois vereadores comuns
window.hierarquiaMesa = function(cargo) {
  if (!cargo) return 99;
  if (/Presidente da Câmara|^Presidente$/i.test(cargo)) return 1;
  if (/Vice-?Presidente/i.test(cargo)) return 2;
  if (/1º|Primeiro/i.test(cargo)) return 3;
  if (/2º|Segundo/i.test(cargo)) return 4;
  if (/3º|Terceiro/i.test(cargo)) return 5;
  return 99;
};

// Retorna classe CSS do badge do cargo
window.cargoBadgeClass = function(cargo) {
  if (!cargo) return 'badge-vereador-comum';
  if (/Presidente da Câmara|^Presidente$/i.test(cargo)) return 'badge-mesa-presidente';
  if (/Vice-?Presidente/i.test(cargo)) return 'badge-mesa-vice';
  if (/Secret[áa]rio/i.test(cargo)) return 'badge-mesa-secretario';
  return 'badge-vereador-comum';
};

// Retorna ícone do cargo (emoji decorativo)
window.cargoIcone = function(cargo) {
  if (!cargo) return '';
  if (/Presidente da Câmara|^Presidente$/i.test(cargo)) return '⚜️';
  if (/Vice-?Presidente/i.test(cargo)) return '🎖️';
  if (/Secret[áa]rio/i.test(cargo)) return '📝';
  return '';
};

// É membro da Mesa Diretora?
window.ehMesaDiretora = function(cargo) {
  return hierarquiaMesa(cargo) < 99;
};

// === Demandas: helpers ===
window.demandaCategorias = [
  { id: 'saude', label: 'Saúde', icone: '🏥' },
  { id: 'educacao', label: 'Educação', icone: '📚' },
  { id: 'obras', label: 'Obras e Pavimentação', icone: '🚧' },
  { id: 'iluminacao', label: 'Iluminação Pública', icone: '💡' },
  { id: 'seguranca', label: 'Segurança', icone: '👮' },
  { id: 'meio_ambiente', label: 'Meio Ambiente', icone: '🌳' },
  { id: 'cultura', label: 'Cultura e Lazer', icone: '🎭' },
  { id: 'social', label: 'Assistência Social', icone: '🤝' },
  { id: 'transporte', label: 'Transporte', icone: '🚌' },
  { id: 'outros', label: 'Outros', icone: '📋' }
];

window.demandaCategoriaLabel = (id) => {
  const c = demandaCategorias.find(x => x.id === id);
  return c ? `${c.icone} ${c.label}` : id;
};

window.demandaStatusLabel = (s) => ({
  aberta: 'Aberta',
  em_atendimento: 'Em atendimento',
  resolvida: 'Resolvida',
  arquivada: 'Arquivada'
}[s] || s);

window.demandaStatusBadge = (s) => ({
  aberta: 'badge-danger',
  em_atendimento: 'badge-warning',
  resolvida: 'badge-success',
  arquivada: 'badge-muted'
}[s] || 'badge-muted');

window.demandaStatusCor = (s) => ({
  aberta: '#dc2626',           // vermelho
  em_atendimento: '#f59e0b',   // amarelo
  resolvida: '#10b981',        // verde
  arquivada: '#9ca3af'         // cinza
}[s] || '#9ca3af');

// Fallback de imagem: SVG inline verde com ícone de câmera
window.imgFallback = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230F5132'/%3E%3Cstop offset='1' stop-color='%230a3d24'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='800' height='600'/%3E%3Ctext x='50%25' y='45%25' fill='%23FFD700' font-family='sans-serif' font-size='80' text-anchor='middle' dy='.3em'%3E%F0%9F%93%B7%3C/text%3E%3Ctext x='50%25' y='65%25' fill='%23FFD700' font-family='sans-serif' font-size='22' font-weight='600' text-anchor='middle'%3EImagem indispon%C3%ADvel%3C/text%3E%3C/svg%3E";
