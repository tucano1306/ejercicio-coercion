// 1. Realiza una coerción implícita
//SOLUTION:
const numero = 5;
const texto = "10";

const resultado1 = numero + texto; 
console.log(resultado1); 

const resultado2 = numero - texto; 
console.log(resultado2); 

console.log(numero == "5"); 

if ("") {
    console.log("Esto no se ejecutará");
} else {
    console.log("Esto sí se ejecutará porque '' es falsy"); 
}

// 2. Realiza una coerción explícita
//SOLUTION:

//const texto = "3.14";


const numero1 = Number(texto);
console.log(numero1); 
console.log(typeof numero1); 


const numero2 = parseInt(texto);
console.log(numero2); // 3
console.log(typeof numero2); 

const numero3 = parseFloat(texto);
console.log(numero3); 
console.log(typeof numero3); 


// 3. Sin modificar el código, qué valor se imprime en la consola?
/*** RECUERDA, NO USES QUOKKA, RÉTATE, APRENDERÁS MÁS Y DOMINARÁS EL TEMA ***/
//SOLUTION
console.log(2 + '2'); // R= '22'
console.log(1 + 1 + '2'); // R= '22'
console.log(+[] + 5); // R= 5
console.log('2' + 1 + 1); // R= '211'
console.log(true + true); // R= 2
console.log(true / null); // R= Infinity 
console.log([] + 5); // R= '5'
console.log(+'n' + 'c' + 'y'); // R= "NaNc"
console.log('20' - true); // R= 19
console.log(true + '20'); // R= '120'
console.log(25 + undefined); //R= NaN
console.log(null + true); // R= 1
console.log('b' + 'a' + +'a' + 'a'); //R = "baNaNa"
console.log(1 / []); //R= Infinity
console.log('{}' + 5); // R= "{}5"

console.log('5' - '2'); //R= 3

console.log(Number([])); // R= 8
console.log(Boolean([false, false, false])); //R= TRUE
console.log(String(false)); //R= "FALSE"
console.log(String(Number(Boolean({})))); //R= "1"

console.log(true + +'5'); //R= 6
console.log(+null); //R= 0
console.log(+undefined); //R= NaN
console.log(+NaN); //R= NaN
