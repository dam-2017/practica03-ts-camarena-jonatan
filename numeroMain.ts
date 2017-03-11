import { Numero } from './numero';

let nums = new Array<Numero>();

nums.push(new Numero(4,6));
nums.push(new Numero(3,7));
nums.push(new Numero(3,6));
nums.push(new Numero(1,4));
nums.push(new Numero(4,3));

for(let num of nums){
    console.log(suma(num.n1,num.n2));
    console.log(resta(num.n1,num.n2));
    console.log(factorial(num.n1));
    //console.log(primo(num.n1,num.n2));
}

function suma(n1:number,n2:number){
    return n1+n2;
}
function resta(n1:number,n2:number){
    return n1-n2;
}
function factorial(n1:number) {
    var r = 1;
    for (var i = 1; i <= n1; i++) {
        r = r * i;
    }
    return r;
}