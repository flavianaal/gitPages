document.getElementById('projeto1').addEventListener('click', function() {
    abrirProjeto('../projeto_js01/index.html');
});


// Função para abrir o projeto em uma nova página
function abrirProjeto(url) {
    window.open(url, '_blank');
}