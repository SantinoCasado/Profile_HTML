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


//DataType check
const buttonform = document.getElementById("buttonform");
const datatype = document.getElementById("datatype");

buttonform.addEventListener("click", function (event) {
  event.preventDefault();

  let tipo1 = "Hola";
  let tipo2 = 1998;
  let tipo3 = true;

  datatype.innerHTML = `
 El tipo1 es: <b>${typeof tipo1}</b><br>
 El tipo2 es: <b>${typeof tipo2}</b><br>
 El tipo3 es: <b>${typeof tipo3}</b><br>`
;
});


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

//Comparadores
comparador1 = 1
comparador2 = 1

//Comparar valores ==
if(comparador1 == comparador2)
{
    mensaje += "<p> Los valores son iguales </p>"
}else{
    mensaje += "<p> Los valores no son iguales </p>"
}

//Comparar tipo de dato o Comparación estricta ===
if(comparador1 === comparador2){
    mensaje += "<p> Son estrictamente iguales </p>"
}else{
    mensaje += "<p> No son estrictamente iguales"
}

//Comparación por mayor y menor que
if(comparador1 > comparador2){
    mensaje += "<p> El comparador 1 es mayor que el comparador 2"
}else{
    mensaje += "<p> El comparador 2 es mayor que el comparador 1"
}
