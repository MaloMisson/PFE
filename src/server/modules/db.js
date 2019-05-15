const { Client } = require('pg');

let db = (function(){
    const db = new Client({
        user: 'hzewnisw',
        host: 'manny.db.elephantsql.com',
        database: 'hzewnisw',
        password: 'QtFVbCTSUNKDzXeqgHP485ehEOtEaynd',
        port: 5432,
    });

    db.connect();

    // SELECT USER BY PSEUDO
    function selectUser(user){
        const queryText = 'SELECT * FROM pfe.users WHERE pseudo = $1';
        const values = [user.pseudo];
        let result;
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            return result;
        });
    }

    // INSERT UTILISATEUR
    function insertUser(user){
        const queryText = 'INSERT INTO pfe.users (pseudo,firstname,lastname,password,address,number,zip_code,city,country,email,phone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
        const values = [user.pseudo,user.firstname,user.lastname,user.password,user.address,user.number,user.zip_code,user.city,user.country,user.email,user.phone];
        let result;
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            return result;
        })
    }

    // UPDATE UTILISATEUR
    function updateUser(user){
        const queryText = 'UPDATE pfe.users SET pseudo = $1, firstname = $2, lastname = $3, password = $4, address = $5, number = $6, zip_code = $7, city = $8, country = $9, email = $10, phone = $11 WHERE id_user = $12 RETURNING *';
        const values = [user.pseudo,user.firstname,user.lastname,user.password,user.address,user.number,user.zip_code,user.city,user.country,user.email,user.phone,user.id_user];
        let result;
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            return result;
        })
    }

    // SELECT ALL PRODUCTS
    function selectProducts(){
        const queryText = 'SELECT * FROM pfe.products';
        let result;
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows;
            }
            return result;
        });
    }

    // INSERT PRODUCT
    function insertProduct(product){
        const queryText = 'INSERT INTO pfe.products (id_seller,id_buyer,state,description,price) VALUES ($1,$2,$3,$4,$5) RETURNING *';
        const values = [product.id_seller,product.id_buyer,product.state,product.description,product.price];
        let result;
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            return result;
        })
    }

    // UPDATE PRODUCT
    function updateProduct(product){
        const queryText = 'UPDATE pfe.products SET id_seller = $1, id_buyer = $2, state = $3, description = $4, price = $5 WHERE id_product = $6 RETURNING *';
        const values = [aticle.id_seller,product.id_buyer,product.state,product.description,product.price,product.id_product];
        let result;
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            return result;
        })
    }

    function close(){
        db.end();
    }

    var self = {
        selectUser : selectUser,
        insertUser : insertUser,
        updateUser : updateUser,
        selectProducts : selectProducts,
        insertProduct : insertProduct,
        updateProduct : updateProduct
    };
    return self;
})();

exports.DB = db;