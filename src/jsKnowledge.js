//Declaro constante
const inputButton = document.getElementById("inputButton");
const datatype_practice = document.getElementById("datatype_practice")

//Funcion que chequea el tipo de dato
inputButton.addEventListener("click", function (){
    const dato1_value = document.getElementById("dato1_value").value;
    const dato2_value = document.getElementById("dato2_value").value;

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

function isValidNumber(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}

function plus() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerText = "⚠️ ONLY NUMBERS!!!";
        return;
    }

    let resultado = parseFloat(number1) + parseFloat(number2);
    document.getElementById("result").innerText = "The result is: " + resultado;
}


function minus(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerText = "⚠️ Ingresa solo números válidos";
        return;
    }

    let resultado = parseFloat(number1) - parseFloat(number2);
    document.getElementById("result").innerText = "The result is: " + resultado;
}

function times(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerText = "⚠️ Ingresa solo números válidos";
        return;
    }

    let resultado = parseFloat(number1) * parseFloat(number2);
    document.getElementById("result").innerText = "The result is: " + resultado;
}

function divided(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        document.getElementById("result").innerText = "⚠️ Ingresa solo números válidos";
        return;
    }

    if(number2 == 0){
        document.getElementById("result").innerText = "The result is: Error";
    }else {
        resultado = number1 / number2;
        document.getElementById("result").innerText = "The result is: " + resultado;
    }
}

