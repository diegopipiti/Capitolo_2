'use strict'

let nomi = 
[
    'Asso',
    'Due',
    'Tre',
    'Quattro',
    'Cinque',
    'Sei',
    'Sette',
    'Fante',
    'Cavallo',
    'Re'
]

let valori = [1,2,3,4,5,6,7,8,9,10]

let colori =
[
    'Denari',
    'Spade',
    'Bastoni',
    'Coppe'
]

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
        return `${this.nome} di ${this.colore}`;
    }
}

class Deck
{
    mescola = function (denari)
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
    
    constructor()
    {
        let inizia = initialize;

        let carica = caricaDeck;

        inizia();

        carica();
    }
}

let deck = [];

function initialize()
{
    colori.forEach(element => {
        for (let i = 0; i<10; i++)
        {
            let carta = new Carta(nomi[i], valori[i], element);

            deck.push(carta);
        }
    });
}

function caricaDeck()
{
    deck.forEach(element => {
        console.log(element.toString());
    });
}


let nuovoDeck = new Deck();

for(let i = 0; i< 100; i++)
{
    nuovoDeck.mescola(deck);
}

caricaDeck();


