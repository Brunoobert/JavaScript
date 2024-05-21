const cor = document.querySelector('.color');
const btnMudar = document.getElementById('btn-mudar');
const btnCopiar = document.getElementById('btn-copiar');

const codHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B" ,"C" , "D" ,"F"];

btnMudar.addEventListener('click',function () {
    let corHex = '#';

    for(let i = 0; i < 6;i++){
        let numeroAleatorio = getNumeroAleatorio();
        corHex += codHex[numeroAleatorio];
    }
    console.log(corHex);

    document.body.style.backgroundColor = corHex;
    cor.textContent = corHex;
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
    return Math.floor(Math.random() * codHex.length);
}

