var mysql      = require('mysql');

function mysqlGetData (Statement, callback = null) {
  let connection = mysql.createConnection({
    host     : 'localhost',
    database : 'boke',
    user     : 'root',
    password : '1234'
  });

  connection.connect();
  
  connection.query(Statement, function(err, rows, fields) {
    /* if (err) throw err;
    console.log('The solution is: ', rows[0].solution); */
    callback(err, rows, fields)
  });
  
  connection.end();
}

module.exports = mysqlGetData;