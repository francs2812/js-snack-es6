const bici = [
    {
        nome: "mtb" ,
        peso: 10
    },
    {
        nome: "passeggio" ,
        peso: 15
    },
    {
        nome: "corsa" ,
        peso: 5
    }
];

for(var i = 1; i < bici.length; i++) {
    var biciT = bici[i].peso;
    var biciPiuLeggera = bici[0].peso;
    if(biciT < biciPiuLeggera) {
        biciPiuLeggera = biciT
    }
}

console.log(biciPiuLeggera);
