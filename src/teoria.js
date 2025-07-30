/*Variables*/

//Se le puede modificar su valor
let = 2

//No se puede modificar
const 

//Tipos:
Number = 1234
String = "aaa"
Boolean = true
undefined   //No se asigno ningun dato TODAVIA
null        //Valor nulo

/* Operadores*/
function sumar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 + number2;
    document.getElementById("resultado").value = resultado;
}

function restar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 - number2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 * number2;
    document.getElementById("resultado").value = resultado;
}

function dividir(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 / number2;
    document.getElementById("resultado").value = resultado;
    if(number1 == 0 || number2 == 0){
        document.getElementById("resultado").value = "Error"
    }
}