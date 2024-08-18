/* 
1. Declara dos variables valor y porcentaje.
Calcular el valor que representa el porcentaje de valor y muestra el resultado en consola

Nota: 
dividimos porcentaje / 100
multipilicamos el resultado de la divisio por valor | Resultado * valor

*/

console.log("Ejercicio #1");

let valor, porcentaje ;
valor = 25;
porcentaje = 50;

let resultadoEjer1 = (porcentaje / 100) * valor ;

console.log("El " + porcentaje + "% de " + valor + " es " + resultadoEjer1 );

console.log("\nEjercicio #2");

/*
2. Declara una variable número. Escribe un programa que determine si el número es par 
o impar utilizando el operador %(modulo) y muestra el resultado en consola

Nota:
El operador: módulo " % " se utiliza para obtener el resto de una division de dos numeros,
si el numero es divisile por 2 sin dejar restos, Ejemplo: 0, el numero sera par, si el resto es 1 seria impar.
*/

let numero, resultado;
numero = 87;
resultado = numero%2;

if (resultado % 2 === 0){
    console.log(numero + " es un numero par, Resto: " + resultado);
}else{
    console.log(numero + " es un numero impar, Resto: " + resultado);
};

/*
3.- Declara una variable contador e inicialíza en 0. Luego, usa los operadores de 
incremento (++) y decremento (--) para modificar el valor de contador y muestra
cada valor en la consola.

Nota:
con el operador incremento representado con dos signos de +, Ejemplo: (++) podemos aumentar el valor de
la varibale contador, Ejemplo: contardor++, Resultado: contador = 1
con el operador decremento representado con dos signos de -, Ejemplo: (--) podemos disminuir el valor de
la varibale contador, Ejemplo: contardor--, Resultado: contador = 0. (resutado 0 porque el valor de contador
seria 1.)
*/

console.log("\nEjercicio #3");

let contador = 0;

console.log("valor Inicial: "+ contador);
contador++;
console.log("valor incementado: "+ contador);
contador--;
console.log("valor decrementado: "+ contador);
