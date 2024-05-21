const cor = document.querySelector(".color");
const btnMudar = document.getElementById("btn-mudar");
const btnCopiar = document.getElementById("btn-copiar");

const cores = [ "#f15025", "#6C0B47", "#B23CFD", "#7DFC6B", "#4A871E", "#FABE81", "#2D8EF1", "#E04C7C", "#9A2F10", "#1BCDAB", "#D8C301"];

btnMudar.addEventListener('click', function(){
    
    const numeroAleatorio = getNumeroAleatorio();

    document.body.style.backgroundColor = cores[numeroAleatorio];
    cor.textContent = cores[numeroAleatorio];

})

btnCopiar.addEventListener('click', function(){
    const corAtual = cor.textContent;
    
    navigator.clipboard.writeText(corAtual).then(function() {
        console.log('Cor copiada para a área de transferência: ' + corAtual);
        alert('Cor copiada para a área de transferência: ' + corAtual);
    }, function(err) {
        console.error('Erro ao copiar a cor: ', err);
    });
})


function getNumeroAleatorio(){
    return Math.floor(Math.random() * cores.length);
}

  