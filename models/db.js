const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

const sequelize = new Sequelize("caio", "root", "phPED23", {
    host: 'localhost',
    dialect: 'mysql'
});
    
    mysql.createConnection({
        user     : "root",
        password : "phPED23"
    }).then((connection) => {
        connection.query('CREATE DATABASE IF NOT EXISTS caio;').then(() => {
            // Safe to use sequelize now
        });
    }).finally(
        sequelize.authenticate().then(function(){
            console.log("Conexão OK");
        }).catch(function(){
            console.log("ERRO Conexão banco");
        })
    );

// Option 1: Passing a connection URI

module.exports = sequelize;