'use strict'

const r1 = require('readline-sync');


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
        this.initialize();

        //this.visualizzaDeck();
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

    r1;

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
        
        let risposta = "n";

        let conta = 0;
        
        while(risposta != "s")
        {
            risposta = r1.question('Vuoi una carta? \n s = sì, n=no \n');
            
            if(risposta == "s")
            {
                this.player1.mano.push(this.listaCarte[conta]);
        
                console.log(this.player1.mano);

                conta++;
            }

        }

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