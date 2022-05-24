/*3. Arrays
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse).
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4] + " " + meses[10]);

var mesesAlfabetico = meses.sort();

var mesesInicio = meses.unshift("Los meses: ");
var mesesFinal= meses.push("Fin.");

meses.shift();
meses.push();

meses.reverse();

var mesesGuion = meses.join("-");

var mesesMN = meses.slice(4,11);