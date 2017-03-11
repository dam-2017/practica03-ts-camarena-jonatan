import { Cadena } from './cadena';

let cads = new Array<Cadena>();

cads.push(new Cadena("honda"));
cads.push(new Cadena("civic"));
cads.push(new Cadena("toyota"));
cads.push(new Cadena("jonatan"));
cads.push(new Cadena("ama"));

for(let cad of cads){
    console.log(palindromo(cad.cadena));
    console.log(contarLetras(cad.cadena));
    console.log(contarVocales(cad.cadena));
}
cads.forEach(cad=>{
    console.log(cad);
});

function contarLetras(cadena:string):number{

    return cadena.split('').length;
}
function contarVocales(cadena:string):number{
    var array = cadena.split('');
    var con = 0;
    for(var i=0; i<array.length; i++){
        
        if(array[i]=='a'|| array[i]=='e' || array[i]=='i' || array[i]=='o' || array[i]=='u'){
            con++;
        }
    }
    return con;
}
function palindromo(cadena:string):string{
    if(cadena.split('').reverse().join() == cadena.split('').join()){
        return "palindromo";
    }else{
        return "no palindromo";
    }
}
