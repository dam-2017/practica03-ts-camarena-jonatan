export class Numero{
    private _n1:number;
    private _n2:number;
    constructor(n1:number,n2:number){
        this._n1 = n1;
        this._n2 = n2;
    }
    get n1():number{
        return this._n1;
    }

    get n2():number{
        return this._n2;
    }
}