/*5. For
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

var palabras = ["Había", "una", "vez", "un", "lobo"];
for (let index = 0; index < palabras.length; index++) {
    const element = palabras[index];
    alert(element);
}

palabras.forEach(element => {
    alert(element.substring(0,1).toUpperCase()+ element.substring(1,6).toLowerCase());
});

var arrayVacio = [];
for (let index = 0; index < 10; index++) {
    arrayVacio.push(index);
}console.log(arrayVacio);