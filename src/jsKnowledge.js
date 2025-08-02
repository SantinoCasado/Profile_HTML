//Declaro constantes
//DataType
const inputButton = document.getElementById("inputButton");
const datatype_practice = document.getElementById("datatype_practice")

//Calculator
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const timesButton = document.getElementById("timesButton");
const dividedButton = document.getElementById("dividedButton");

//Comparator
const comparatorButton = document.getElementById("comparatorButton");
const resultComparator = document.getElementById("resultComparator");

//For
const createTableButton = document.getElementById("createTableButton");
const changePositionButton = document.getElementById("changePositionButton");
const table = document.getElementById("table");
const error = document.getElementById("error");

//While
const startRotationButton = document.getElementById("startRotationButton");
const stopRotationButton = document.getElementById("stopRotationButton");
const resetButton = document.getElementById("resetButton");
const img = document.querySelector(".imgLinux");

//Dom
const createDomButton = document.getElementById("createDomButton");
const deleteDomButton = document.getElementById("deleteDomButton");


//Events
const div_events = document.getElementById("div_eventos");

//Cat
const contenedor_gif = document.getElementById("contenedor_gif");
const imgCat = document.querySelector(".imgCat");
const messageCat = document.getElementById("event_mouse_on");
//Dog
const contenedor_clicks = document.getElementById("contenedor_clicks");
const imgDog = document.getElementById("imgDog");
const messageDog = document.getElementById("title_clicks");
//Mole
const contenedor_clicks_keyboard = document.getElementById("contenedor_clicks_keyboard");
const imgMole = document.getElementById("imgMole");
const messageMole = document.getElementById("title_clicksKeyboard");

//---------------------------------------------------------------------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//CALCULADORA
//VALIDACION SOLO NUMEROS (Peromite negativos y con coma)
function isValidNumber(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}
//VALIDACION SOLO NUMEROS ENTEROS POSITIVOS
function isValidPositiveInteger(value) {
    const num = Number(value);
    return Number.isInteger(num) && num > 0;
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
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//Comparator
//Parseador de tipo
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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create Table
let tableArray = []; // Se usará para guardar la tabla en memoria

createTableButton.addEventListener("click", function(event){
    //Valores ancho y largo
    const widthInput = document.getElementById("width").value.trim();
    const lengthInput = document.getElementById("length").value.trim();

    let tableContent = "";

    if (!isValidPositiveInteger(widthInput) || !isValidPositiveInteger(lengthInput)) {
        error.innerHTML = "Only positive integers.";
        return;
    }else{
        error.innerHTML = ""
        const width = parseInt(widthInput, 10);
        const length = parseInt(lengthInput, 10);

        tableArray = []; // Reiniciar la tabla

        for (let i = 0; i < length; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push("+");
            }
            tableArray.push(row);
        }

        // Generar visualmente la tabla
        for (let i = 0; i < tableArray.length; i++) {
            for (let j = 0; j < tableArray[i].length; j++) {
                tableContent += tableArray[i][j] + " ";
            }
            tableContent += "<br>";
        }
    }
    table.innerHTML = tableContent;
});

//Edit Table
changePositionButton.addEventListener("click", function(event){
    const xInput = document.getElementById("x_position").value.trim();
    const yInput = document.getElementById("y_position").value.trim();

    if (!isValidPositiveInteger(xInput) || !isValidPositiveInteger(yInput)) {
        error.innerHTML = "Invalid coordinates.";
        return;
    }

    const x = parseInt(xInput, 10) - 1;
    const y = parseInt(yInput, 10) - 1;


    // Validar si la posición está dentro del rango
    if (y >= tableArray.length || x >= tableArray[0].length) {
        error.innerHTML = "Those coordinates are out of range.";
        return;
    }else{
        error.innerHTML = ""
        // Cambiar el valor
        tableArray[y][x] = (tableArray[y][x] === "+") ? "-" : "+"; // - Si es verdad (true), se asigna "-" a la celda | Si es falso (false), se le pone de nuevo un "+".


        // Reconstruir tabla con for
        let tableContent = "";
        for (let i = 0; i < tableArray.length; i++) {
            for (let j = 0; j < tableArray[i].length; j++) {
                tableContent += tableArray[i][j] + " ";
            }
            tableContent += "<br>";
        }
        table.innerHTML = tableContent;
        }
});
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//Rotate Image
let rotationAngle = 0;
let rotating = false;


function rotateImage() {
    // Usamos while controlado con setTimeout
    function loop() {
        if (!rotating) return; // Salir si se detiene

        rotationAngle += 5; // Incrementar ángulo
        img.style.transform = `rotate(${rotationAngle}deg)`;

        setTimeout(loop, 20); // Repetir
    }
    loop();
}


startRotationButton.addEventListener("click", function () {
    if (rotating) return; // Evitar múltiples ciclos
    rotating = true;
    rotateImage(); // Comienza el ciclo
});

stopRotationButton.addEventListener("click", function () {
    rotating = false;
});

resetButton.addEventListener("click", function(){
    rotationAngle = 0;
    img.style.transform = `rotate(${rotationAngle})`; // Restablece visualmente la rotación
});

//--------------------------------------------------------------------------------------------------------------------------------
//DOM
createDomButton.addEventListener("click", function () {
    const contenedor = document.getElementById("div_dom");
    const messageInput = document.getElementById("texto_input");

    const newDIV = document.createElement("div");
    newDIV.id = "divgenerado";

    const pMensaje = document.createElement("p");
    const pDescripcion = document.createElement("p");

    // Acceder correctamente al valor del input
    if (messageInput.value.trim() === "") {
        pMensaje.innerText = "Empty";
    } else {
        pMensaje.innerText = messageInput.value;
    }

    pDescripcion.innerText = "I'm a div created by the DOM of JavaScript";

    pMensaje.style.color = "yellow"
    newDIV.style.padding = "5px";
    newDIV.style.margin = "10px 0";
    newDIV.style.backgroundColor = "#f0f0f018";

    newDIV.appendChild(pMensaje);
    newDIV.appendChild(pDescripcion);
    contenedor.appendChild(newDIV);
});

deleteDomButton.addEventListener("click", function () {
    const tarjeta = document.getElementById("divgenerado");
    if (tarjeta) {
        tarjeta.remove();
    }
});


//Events
//Mouse on the cat
contenedor_gif.addEventListener("mouseover", () => {
    messageCat.innerHTML = "uiia uiia uiia 😼🎶";
    imgCat.src = "img/mouse_on_out/oiiaoiia.gif"; // Usás tu nuevo GIF acá
});


contenedor_gif.addEventListener("mouseout", () => {
    messageCat.innerHTML = "Put your mouse on the cat!";
    imgCat.src = "img/mouse_on_out/CatNoGif.jpg"
});

//Clicks
let estadoInteraccion = "inicial"; // "inicial" → "clickeado" → "manteniendo"

contenedor_clicks.addEventListener("click", () => {
    if (estadoInteraccion === "manteniendo") return; // evitamos el doble efecto

    estadoInteraccion = "clickeado";

    messageDog.innerHTML = "oof!(hello!)";
    imgDog.src = "img/click_double_onClick/one_click.jpg";

    limpiarMensajes();

    if (!document.getElementById("pMensajeClick")) {
        const pMensaje = document.createElement("p");
        pMensaje.id = "pMensajeClick";
        pMensaje.innerText = "Now try to hold it!";
        contenedor_clicks.appendChild(pMensaje);
    }
});

contenedor_clicks.addEventListener("mousedown", () => {
    if (estadoInteraccion !== "clickeado") return; // sólo se puede mantener tras un clic previo

    estadoInteraccion = "manteniendo";

    messageDog.innerHTML = "oof";
    imgDog.src = "img/click_double_onClick/on_mouse_down.webp";

    limpiarMensajes();

    if (!document.getElementById("pMensajeHold")) {
        const pMensaje = document.createElement("p");
        pMensaje.id = "pMensajeHold";
        pMensaje.innerText = "I think he wants to rest";
        contenedor_clicks.appendChild(pMensaje);
    }
});

contenedor_clicks.addEventListener("mouseup", () => {
    if (estadoInteraccion === "manteniendo") {
        messageDog.innerHTML = "He is ready now!";
        imgDog.src = "img/click_double_onClick/no_click.jpg";
        
        limpiarMensajes()

        setTimeout(() => {
        estadoInteraccion = "inicial"; // volvemos al comienzo
        }, 150);
    }
});

// Limpieza de mensajes
function limpiarMensajes() {
    const msgClick = document.getElementById("pMensajeClick");
    const msgHold = document.getElementById("pMensajeHold");
    if (msgClick) msgClick.remove();
    if (msgHold) msgHold.remove();
}

//Click any key, Mole

document.addEventListener("keydown", () => {
    messageMole.innerHTML = "OUCH, what the hell man???";
    imgMole.src = "img/click_keyboard/mole_clicked.png";
});

document.addEventListener("keyup", () => {
    messageMole.innerHTML = "Why did you do that??";
    imgMole.src = "img/click_keyboard/mole_afterClick.png";
});
