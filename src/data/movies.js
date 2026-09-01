const img = (seed, w = 900, h = 520) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const movies = [
  { id: 1, title: 'Horizonte Zero', year: 2026, rating: '14', duration: '2h 08min', match: 98, genres: ['Ficção científica', 'Aventura'], description: 'Após uma falha global de energia, uma engenheira descobre um sinal vindo de uma estação que deveria estar abandonada há décadas.', poster: img('horizonte-zero', 520, 780), backdrop: img('horizonte-zero-backdrop', 1600, 900), categories: ['Em alta', 'Ficção científica'] },
  { id: 2, title: 'Linha de Fuga', year: 2025, rating: '16', duration: '1h 52min', match: 94, genres: ['Ação', 'Suspense'], description: 'Um ex-piloto aceita uma última missão e descobre que o alvo da operação conhece todos os seus movimentos.', poster: img('linha-de-fuga', 520, 780), backdrop: img('linha-de-fuga-backdrop', 1600, 900), categories: ['Em alta', 'Ação'] },
  { id: 3, title: 'Código Aurora', year: 2026, rating: '12', duration: '2h 01min', match: 96, genres: ['Tecnologia', 'Drama'], description: 'Dois estudantes criam um sistema capaz de prever crises urbanas, mas o projeto começa a tomar decisões por conta própria.', poster: img('codigo-aurora', 520, 780), backdrop: img('codigo-aurora-backdrop', 1600, 900), categories: ['Lançamentos', 'Tecnologia'] },
  { id: 4, title: 'Distrito 9:47', year: 2024, rating: '16', duration: '1h 44min', match: 91, genres: ['Crime', 'Mistério'], description: 'Toda noite, exatamente às 9:47, uma câmera de segurança registra alguém que não deveria estar ali.', poster: img('distrito-947', 520, 780), backdrop: img('distrito-947-backdrop', 1600, 900), categories: ['Suspense', 'Em alta'] },
  { id: 5, title: 'Maré Vermelha', year: 2025, rating: '14', duration: '1h 57min', match: 89, genres: ['Drama', 'Aventura'], description: 'Uma equipe de resgate marítimo enfrenta a pior tempestade do século enquanto tenta salvar uma cidade costeira.', poster: img('mare-vermelha', 520, 780), backdrop: img('mare-vermelha-backdrop', 1600, 900), categories: ['Drama', 'Aventura'] },
  { id: 6, title: 'Operação Atlas', year: 2026, rating: '16', duration: '2h 14min', match: 97, genres: ['Ação', 'Espionagem'], description: 'Uma analista de inteligência precisa impedir que uma rede clandestina derrube sistemas de comunicação em cinco países.', poster: img('operacao-atlas', 520, 780), backdrop: img('operacao-atlas-backdrop', 1600, 900), categories: ['Ação', 'Lançamentos'] },
  { id: 7, title: 'Último Sinal', year: 2023, rating: '12', duration: '1h 48min', match: 87, genres: ['Mistério', 'Ficção científica'], description: 'Um rádio antigo começa a transmitir mensagens de alguém preso sete anos no futuro.', poster: img('ultimo-sinal', 520, 780), backdrop: img('ultimo-sinal-backdrop', 1600, 900), categories: ['Ficção científica', 'Suspense'] },
  { id: 8, title: 'Queda Livre', year: 2025, rating: '14', duration: '1h 39min', match: 90, genres: ['Ação', 'Drama'], description: 'Depois de um acidente durante uma competição extrema, uma atleta descobre que a queda foi sabotada.', poster: img('queda-livre', 520, 780), backdrop: img('queda-livre-backdrop', 1600, 900), categories: ['Ação', 'Drama'] },
  { id: 9, title: 'Sala 404', year: 2026, rating: '16', duration: '1h 41min', match: 95, genres: ['Terror', 'Mistério'], description: 'Um hotel de luxo possui um andar que não aparece nos elevadores — até uma hóspede receber a chave errada.', poster: img('sala-404', 520, 780), backdrop: img('sala-404-backdrop', 1600, 900), categories: ['Suspense', 'Lançamentos'] },
  { id: 10, title: 'Depois da Chuva', year: 2024, rating: '10', duration: '1h 50min', match: 88, genres: ['Romance', 'Drama'], description: 'Dois amigos de infância se reencontram anos depois e percebem que algumas histórias nunca terminam de verdade.', poster: img('depois-da-chuva', 520, 780), backdrop: img('depois-da-chuva-backdrop', 1600, 900), categories: ['Drama', 'Romance'] },
  { id: 11, title: 'Nexus', year: 2026, rating: '14', duration: '2h 03min', match: 93, genres: ['Tecnologia', 'Suspense'], description: 'Uma empresa lança um assistente pessoal revolucionário. Em poucos dias, milhões de usuários começam a receber a mesma mensagem.', poster: img('nexus', 520, 780), backdrop: img('nexus-backdrop', 1600, 900), categories: ['Tecnologia', 'Em alta'] },
  { id: 12, title: 'Cidade Sem Sono', year: 2025, rating: '16', duration: '1h 55min', match: 92, genres: ['Crime', 'Ação'], description: 'Uma noite, quatro bairros, um roubo milionário e nenhuma testemunha disposta a contar a mesma versão.', poster: img('cidade-sem-sono', 520, 780), backdrop: img('cidade-sem-sono-backdrop', 1600, 900), categories: ['Ação', 'Suspense'] },
]

export const rows = [
  ['Em alta', [1, 2, 4, 11, 6, 9]],
  ['Lançamentos', [3, 6, 9, 1, 5, 12]],
  ['Ação', [2, 6, 8, 12, 1, 5]],
  ['Suspense', [4, 7, 9, 11, 2, 12]],
  ['Drama', [5, 8, 10, 3, 1, 7]],
]

export const featuredMovie = movies[0]
