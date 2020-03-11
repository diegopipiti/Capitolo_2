'use strict';

import { createConnection } from 'mysql';

const con = createConnection({
  host: "localhost",
  user: "marcello",
  password: "yojesussss@79"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});