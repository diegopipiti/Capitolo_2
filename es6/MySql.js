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