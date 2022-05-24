/*4. If Else
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65.
 */

var num1 = Math.random();
if (num1 >= 0.5) {
    alert("Greater than 0,5");
}else{
    alert("lower than 0,5");
}

var Age = 14;
if (Age < 18) {
    alert("Menor");
}if(Age >= 18 && Age < 65){
    alert("Mayor");
}if(Age > 65){
    alert("Jubilado");
}