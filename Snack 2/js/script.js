//-------------------------function-------------------------
const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const letteraRandom =() => {
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var indice = numeroRandom(0, alfabeto.length - 1);
    return alfabeto[indice];
}
//-------------------------function-------------------------

var squadre = [
    {
        codice:"",
        nome: "nome",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        codice:"",
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        codice:"",
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        codice:"",
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        codice:"",
        nome: "nome" ,
        puntiFatti: 0,
        falliSubiti: 0,
    }
];

for (var i=0; i < squadre.length; i++){
    squadre[i].nome = prompt("Nome scquadra numero " + [i]);
    squadre[i].puntiFatti = numeroRandom(1, 100);
    squadre[i].falliSubiti = numeroRandom(1, 100);
    squadre[i].codice = letteraRandom() + letteraRandom() + letteraRandom() + numeroRandom(1, 9) + numeroRandom(1, 9) + numeroRandom(1, 9);

};

console.log(squadre);
