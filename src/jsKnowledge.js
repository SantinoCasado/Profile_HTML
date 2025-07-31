//Declaro constante
const inputButton = document.getElementById("inputButton");
const datatype_practice = document.getElementById("datatype_practice")

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const timesButton = document.getElementById("timesButton");
const dividedButton = document.getElementById("dividedButton");

const comparatorButton = document.getElementById("comparatorButton");
const resultComparator = document.getElementById("resultComparator");

//Funcion que chequea el tipo de dato
inputButton.addEventListener("click", function (){
    let dato1_value = document.getElementById("dato1_value").value;
    let dato2_value = document.getElementById("dato2_value").value;

    let dato1, dato2;
    let dato1_tipo, dato2_tipo;

    // Dato 1
    if (!isNaN(dato1_value) && dato1_value.trim() !== "") {
        dato1 = Number(dato1_value);
    } else {
        dato1 = dato1_value;
    }
    dato1_tipo = typeof dato1;

    // Dato 2
    if (!isNaN(dato2_value) && dato2_value.trim() !== "") {
        dato2 = Number(dato2_value);
    } else {
        dato2 = dato2_value;
    }
    dato2_tipo = typeof dato2;

    //Vacio
    if(dato1_value == ""){
        dato1_tipo = null;
    }

    if(dato2_value == ""){
        dato2_tipo = null;
    }

    datatype_practice.innerHTML = `The first data is: ${dato1_tipo}<br>The second data is: ${dato2_tipo}`;
});


//CALCULADORA

//VALIDACION SOLO NUMEROS
function isValidNumber(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}

plusButton.addEventListener("click", function(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerHTML = "⚠️ ONLY NUMBERS!!!";
        return;
    }

    let resultado = parseFloat(number1) + parseFloat(number2);
    document.getElementById("result").innerHTML = "The result is: " + resultado;
});

minusButton.addEventListener("click", function(){
    let number1 = document.getElementById("number1").value;
        let number2 = document.getElementById("number2").value;

        if (!isValidNumber(number1) || !isValidNumber(number2)) {
            document.getElementById("result").innerHTML = "⚠️ ONLY NUMBERS!!!";
            return;
        }

        let resultado = parseFloat(number1) - parseFloat(number2);
        document.getElementById("result").innerHTML = "The result is: " + resultado;
});

timesButton.addEventListener("click", function(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerHTML = "⚠️ ONLY NUMBERS!!!";
        return;
    }

    let resultado = parseFloat(number1) * parseFloat(number2);
    document.getElementById("result").innerHTML = "The result is: " + resultado;
});

dividedButton.addEventListener("click", function(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerHTML = "⚠️ ONLY NUMBERS!!!";
        return;
    }

    if(number2 == 0){
        document.getElementById("result").innerHTML = "The result is: Error";
    }else {
        resultado = number1 / number2;
        document.getElementById("result").innerHTML = "The result is: " + resultado;
    }
});

//Comparator
//Parseador de tipo
// Parseador de tipo
function parseValue(val) {
    if (val.toLowerCase() === "true") return true;
    if (val.toLowerCase() === "false") return false;
    if (!isNaN(val) && val !== "") return Number(val);
    return val;
}

comparatorButton.addEventListener("click", function(event) {
    event.preventDefault();

    let mensaje = "";
    let comparador1 = document.getElementById("comparador1").value.trim();
    let comparador2 = document.getElementById("comparador2").value.trim();

    const dato1 = parseValue(comparador1);
    const dato2 = parseValue(comparador2);

    // Comparación con ==
    if (dato1 == dato2) {
        mensaje += "Do the two have the same values? ✅ Yes<br>";
    } else {
        mensaje += "Do the two have the same values? ❌ No<br>";
    }

    // Comparación de tipo
    if (typeof dato1 === typeof dato2) {
        mensaje += "Are they the same type? ✅ Yes<br>";
    } else {
        mensaje += "Are they the same type? ❌ No<br>";
    }

    // Comparación con ===
    if (dato1 === dato2) {
        mensaje += "Are they strictly the same? ✅ Yes<br>";
    } else {
        mensaje += "Are they strictly the same? ❌ No<br>";
    }

    // Comparación de mayor/menor
    if (dato1 > dato2) {
        mensaje += "The first value is greater than the second.";
    } else if (dato1 < dato2) {
        mensaje += "The second value is greater than the first.";
    } else {
        mensaje += "Both values are equal.";
    }

    resultComparator.innerHTML = mensaje;
});