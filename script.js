document.getElementById('projeto1').addEventListener('click', function() {
    abrirProjeto('https://flavianaal.github.io/Calculadora_programeIO/');
});


// Função para abrir o projeto em uma nova página
function abrirProjeto(url) {
    window.open(url, '_blank');
}