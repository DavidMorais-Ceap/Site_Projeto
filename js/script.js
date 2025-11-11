const dinos = [
  { nome: 'Tyrannosaurus Rex', desc: 'Grande carnívoro do fim do Cretáceo com mandíbula poderosa e tamanho impressionante.', periodo: 'Cretáceo Superior', dieta: 'Carnívoro', tamanho: 'Até 12 metros e 8 toneladas', curiosidades: 'Uma das mordidas mais fortes, braços pequenos mas fortes.' },
  { nome: 'Triceratops', desc: 'Herbívoro com três chifres e gola óssea protetora.', periodo: 'Cretáceo Superior', dieta: 'Herbívoro', tamanho: '9 metros e até 12 toneladas', curiosidades: 'Chifres usados para defesa e disputa.' },
  { nome: 'Velociraptor', desc: 'Pequeno e ágil, famoso por garras curvas e penas.', periodo: 'Cretáceo Superior', dieta: 'Carnívoro', tamanho: '2 metros e 15 kg', curiosidades: 'Provavelmente possuía penas.' },
  { nome: 'Brachiosaurus', desc: 'Saurópode com pescoço e patas dianteiras longas.', periodo: 'Jurássico Superior', dieta: 'Herbívoro', tamanho: '26 metros e 56 toneladas', curiosidades: 'Membros dianteiros mais longos.' },
  { nome: 'Stegosaurus', desc: 'Placas nas costas e espinhos na cauda.', periodo: 'Jurássico Superior', dieta: 'Herbívoro', tamanho: '9 metros e 5 toneladas', curiosidades: 'Placas usadas para termorregulação.' },
  { nome: 'Ankylosaurus', desc: 'Dinossauro blindado com cauda em forma de porrete.', periodo: 'Cretáceo Superior', dieta: 'Herbívoro', tamanho: '8 metros e 6 toneladas', curiosidades: 'Cauda usada para defesa poderosa.' },
  { nome: 'Spinosaurus', desc: 'Carnívoro semi-aquático com vela dorsal.', periodo: 'Cretáceo Médio', dieta: 'Carnívoro', tamanho: '15 metros e até 20 toneladas', curiosidades: 'Provavelmente nadava como crocodilo.' },
  { nome: 'Dilophosaurus', desc: 'Carnívoro com duas cristas ósseas na cabeça.', periodo: 'Jurássico Inferior', dieta: 'Carnívoro', tamanho: '7 metros e 400kg', curiosidades: 'Crestas usadas para comunicação.' },
  { nome: 'Parasaurolophus', desc: 'Herbívoro com crista tubular.', periodo: 'Cretáceo Superior', dieta: 'Herbívoro', tamanho: '10 metros e 2,5 toneladas', curiosidades: 'Cresta usada para sons e visualização.' },
  { nome: 'Iguanodon', desc: 'Herbívoro com polegar em espinho.', periodo: 'Cretáceo Inferior', dieta: 'Herbívoro', tamanho: '10 metros e 5 toneladas', curiosidades: 'Espinho usado como arma.' },
  { nome: 'Allosaurus', desc: 'Predador com cristas ósseas acima dos olhos.', periodo: 'Jurássico Superior', dieta: 'Carnívoro', tamanho: '8,5 metros e 2 toneladas', curiosidades: 'Comportamento social possível.' },
  { nome: 'Pachycephalosaurus', desc: 'Dinossauro com crânio em cúpula para combate.', periodo: 'Cretáceo Superior', dieta: 'Herbívoro/Onívoro', tamanho: '4,5 metros e 450kg', curiosidades: 'Possíveis combates de cabeça.' },
  { nome: 'Carnotaurus', desc: 'Carnívoro com chifres curtos e braços minúsculos.', periodo: 'Cretáceo Superior', dieta: 'Carnívoro', tamanho: '8 metros e 1 tonelada', curiosidades: 'Predador rápido e ágil.' },
  { nome: 'Microraptor', desc: 'Pequeno dinossauro com quatro asas e penas.', periodo: 'Cretáceo Inferior', dieta: 'Carnívoro', tamanho: '0,7 metros e 1kg', curiosidades: 'Capaz de planar.' },
  { nome: 'Therizinosaurus', desc: 'Com garras longas, corpo estranho, herbívoro/onívoro.', periodo: 'Cretáceo Superior', dieta: 'Herbívoro/Onívoro', tamanho: '10 metros e 5 toneladas', curiosidades: 'Garras de até 1 metro.' },
  { nome: 'Diplodocus', desc: 'Herbívoro com pescoço e cauda longos.', periodo: 'Jurássico Superior', dieta: 'Herbívoro', tamanho: '27 metros e 15 toneladas', curiosidades: 'Cauda usada para defesa e comunicação.' },
  { nome: 'Gallimimus', desc: 'Dinossauro rápido parecido com avestruz.', periodo: 'Cretáceo Superior', dieta: 'Onívoro', tamanho: '6 metros e 440kg', curiosidades: 'Bico sem dentes e grandes olhos.' },
  { nome: 'Oviraptor', desc: 'Onívoro conhecido por proteger ovos.', periodo: 'Cretáceo Superior', dieta: 'Onívoro', tamanho: '2 metros e 20kg', curiosidades: 'Cresta curta e mandíbula forte.' },
  { nome: 'Styracosaurus', desc: 'Herbívoro com gola e espinhos longos.', periodo: 'Cretáceo Superior', dieta: 'Herbívoro', tamanho: '5,5 metros e 2,7 toneladas', curiosidades: 'Até seis espinhos na gola.' },
  { nome: 'Baryonyx', desc: 'Carnívoro semi-aquático com grande garra no polegar.', periodo: 'Cretáceo Inferior', dieta: 'Carnívoro', tamanho: '9 metros e 2 toneladas', curiosidades: 'Especialista em caça de peixes.' }
];

const nav = document.getElementById('dino-nav');
const content = document.getElementById('dino-content');

function createHologramSVG() {
  return `
      <svg viewBox="0 0 300 300" class="hologram-svg" aria-hidden="true" focusable="false">
        <g class="hologram-lines" fill="none" stroke="#00ffc8" stroke-width="1.2" stroke-linejoin="round">
          <path d="M150 20 L230 150 L150 280 L70 150 Z" stroke-dasharray="8 6"/>
          <line x1="150" y1="20" x2="150" y2="280" stroke-dasharray="4 4"/>
          <line x1="70" y1="150" x2="230" y2="150" stroke-dasharray="8 6"/>
          <path d="M150 20 C170 90, 230 110, 230 150" stroke-dasharray="6 6"/>
          <path d="M150 280 C130 210, 70 190, 70 150" stroke-dasharray="6 6"/>
        </g>
      </svg>
  `;
}

function loadDino(index) {
  const dino = dinos[index];
  content.innerHTML = `
    <h2>${dino.nome}</h2>
    <div class="hologram-container">${createHologramSVG()}</div>
    <p>${dino.desc}</p>
    <p><strong>Período:</strong> ${dino.periodo}</p>
    <p><strong>Dieta:</strong> ${dino.dieta}</p>
    <p><strong>Tamanho:</strong> ${dino.tamanho}</p>
    <p><strong>Curiosidades:</strong> ${dino.curiosidades}</p>
  `;
}

function setActiveButton(activeBtn) {
  for(let btn of nav.children) {
    btn.classList.remove('active');
  }
  activeBtn.classList.add('active');
}

// Cria botões no topo para cada dinossauro
dinos.forEach((dino, i) => {
  const btn = document.createElement('button');
  btn.textContent = dino.nome;
  btn.setAttribute('aria-label', `Mostrar informações do dinossauro ${dino.nome}`);
  btn.addEventListener('click', () => {
    loadDino(i);
    setActiveButton(btn);
    content.focus();
  });
  nav.appendChild(btn);
});

// Mostrar a primeira página inicialmente
loadDino(0);
nav.children[0].classList.add('active');
