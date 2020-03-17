'use strict'

const r1 = require('readline-sync');

const massimo = 21;


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

    indice = 0;


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
    totale;

    constructor(nome)
    {
        this.nome = nome;

        this.punteggio = 0;

        this.mano = new Array();

        this.totale = 0;
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

    deck;

    r1;

    constructor(player1, player2, deck)
    {
        this.player1 = player1;

        this.player2 = player2;

        this.deck = deck;

        this.vincitore = this.player1;
    }

    chiVince(sballato1, sballato2)
    {
        if(sballato1)
        {
            this.vincitore = this.player2;

            return;
        }

        if(sballato2)
        {
            this.vincitore = this.player1;

            return;
        }
        
        if(this.player1.totale > this.player2.totale)
            {this.vincitore = this.player1;}
        else if(this.player1.totale == this.player2.totale)
            {this.vincitore = undefined;}
        else
            {this.vincitore = this.player2;}

    }

    aggiungiCarta(player)
    {
        let risposta = "s";
        
        while(risposta != "n")
        {
            risposta = r1.question('Vuoi una carta? \n s = si, n=no \n');
            
            if(risposta == "s")
            {
                let cartaPresa = this.deck.listaCarte[this.deck.indice];
                
                player.mano.push(cartaPresa);

                player.totale += cartaPresa.valore;
        
                console.log(`Mano di ${player}: ${player.mano} \n Totale: ${player.totale}`);

                if(player.totale > massimo)
                {
                    console.log("Hai sballato!!!");

                    return true;
                }

                this.deck.indice++;
            }

        }

        return false;
    }
    
    gioca()
    {
        let sballatoP1 = this.aggiungiCarta(playerNuovo1);

        let sballatoBanco = this.aggiungiCarta(banco);

        this.chiVince(sballatoP1, sballatoBanco);

        console.log(`The Winner is: ${this.vincitore}`);

    }

}


let nuovoDeck = new Deck();


for(let i = 0; i< 1000; i++)
{
    nuovoDeck.mescola();
}


let playerNuovo1 = new Player("Ettore");

let banco = new Player("Achille");

let partitaNuova = new Partita(playerNuovo1, banco, nuovoDeck);

partitaNuova.gioca();