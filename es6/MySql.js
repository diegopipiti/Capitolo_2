'use strict'
'use mysql'

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jesussss@79"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});