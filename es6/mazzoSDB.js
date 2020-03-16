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
    
    listaCarte = [];


    initialize()
    {
        colori.forEach(element => {
            for (let i = 0; i<10; i++)
            {
                let carta = new Carta(nomi[i], valori[i], element);
    
                this.listaCarte.push(carta);
            }
        });
    }

    visualizzaDeck()
    {
        this.listaCarte.forEach(element => {
            console.log(element.toString());
        });
    }

    constructor()
    {
        let inizia = this.initialize;

        let visualizza = this.visualizzaDeck;

        this.initialize();

        //inizia();

        this.visualizzaDeck();
    }

    mescola = function ()
    {
        let counter = this.listaCarte.length - 1;
        
        while(counter > -1)
        {
            let indice = Math.floor(Math.random() * 9);
    
            let temp = this.listaCarte[counter];
    
            this.listaCarte[counter] = this.listaCarte[indice];
    
            this.listaCarte[indice] = temp;
    
            counter--;
        }
    
    }
}


class Player
{
    nome;
    punteggio;
    mano;

    constructor(nome)
    {
        this.nome = nome;

        this.punteggio = 0;

        this.mano = new Array();
    }

    toString()
    {
        return this.nome;
    }
}


class Partita
{
    player1;

    player2;

    vincitore;

    listaCarte;

    constructor(player1, player2, listaCarte)
    {
        this.player1 = player1;

        this.player2 = player2;

        this.listaCarte = listaCarte;
    }

    chiVince()
    {
        if(this.player1.punteggio > this.player2.punteggio)
            {this.vincitore = this.player1;}
        else if(this.player1.punteggio == this.player2.punteggio)
            {this.vincitore = undefined;}
        else
            {this.vincitore = this.player2;}

        console.log(`The Winner is: ${this.vincitore}`);
    }

    gioca()
    {
        this.player1.mano = slice.this.listaCarte(0,3);

        this.player2.mano = this.listaCarte[1];

        console.log(`${this.player1.nome}: ${this.listaCarte[0]}`);

        console.log(`${this.player2.nome}: ${this.listaCarte[1]}`);

        this.chiVince();


        

    }

}


let nuovoDeck = new Deck();


for(let i = 0; i< 1000; i++)
{
    nuovoDeck.mescola();
}


let playerNuovo1 = new Player("Achille");

let playerNuovo2 = new Player("Ettore");

let partitaNuova = new Partita(playerNuovo1, playerNuovo2, nuovoDeck.listaCarte);

partitaNuova.gioca();




