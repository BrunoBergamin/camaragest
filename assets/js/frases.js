// Frases motivacionais políticas: aparecem no dashboard a cada acesso

window.FRASES_MOTIVACIONAIS = [
  { texto: "Aquele que não se ocupa de política está destinado a ser governado por homens piores que ele.", autor: "Platão" },
  { texto: "A política é a arte de viver junto.", autor: "Aristóteles" },
  { texto: "Servir ao povo é a maior das nobrezas.", autor: "Provérbio popular" },
  { texto: "A boa política se mede em obras, não em palavras.", autor: "Anônimo" },
  { texto: "Transparência é o oxigênio da democracia.", autor: "Anônimo" },
  { texto: "Quando o povo é forte, o representante é digno.", autor: "Anônimo" },
  { texto: "Cada decisão de hoje constrói a cidade de amanhã.", autor: "Anônimo" },
  { texto: "A democracia não se vive em silêncio.", autor: "Anônimo" },
  { texto: "Política sem propósito é vaidade. Com propósito, é serviço.", autor: "Anônimo" },
  { texto: "A força de uma cidade está em sua câmara unida.", autor: "Anônimo" },
  { texto: "Quem está no poder deve servir, não se servir.", autor: "Provérbio popular" },
  { texto: "O verdadeiro líder vê longe, age perto e ouve sempre.", autor: "Anônimo" },
  { texto: "Cada cidadão atendido é uma vitória da democracia.", autor: "Anônimo" },
  { texto: "Não basta legislar bem; é preciso ser exemplo do que se legisla.", autor: "Anônimo" },
  { texto: "A grandeza de um povo se vê no respeito aos seus representantes, e a grandeza dos representantes se vê no respeito ao seu povo.", autor: "Anônimo" },
  { texto: "Quem governa com humildade vence pela confiança, não pelo medo.", autor: "Anônimo" },
  { texto: "Trabalhar pelo bem comum é o mandato de todo verdadeiro vereador.", autor: "Anônimo" },
  { texto: "A política se faz com responsabilidade hoje, para que se colha respeito amanhã.", autor: "Anônimo" },
  { texto: "Onde há diálogo, há democracia; onde há ação, há transformação.", autor: "Anônimo" },
  { texto: "O bem da cidade é a maior glória do legislador.", autor: "Anônimo" }
];

// Retorna frase do dia (mesma frase pro mesmo dia, mas muda diariamente)
window.getFraseDoDia = function() {
  const lista = window.FRASES_MOTIVACIONAIS;
  const hoje = new Date();
  const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 86400000);
  return lista[diaDoAno % lista.length];
};

// Retorna frase aleatória (muda a cada acesso)
window.getFraseAleatoria = function() {
  const lista = window.FRASES_MOTIVACIONAIS;
  return lista[Math.floor(Math.random() * lista.length)];
};
