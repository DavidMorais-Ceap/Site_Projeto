const nav = document.getElementById('dino-nav');
const content = document.getElementById('dino-content');
// Acessa o array de dinossauros definido no HTML.
// Importante: certifique-se de que o script.js é carregado DEPOIS da definição de 'dinos' no HTML.

/**
 * Cria a string SVG para o holograma.
 * @returns {string} String HTML do SVG.
 */
function createHologramSVG() {
    return `
        <svg viewBox="0 0 300 300" class="hologram-svg" aria-hidden="true" focusable="false">
            <g class="hologram-lines" fill="none" stroke="var(--color-neon)" stroke-width="1.2" stroke-linejoin="round">
                <path d="M150 20 L230 150 L150 280 L70 150 Z" stroke-dasharray="8 6"/>
                <line x1="150" y1="20" x2="150" y2="280" stroke-dasharray="4 4"/>
                <line x1="70" y1="150" x2="230" y2="150" stroke-dasharray="8 6"/>
                <path d="M150 20 C170 90, 230 110, 230 150" stroke-dasharray="6 6"/>
                <path d="M150 280 C130 210, 70 190, 70 150" stroke-dasharray="6 6"/>
            </g>
        </svg>
    `;
}

/**
 * Carrega e exibe as informações de um dinossauro.
 * @param {number} index O índice do dinossauro no array 'dinos'.
 */
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

/**
 * Define o botão ativo, removendo a classe 'active' de todos os outros.
 * @param {HTMLElement} activeBtn O botão a ser marcado como ativo.
 */
function setActiveButton(activeBtn) {
    // Itera sobre os filhos da nav e remove a classe 'active'
    for(let btn of nav.children) {
        btn.classList.remove('active');
    }
    // Adiciona a classe 'active' ao botão clicado
    activeBtn.classList.add('active');
}

// Criação e configuração dos botões de navegação
dinos.forEach((dino, i) => {
    const btn = document.createElement('button');
    btn.textContent = dino.nome;
    btn.setAttribute('aria-label', `Mostrar informações do dinossauro ${dino.nome}`);
    btn.addEventListener('click', () => {
        loadDino(i);
        setActiveButton(btn);
        content.focus(); // Move o foco para a área de conteúdo para acessibilidade
    });
    nav.appendChild(btn);
});

// Mostrar a primeira página inicialmente (ao carregar)
loadDino(0);
// Marca o primeiro botão como ativo
if (nav.children.length > 0) {
    nav.children[0].classList.add('active');
}
