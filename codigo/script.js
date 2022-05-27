/* O código a seguir se encarrega de criar os card's do catálogo de jogos, por meio de JSON */


//Conteúdo dos jogos, separado por categorias através de tag's
let jogos = [

  
  //Jogos Terror
  phasmophobia = {
    nome: 'Phasmophobia',
    descricao: 'Phasmophobia é um jogo de terror psicológico cooperativo online para 4 jogadores.',
    avaliacao: './jogos/phasmophobia/phasmophobia_rate.png',
    img: './jogos/phasmophobia/phasmophobia_img.png',
    tag: 'terror',
    link: '',
  },
  five_nights_at_freddy = {
    nome: "Five Nights at Freddy's Security Breach",
    descricao: "Jogue como Gregory, um garotinho preso durante a noite no Freddy Fazbear's Mega Pizzaplex.",
    avaliacao: './jogos/fnaf/fnaf_rate.png',
    img: './jogos/fnaf/fnaf_img.png',
    tag: 'terror',
    link: '',
  },
  stay_close = {
    nome: 'Stay Close',
    descricao: 'Stay Close é um jogo de horror em mundo aberto, com opções de jogo singleplayer e co-op.',
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/stay_close/stay_close_img.png',
    tag: 'terror',
    link: '',
  },
  rainbow_six = {
    nome: 'Tom Clancy`s Rainbow Six Siege',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/rainbow_six/rainbow.jpg',
    tag: 'terror',
    link: '',
  },
  //Jogos Ritmo
  muse_dash = {
    nome: 'Muse Dash',
    descricao: 'No game, os jogadores derrotam inimigos e evitam obstáculos que surgem do lado direito da tela pressionando botões de acordo com a batida da música de cada fase. ',
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/muse_dash/muse_dash.png',
    tag: 'ritmo',
    link: '',
  },
  geometry_dash = {
    nome: 'Geometry Dash',
    descricao: 'Geometry Dash é um jogo de ritmo originalmente disponível para celulares (IOS e Android) e posteriormente disponibilizado para computadores (Steam), desenvolvido pelo programador sueco Robert Topala, e publicado em 2013',
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/geometry_dash/geometry_dash.png',
    tag: 'ritmo',
    link: '',
  },
  osu = {
    nome: 'OSU!',
    descricao: 'OSU! é um jogo de ritmo desenvolvido e posteriormente publicado gratuitamente por Dean Herbert em 2007.',
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/osu/osu.png',
    tag: 'ritmo',
    link: '',
  },
/*
  //Jogos FPS
  rainbow_six = {
    nome: 'Tom Clancy`s Rainbow Six Siege',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/rainbow_six/rainbow.jpg',
    tag: 'FPS',
    link: '',
  },
  valorant = {
    nome: 'Valorant',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/valorant/valorant.jpg',
    tag: 'FPS',
    link: '',
  },
  cs = {
    nome: 'Counter Strike: Global Offensive',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/csgo/csgo.jpg',
    tag: 'FPS',
    link: '',
  },
  cod = {
    nome: 'Call of Duty: Black Ops II',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/cod/cod.jpg',
    tag: 'FPS',
    link: '',
  },
  battlefield = {
    nome: 'Battlefield 2042',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/battlefield/bff.jpg',
    tag: 'FPS',
    link: '',
  },
  apex = {
    nome: 'Apex Legends',
    descricao: "Domine a arte da destruição e do uso de gadgets em Tom Clancy's Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.",
    avaliacao: './jogos/stay_close/stay_close_rate.png',
    img: './jogos/apex/apex.jpg',
    tag: 'FPS',
    link: '',
  },*/
  
]

//definindo o filtro do catálogo
let filtro = null;

// criando os jogos do catálogo

function inicia(jogo, card) {
  let div_col = document.createElement('div');
  div_col.classList.add("col-4");

  let div_card = document.createElement('div');
  div_card.setAttribute('id','card');

  let div_card_content = document.createElement('div');
  div_card_content.classList.add("card_content");
  div_card_content.classList.add("text-center");

  let card_img = document.createElement('img');
  card_img.classList.add("game_image");
  card_img.classList.add("mt-3");
  card_img.classList.add("mb-2");
  card_img.classList.add("img-fluid");
  card_img.setAttribute('src', jogo.img);

  let card_title = document.createElement('h3')
  card_title.textContent = jogo.nome;

  let card_desc = document.createElement('p')
  card_desc.textContent = jogo.descricao;

  let card_rate = document.createElement('img');
  card_rate.classList.add("game_rate");
  card_rate.classList.add("mb-3");
  card_rate.classList.add("img-fluid");
  card_rate.setAttribute('src', jogo.avaliacao);

  //criando o card
  div_card_content.appendChild(card_img); //imagem principal
  div_card_content.appendChild(card_title); //titulo
  div_card_content.appendChild(card_desc); //descrição
  div_card_content.appendChild(card_rate); //avaliação
  div_card.appendChild(div_card_content);
  div_col.appendChild(div_card);

  card.appendChild(div_col);
}

const card = document.getElementById('card_row')

jogos.forEach(jogo => {
  window.addEventListener('load', inicia(jogo, card));
});