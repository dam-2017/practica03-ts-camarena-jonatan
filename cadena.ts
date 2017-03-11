export class Cadena{
    private _cadena:string;
    constructor(cadena:string){
        this._cadena = cadena;     
    }
    get cadena():string{
        return this._cadena;
    }
}