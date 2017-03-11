"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero(n1, n2) {
        this._n1 = n1;
        this._n2 = n2;
    }
    Object.defineProperty(Numero.prototype, "n1", {
        get: function () {
            return this._n1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "n2", {
        get: function () {
            return this._n2;
        },
        enumerable: true,
        configurable: true
    });
    return Numero;
}());
exports.Numero = Numero;
