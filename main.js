"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var cads = new Array();
cads.push(new cadena_1.Cadena("honda"));
cads.push(new cadena_1.Cadena("civic"));
cads.push(new cadena_1.Cadena("toyota"));
cads.push(new cadena_1.Cadena("jonatan"));
cads.push(new cadena_1.Cadena("ama"));
for (var _i = 0, cads_1 = cads; _i < cads_1.length; _i++) {
    var cad = cads_1[_i];
    console.log(palindromo(cad.cadena));
    console.log(contarLetras(cad.cadena));
    console.log(contarVocales(cad.cadena));
}
cads.forEach(function (cad) {
    console.log(cad);
});
function contarLetras(cadena) {
    return cadena.split('').length;
}
function contarVocales(cadena) {
    var array = cadena.split('');
    var con = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
            con++;
        }
    }
    return con;
}
function palindromo(cadena) {
    if (cadena.split('').reverse().join() == cadena.split('').join()) {
        return "palindromo";
    }
    else {
        return "no palindromo";
    }
}
