//
//./config/db.js
//
var mysql = require('mysql');
var config = require('../config/config');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'node_mysql_user',
    password : process.env.DB_PASSWORD,
    database : 'sakila'
});

connection.connect(function(error) {
    if(error) {
        console.log(error);
        return;
    }else{
        console.log("Connected to " + config.dbHost + ":" + config.dbDatabase);
    }
});

module.exports = connection;