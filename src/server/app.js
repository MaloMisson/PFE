const express = require('express');
const app = express();
const db = require('./modules/db1.js');
const path = require('path');
var session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Router
const indexRouter = require('./routes/index');
const APIUser = require('./routes/api_user');
const APIArticle = require('./routes/api_article');
const APICategorie = require('./routes/api_categorie');
const APISale = require('./routes/api_sale');

//database connction
db.connect();

//set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));

//Routes
app.use('/', indexRouter);
app.use('/user/', APIUser);
app.use('/article/', APIArticle);
app.use('/categorie/', APICategorie);
app.use('/sale/', APISale);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;