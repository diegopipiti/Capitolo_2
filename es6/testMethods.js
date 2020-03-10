'use strict'

function mescola(denari = [])
{
    let denariMesc = [];
    
    let indice1 = Math.floor(Math.random() * 10);

    let indice2 = Math.floor(Math.random() * 10);

    denariMesc[indice2] = denari[indice1];

    denari = denariMesc;
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

console.log(denari);

mescola(denari);

console.log(denari);