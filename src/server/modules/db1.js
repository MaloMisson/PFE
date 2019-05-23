const { Client } = require('pg');
const assert = require('assert');
/*
const dbUser = prosess.env.DB_USER;
const dbHost = prosess.env.DB_HOST;
const dbDatabase = prosess.env.DB_DATABASE;
const dbPassword = prosess.env.DB_PASSWORD;
const dbPort = prosess.env.DB_PORT;

const db = new Client({
    user: 'hzewnisw',
    host: 'manny.db.elephantsql.com',
    database: 'hzewnisw',
    password: 'QtFVbCTSUNKDzXeqgHP485ehEOtEaynd',
    port: 5432,
});
*/
const db = new Client({
    user: 'mozzon_pfe',
    host: 'mozzon.net',
    database: 'mozzon_dev',
    password: 'MKJ(D]Km1P$_',
    port: 5432,
});

function connect(){
    db.connect().then(()=>{
        exports.db = db;
        return db;
    }).catch(err => console.error('connection error', err.stack));
}

/**
 * Exports
 */
exports.connect = connect;
exports.db = null; // db will be set after connected;