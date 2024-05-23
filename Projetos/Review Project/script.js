const reviews = [
    {
        id: 1,
        name: "José Mourinho",
        img: "imagens/Design sem nome2.png",
        prof: "UX designer",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repudiandae nam doloremque quisquam dolore quasi, assumenda minus molestias provident quidem tenetur ducimus eaque distinctio eligendi necessitatibus perferendis accusamus accusantium esse."
    },
    {
        id: 2,
        name: "Ana Silva",
        img: "imagens/p1r.png",
        prof:"Desenvolvedora Front End",
        text: "Ana é uma desenvolvedora frontend com mais de 5 anos de experiência em criar interfaces de usuário intuitivas e eficientes. Ela tem uma paixão por design e sempre busca as melhores práticas na construção de aplicações web."
    },
    {
        id: 3,
        name: "Mariana Costa",
        img: "imagens/p3.png",
        prof:"Engenheira de dados",
        text: "Mariana é engenheira de dados e trabalha com big data e machine learning. Sua experiência inclui a implementação de pipelines de dados robustos e a construção de modelos preditivos para diversas indústrias."
    },
    {
        id: 4,
        name: "Bruna Ferreira",
        img: "imagens/p4.png",
        prof:"Especialista em Cibersegurança",
        text: "Bruna é especialista em cibersegurança e tem uma vasta experiência em proteger sistemas contra ameaças e vulnerabilidades. Ela trabalha com auditorias de segurança e desenvolvimento de políticas de proteção de dados."
    },
    {
        id: 5,
        name: "Carlos Pereira",
        img: "imagens/p2.png",
        prof:"Arquiteto de soluções",
        text: "Carlos é um arquiteto de soluções na nuvem, especializado em AWS e Azure. Ele ajuda empresas a migrar e otimizar suas infraestruturas para a nuvem, garantindo escalabilidade e segurança."
    }
];

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const imagem = document.getElementById("person");
const autor = document.getElementById("author");
const profissao = document.getElementById("job");
const texto = document.getElementById("info");

let itemAtual = 0;

window.addEventListener('DOMContentLoaded', attCard(itemAtual));

btnNext.addEventListener('click',function(){
    itemAtual++;
    if(itemAtual > reviews.length -1){
        itemAtual = 0;
    }
    attCard(itemAtual);
})

btnPrev.addEventListener('click',function(){
    itemAtual--;
    if(itemAtual < 0){
        itemAtual = reviews.length - 1;
    }
    attCard(itemAtual);
})
function attCard(card){
    const item = reviews[card];
    imagem.src = item.img;
    autor.textContent = item.name;
    profissao.textContent = item.prof;
    texto.textContent = item.text;
}
