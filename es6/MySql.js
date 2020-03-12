'use strict'

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "marcello",
  password: "maria@79"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log("");
});

con.query('SELECT * FROM cartedb.carte', (err,rows) => {
  if(err) throw err;

  rows.forEach(row => {
    console.log(`${row.nome} di ${row.colore}`);
  });
});

const carta = {nome: 'Asso', valore: 1, colore: 'Spade'};
con.query('insert INTO cartedb.carte SET ?', carta, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});
