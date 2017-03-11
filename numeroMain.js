"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numero_1 = require("./numero");
var nums = new Array();
nums.push(new numero_1.Numero(4, 6));
nums.push(new numero_1.Numero(3, 7));
nums.push(new numero_1.Numero(3, 6));
nums.push(new numero_1.Numero(1, 4));
nums.push(new numero_1.Numero(4, 3));
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    console.log(num.n1 + " + " + num.n2 + " = " + suma(num.n1, num.n2));
    console.log(num.n1 + " - " + num.n2 + " = " + resta(num.n1, num.n2));
    console.log(num.n1 + '! = ' + factorial(num.n1));
    //console.log(primo(num.n1,num.n2));
}

function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function factorial(n1) {
    var r = 1;
    for (var i = 1; i <= n1; i++) {
        r = r * i;
    }
    return r;
}

function primo(n1) {
    for (var i = 1; i < n1; i++) {
        for (var j = 2; j < i; j++) {
            r = r * i;
        }
    }
    return r;
}