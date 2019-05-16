const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
const indexRouter = require('./routes/index');
const APIRouter = require('./routes/api');
const APIUser = require('./routes/api_user');
const APIArticle = require('./routes/api_article');

//Routes
app.use('/', indexRouter);
app.use('/API/', APIRouter);
app.use('/API/user/', APIUser);
app.use('/API/article/', APIArticle);


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