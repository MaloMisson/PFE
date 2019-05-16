const color = require("../modules/color.js");

let printWarning = function(string){
    console.log(color.RED+"/!\\ /!\\ "+string+color.RESET);
}

exports.printWarning = printWarning;