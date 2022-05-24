/*6. Funciones
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

//PARTE 1
    var numero1 = 9;
    var numero2 = 12;
    function suma(){
        var resultadoSuma = numero1 + numero2;
        return resultadoSuma;
    }
    console.log(suma());

    //PARTE 2
    var numero1 = 9;
    var numero2 = "a";
    function suma(){
        var resultadoSuma = numero1 + numero2;
        return resultadoSuma;
    }

    function sumaValidada(){
        if (typeof numero1 === 'number' && typeof numero2 === 'number') {
            console.log(suma());
        } else {
            alert("Uno de los parámetros NO es un número.");
        }
    }
    sumaValidada();

    //PARTE 3
    var numero1 = 9;
    var numero2 = 12.4;
    function suma(){
        var resultadoSuma = numero1 + numero2;
        return resultadoSuma;
    }

    function chequearEnteros(){
        if (Number.isInteger(numero1) && Number.isInteger(numero2)) {
            console.log(suma());
        }else{
            alert("Error, alguno de los números no es un entero. Pasados a enteros serían: " + (Math.trunc(numero1)) + " y " + (Math.trunc(numero2)));
        }
    }
    function sumaValidada(){
        if (typeof numero1 === 'number' && typeof numero2 === 'number') {
            chequearEnteros();
        } else {
            alert("Uno de los parámetros NO es un número.");
        }
    }
    sumaValidada();
    
