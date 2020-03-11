'use strict'

function mescola(denari = [])
{
    let counter = denari.length - 1;
    
    while(counter > -1)
    {
        let indice = Math.floor(Math.random() * 9);

        let temp = denari[counter];

        denari[counter] = denari[indice];

        denari[indice] = temp;

        counter--;
    }





}

let denari = 
[
    "asso", 
    "due", 
    "tre", 
    "quattro", 
    "cinque", 
    "sei", 
    "sette", 
    "fante", 
    "cavallo", 
    "re"
];

let Carta 
{
    let nome;

    let valore;

    let colore;

    class Carta {
        constructor(nome, valore, colore) {
            this.nome = nome;
            this.valore = valore;
            this.colore = colore;
        }
    }
}
    let carta1 = Carta("10Denari", 10, "denari");

    console.log(carta1);
