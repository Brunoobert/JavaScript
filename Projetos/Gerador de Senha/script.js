function message(texto,background){
    Toastify({
        text: texto,
        duration: 2000,
        style: {
            background: background,
            boxShadow: 'none'
        }
    }).showToast();
}



function getCharType(){

    const incluirMaiuscula = document.getElementById('incluir_maiuscula').checked;
    const incluirMinuscula = document.getElementById('incluir_minuscula').checked;
    const incluirNumero = document.getElementById('incluir_numero').checked;
    const incluirCaracterE = document.getElementById('incluir_caracterE').checked;

    let charType = [];
    if(incluirMaiuscula){
        charType.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if(incluirMinuscula){
        charType.push('abcdefghijklmnopqrstuvwxyz');
    }

    if(incluirNumero){
        charType.push('0123456789');
    }

    if(incluirCaracterE){
        charType.push('!@#$%^&*()_+[]{}|;:,.<>?°§=¨¬');
    }

    if(!incluirCaracterE && !incluirMaiuscula && !incluirMinuscula && !incluirNumero){
        message('Por favor, marque ao menos uma opção', 'red');
    }
    
    return charType;

}

function getRandomIndex(){

    const charType = getCharType();

    
    let randomIndex = Math.floor(Math.random() * charType.length);

    

    return charType[randomIndex];

}




function generateRandomPassword(size){
    let passwordGenerated = '';
    
    for(let i = 0; i < size;i++){
        let randomArray = getRandomIndex();
        let randomIndexChar = Math.floor(Math.random() * randomArray.length);
        passwordGenerated += randomArray[randomIndexChar];
    }

    return passwordGenerated;
}


const btnGerarSenha = document.getElementById('generate');

btnGerarSenha.addEventListener('click', function(){

    const quantCaracter = document.getElementById('quant_caracter').value;
    const password = generateRandomPassword(quantCaracter);
    const senhaOutput = document.getElementById('password');

    const incluirMaiuscula = document.getElementById('incluir_maiuscula').checked;
    const incluirMinuscula = document.getElementById('incluir_minuscula').checked;
    const incluirNumero = document.getElementById('incluir_numero').checked;
    const incluirCaracterE = document.getElementById('incluir_caracterE').checked;
    
    

    if(quantCaracter >= 6 && quantCaracter <= 40){
        
        document.querySelector('.password_container').classList.add('show');
        senhaOutput.textContent = password;
    }else{
        message('Por favor insira uma quantidade de caracteres maior que 5 e menos que 40!','red');
    }
    
    
})

const copy = document.getElementById('copy_btn');

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(document.getElementById('password').textContent);

    message('Senha copiada com sucesso!', '#8BC34A');
})