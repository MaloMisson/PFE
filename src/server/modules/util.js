const color = require("../modules/color.js");
var jwt = require('jsonwebtoken');

let printWarning = function(string){
    console.log(color.RED+"/!\\ /!\\ "+string+color.RESET);
}

//JWT variables
const jwtSecret = 'zfefzqefzfqkl,vql,vojm';
const jwtExpireTime = 86400;
const cookieExpireTime = 60*60*24;

function setToken(userId, res){
    var token = jwt.sign(
        { id: userId }, 
        jwtSecret, 
        { expiresIn: jwtExpireTime}
    );
    res.cookie('jwt',token, { maxAge: cookieExpireTime, httpOnly: true });
}

function verifToken(req){
    return new Promise((resolve, reject) => {
        var cookies = parseCookies(req);
        var token = cookies["jwt"];
        jwt.verify(token, jwtSecret, function(err,decoded){
            if(err){
                reject();
            }else{
                resolve(decoded);
            }
        });
      });
}

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

exports.printWarning = printWarning;
exports.setToken = setToken;
exports.verifToken = verifToken;