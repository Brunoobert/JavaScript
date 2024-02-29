function verificar(){
    var data =  new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano');
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano ){
        window.alert('ERRO! Verifique se o ano está correto ou preenchido');
    }else{
        var fsex =  document.getElementsByName('radsex')
        var idade =  ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','bbh.jfif')
            }else if(idade >= 10 && idade < 20){
                //jovem
                img.setAttribute('src','jovemh.jfif')
            }else if(idade >= 20 && idade < 50){
                //adulto
                img.setAttribute('src','adultoh.jfif')
            }else{
                //idoso
                img.setAttribute('src','idosoh.jfif')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bbm.jfif')
            }else if(idade >= 10 && idade < 20){
                //jovem
                img.setAttribute('src','jovemm.jfif')
            }else if(idade >= 20 && idade < 50){
                //adulto
                img.setAttribute('src','adultom.jfif')
            }else{
                //idoso
                img.setAttribute('src','idosam.jfif')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
        img.style.display = 'block';
        img.style.margin = 'auto';
        img.style.padding = '10px';


        var section = document.querySelector('section');
        section.style.width ='400px'
        section.style.height ='auto'
    }   
}