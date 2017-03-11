"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this._cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "cadena", {
        get: function () {
            return this._cadena;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
