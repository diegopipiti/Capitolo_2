'use strict'

/*---------------------------CONNESSIONE------------------------------------------*/
const mysql = require('mysql');

class connessione{

    con;

    connetti;
    
    costructor(){
        con = mysql.createConnection({
        host: "localhost",
        user: "marcello",
        password: "maria@79"
        });
   }


    connetti = con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        console.log("");
    });

}

/*------------------------------------------------------------------------------*/



/*--------------------------DAO-----------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/


let georgia = new connessione();