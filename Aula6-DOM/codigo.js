

const container = document.getElementById("container");

let atleta;

let conteudo ='';

const montaCard = (atleta) => 
    `
    <div><h1>${atleta.nome}</h1>
    <img src='${atleta.imagem}'>
    <p>${atleta.detalhes}</p>
    <a href="index2.html">Saiba mais</a>
    </div>

`;




dados.forEach(
    (ele) => conteudo += montaCard(ele)
)

container.innerHTML = conteudo


