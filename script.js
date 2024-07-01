document.getElementById('projeto1').addEventListener('click', function() {
    abrirProjeto('https://flavianaal.github.io/Calculadora_programeIO/');
});

document.getElementById('projeto2').addEventListener('click', function() {
    abrirProjeto('https://flavianaal.github.io/desafioPokemon/');
});

document.getElementById('projeto3').addEventListener('click', function() {
    abrirProjeto('https://flavianaal.github.io/JuliaVoices/');
});



// Função para abrir o projeto em uma nova página
function abrirProjeto(url) {
    window.open(url, '_blank');
}