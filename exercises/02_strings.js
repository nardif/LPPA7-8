/*2. Strings
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
var string5 = "Hola mundo";
var string6 = string5.substring(0,5);

var string7 = "HOLA MUNDO";
var string8 = string7.substring(0,1).toUpperCase() + string7.substring(1,10).toLowerCase();

var blankspace = string7.indexOf(" ");