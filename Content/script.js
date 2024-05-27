document.addEventListener('DOMContentLoaded', function() {
    const botao1 = document.getElementById('botao1');
    botao1.addEventListener('click', function() {
        alert('Botão "Quero criptografar" clicado!');
    });

    const botao2 = document.getElementById('botao2');
    botao2.addEventListener('click', function() {
        alert('Botão "Quero descriptografar" clicado!');
    });
});