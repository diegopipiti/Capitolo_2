'use strict'

/*---------------------------CONNESSIONE------------------------------------------*/

class connessione{

    mysql = require('mysql');

    con;

    connetti;
    
    costructor(){
        con = mysql.createConnection({
        host: "localhost",
        user: "marcello",
        password: "maria@79"
        });

        connetti = con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");            
        });
    }
}

/*------------------------------------------------------------------------------*/



/*--------------------------DAO-----------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/


let georgia = new connessione();