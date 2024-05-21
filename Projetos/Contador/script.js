const btnIncrementar = document.getElementById('btn-incrementar');
    const btnZerar = document.getElementById('btn-zerar');
    const btnDecrementar = document.getElementById('btn-decrementar');
    const numero = document.getElementById('number');
    const passo = document.getElementById('passo'); 

    function atualizarCor(){
        let count = parseInt(numero.textContent);
        if(count == 0){
            numero.style.color = 'black';
        }else if(count > 0){
            numero.style.color = 'green';
        }else{
            numero.style.color = 'red';
        }
    }

    btnIncrementar.addEventListener('click', function(){
        let count = parseInt(numero.textContent);
        let passoIncrementar = parseInt(passo.value);
        if(passoIncrementar != 0){
            count += passoIncrementar;
        }else{
            count++;
        }
        numero.textContent = count;
        atualizarCor();
    });

    btnZerar.addEventListener('click', function(){
        numero.textContent = 0;
        atualizarCor();
    });

    btnDecrementar.addEventListener('click', function(){
        let count = parseInt(numero.textContent);
        let passoDecrementar = parseInt(passo.value); 
        if(passoDecrementar != 0){
            count -= passoDecrementar;
        }else{
            count--;
        }
        numero.textContent = count;
        atualizarCor();
    });

    atualizarCor();