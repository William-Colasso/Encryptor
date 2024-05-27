document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    const botao = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');

    botao.addEventListener('click', function() {
        titulo.textContent = 'Você clicou no botão!';
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});