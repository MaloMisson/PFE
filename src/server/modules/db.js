const { Client } = require('pg');

/*const dbUser = prosess.env.DB_USER;
const dbHost = prosess.env.DB_HOST;
const dbDatabase = prosess.env.DB_DATABASE;
const dbPassword = prosess.env.DB_PASSWORD;
const dbPort = prosess.env.DB_PORT;*/

let db = (function(){
    const db = new Client({
        user: 'hzewnisw',
        host: 'manny.db.elephantsql.com',
        database: 'hzewnisw',
        password: 'QtFVbCTSUNKDzXeqgHP485ehEOtEaynd',
        port: 5432,
    });

    // SELECT ALL USERS
    function selectUsers(){
        const queryText = 'SELECT * FROM pfe.users';
        let result;
        db.connect();
        db.query(queryText, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows;
            }
            db.end();
            return result;
        });
    }

    // INSERT USER
    function insertUser(user){
        const queryText = 'INSERT INTO pfe.users (pseudo,firstname,lastname,password,address,number,zip_code,city,country,email,phone,description) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *';
        const values = [user.pseudo,user.firstname,user.lastname,user.password,user.address,user.number,user.zip_code,user.city,user.country,user.email,user.phone,user.description];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    // UPDATE USER
    function updateUser(user){
        const queryText = 'UPDATE pfe.users SET pseudo = $1, firstname = $2, lastname = $3, password = $4, address = $5, number = $6, zip_code = $7, city = $8, country = $9, email = $10, phone = $11, description = $12 WHERE id_user = $13 RETURNING *';
        const values = [user.pseudo,user.firstname,user.lastname,user.password,user.address,user.number,user.zip_code,user.city,user.country,user.email,user.phone,user.description,user.id_user];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    // SELECT ALL CATEGORIES
    function selectCategories(){
        const queryText = 'SELECT * FROM pfe.categories';
        let result;
        db.connect();
        db.query(queryText, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows;
            }
            db.end();
            return result;
        });
    }

    // INSERT CATEGORY
    function insertCategory(category){
        const queryText = 'INSERT INTO pfe.categories (name) VALUES ($1) RETURNING *';
        const values = [category.name];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    // UPDATE CATEGORY
    function updateCategory(category){
        const queryText = 'UPDATE pfe.categories SET name = $1 WHERE id_category = $2 RETURNING *';
        const values = [category.name,category.id_category];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    // SELECT ALL PRODUCTS
    function selectProducts(){
        const queryText = 'SELECT * FROM pfe.products';
        let result;
        db.connect();
        db.query(queryText, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows;
            }
            db.end();
            return result;
        });
    }

    // INSERT PRODUCT
    function insertProduct(product){
        const queryText = 'INSERT INTO pfe.products (id_seller,id_category,name,description,state,price) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
        const values = [product.id_seller,product.id_category,product.name,product.description,product.state,product.price];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    // UPDATE PRODUCT
    function updateProduct(product){
        const queryText = 'UPDATE pfe.products SET name = $1, description = $2, state = $3, price = $4 WHERE id_product = $5 RETURNING *';
        const values = [product.name,product.description,product.state,product.price,product.id_product];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    // SELECT ALL SALES
    function selectSales(){
        const queryText = 'SELECT * FROM pfe.sales';
        let result;
        db.connect();
        db.query(queryText, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows;
            }
            db.end();
            return result;
        });
    }

    // INSERT SALE
    function insertSale(sale){
        const queryText = 'INSERT INTO pfe.sales (id_product,id_buyer,id_stripe) VALUES ($1,$2,$3) RETURNING *';
        const values = [sale.id_product,sale.id_buyer,sale.id_stripe];
        let result;
        db.connect();
        db.query(queryText, values, (err, res) => {
            if (err) {
                result = null;
            } else {
                result = res.rows[0];
            }
            db.end();
            return result;
        })
    }

    var self = {
        selectUsers : selectUsers,
        insertUser : insertUser,
        updateUser : updateUser,
        selectCategories : selectCategories,
        insertCategory : insertCategory,
        updateCategory : updateCategory,
        selectProducts : selectProducts,
        insertProduct : insertProduct,
        updateProduct : updateProduct,
        selectSales : selectSales,
        insertSale : insertSale
    };
    return self;
})();

exports.DB = db;