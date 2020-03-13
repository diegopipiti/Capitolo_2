'use strict'


function apri()
{
    const mysql = require('mysql');

    const con = mysql.createConnection({
      host: "localhost",
      user: "marcello",
      password: "maria@79"
    });


    con.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + con.threadId);
        console.log("");
      });

      return con;
}

function ottieniColore(con)
{
    const colore = "'Denari'";

    con.query(`SELECT * FROM cartedb.carte WHERE colore = ${colore}`, (err,rows) => {
        if(err) throw err;

        rows.forEach(row => {
            let carta = new Carta(row.nome, row.valore, row.colore);
            
          });

      });


}

function chiudi(con)
{
    con.end();

    console.log("Chiusa!");
}


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
}

class Deck
{
    deckAr = [];

    constructor()
    {
        this.riempiDeck();
    }

    riempiDeck()
    {
       
        let con = apri();

        ottieniColore(con);

        chiudi(con);

        
    }

}

let mazzo1 = new Deck();

