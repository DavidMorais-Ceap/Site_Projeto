document.getElementById('showStepsBtn').addEventListener('click', () => {
    const steps = [
        '1. Prepare o chassi 4WD do carrinho.',
        '2. Instale os motores nas rodas.',
        '3. Conecte o sensor de linha na parte frontal do carrinho.',
        '4. Ligue o controlador e faça a conexão com os motores e sensores.',
        '5. Programe o controlador para seguir a linha usando os sensores.',
        '6. Teste e ajuste para garantir que o carrinho segue a linha corretamente.'
    ];
    const outputDiv = document.getElementById('stepsOutput');
    outputDiv.innerHTML = '<ul>' + steps.map(step => `<li>${step}</li>`).join('') + '</ul>';
});
