
const bici = [{nome: "mtb" ,peso: 10},{nome: "passeggio" ,peso: 15},{nome: "corsa" , peso: 5}];


let biciPiuLeggera = bici[0];

for(let i = 1; i < bici.length; i++) {
    let biciCorrente = bici[i];
    

    if(biciCorrente.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = biciCorrente
    }
}

const {nome, peso} = biciPiuLeggera;
console.log(nome, peso);
