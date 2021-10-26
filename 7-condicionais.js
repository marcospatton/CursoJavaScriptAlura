console.log(`Trabalhando com CONDICIONAIS`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis");

console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// }else if(estaAcompanhada == true){
//         console.log("comprador está acompanhada");
//         listaDeDestinos.splice(1,1);
//     }else{
//     console.log("Não é maior de idade e não posso vender");
// }


if(idadeComprador >= 18  || estaAcompanhada == true){
        console.log("Comprador maior de idade");
        listaDeDestinos.splice(2,1); //removendo item
    }else if(estaAcompanhada == true){
            console.log("comprador está acompanhada");
            listaDeDestinos.splice(2,1);
        }else{
        console.log("Não é maior de idade e não posso vender");
    }
    

    console.log("Embarque: \n\n")
    if(idadeComprador > 18 && temPassagemComprada){
        console.log("Boa viagem");
    }else{
        console.log("Voce não pode embarcar")
    }


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
