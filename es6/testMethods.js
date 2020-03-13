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

class Carta 
{
    nome;

    valore;

    colore;

    constructor(nome, valore, colore)
    {
        this.nome = nome;

        this.valore = valore;

        this.colore = colore;
    }

    toString() 
    {
        return `Sono il ${this.nome} di ${this.colore}`;
    }

}

let carta1 = new Carta("Re", 10, "Denari");

console.log(carta1);

console.log(carta1.toString());

