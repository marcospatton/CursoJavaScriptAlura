console.log(`\n Trabalhando com CONDICIONAIS`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18  || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino) {
        //console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro !");
}


for(let cont = 0; cont < 3; cont = cont ++){
    if(listaDeDestinos[contador] == destino) {
        //console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}
