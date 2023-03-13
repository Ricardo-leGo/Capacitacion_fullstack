
// Cadenas de texto 'string'

"hola"; 
'hola';

`hola`;

console.log("hola soy la consola");
console.log(console);
console.log( console["log"]);
console.log( console["warn"]);


console.log( console.log, "==========================>" );
console.log(   ("hola ")  );
// console.log(   ("hola "  );error de cerrado parentesis

// var  => Guarda informacion y la puedes modificar con el tiempo => ambito global
// let => guarda información y la puedes modificar con el tiempo => tiene ambito restringido
// const =>  Guarda  información dentro y no la puedes modificar => \\ <---- Estas funcionan con el tipo 

// Declaraciones 
var hola_var= "hola";
let hola_let = "hola";
const hola_const = "hola";



console.log( hola_var, "hola_var" );
console.log( hola_let, "hola_let" );
console.log( hola_const, "hola_const" );


//reasignaciones 
hola_var = "hola ya no tengo un guión bajo";
hola_let = "tampoco tengo un guion bajo ";


console.log(hola_var)
console.log(hola_let)

//hola_const= "quiero otrovalor";
//no se puede reasignar const
//console.log(hola_const);


console.log("hola".toUpperCase());
console.log("hola".concat(" <========== "));


console.log(hola_var.toUpperCase())
console.log(hola_var.toUpperCase().toLowerCase())


const cinco=5;

console.log( cinco, typeof cinco , typeof hola_const);

const Objetos = {};

const ObjetoNuevo ={
    llave1:"hola son la primera llave",
    llave2:"hola soyo la llave 2",
    llave3: cinco,
    llave4:hola_let
}
console.log(ObjetoNuevo, "soy el objeto nuevo")


ObjetoNuevo.nuevallave= "soy un string nueo ";
//ObjetoNuevo = "string"; <- ojo

console.log(ObjetoNuevo, "objeto con llave nueva");
const Arrays =[];


const ArrayDeObjetos = [{}]
//DOM->  Document Object Model

