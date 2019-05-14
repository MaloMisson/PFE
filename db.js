const { Client } = require('pg');

const db = new Client({
  user: 'hzewnisw',
  host: 'manny.db.elephantsql.com',
  database: 'hzewnisw',
  password: 'QtFVbCTSUNKDzXeqgHP485ehEOtEaynd',
  port: 5432,
});

/*
const query = {
    text: 'SELECT * FROM pfe.utilisateurs',
    types: {
      getTypeParser: () => (val) => val
    }
  }

  
db.connect();
const res = db.query(query);
console.log(res); // Hello world!
db.end();
*/

db.connect();
var e=1, r=1;
db.query('SELECT * FROM pfe.utilisateurs', (err, res) => {
    console.log(res.rows[0].pseudo);
    e = err;
    r= res;
    db.end()
  });

  function c(){
  }
setTimeout(c,5000);