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

//Bucles
//For
function ejecutarFor(){
  const input = parseInt(document.getElementById("inputFor").value);
  const etiqueta = document.getElementById("resultadoFor");
  etiqueta.innerHTML = '';

  for(let i=1; i <= input;i++){
    etiqueta.innerHTML += `Este es el ciclo N°: ${i} <br>`; 
  }
}
//While
function iniciarWhile(){
  let contador = 1;
  const input = parseInt(document.getElementById("inputWhile").value);
  const etiqueta = document.getElementById("resultadoWhile");
  etiqueta.innerHTML = '';
  contador = 1;

  intervalo = setInterval(() => {
    if(contador <= input){
      etiqueta.innerHTML += `| ${contador}`;
      contador++;
    }else{
      clearInterval(intervalo);
    }
  }, 2000);
}

function detenerWhile(){
  clearInterval(intervalo);
}

//Archivos
//Json
// Traer informacion, primer forma
async function traermisCursos() {   //permite usar await para manejar tareas que toman tiempo (como traer datos de un archivo).
    //espera a que la respuesta llegue antes de segui
    await fetch('api.json')   //Solicita el archivo api.json usando fetch.
    .then(respuesta => respuesta.json())    //Convierte la respuesta a formato JSON para que se pueda manipular en JavaScript.
    .then(data =>{          //Una vez que tenemos los datos en formato JSON (suponiendo que es un array de cursos), se ejecuta la lógica para mostrarlos.
    const etiqueta = document.getElementById("resultadoFunciones"); //Busca en el DOM el elemento donde se van a mostrar los resultados.
    etiqueta.innerHTML ="";     //Limpia cualquier contenido previo en ese elemento.

    data.forEach(curso => {     //Recorre cada objeto curso dentro del array y crea un nuevo párrafo con su contenido.
      const p = document.createElement('p');    //Crea un elemento HTML <p> para cada curso.¿
      p.innerText = `${curso.id}:${curso.titulo} - Temas: ${curso.temas}`;      //Inserta el texto con la información del curso (usando Template Literals).
      etiqueta.appendChild(p);  //- Agrega el párrafo al elemento resultadoFunciones.
    });
  })
  .catch(error => { //- Si ocurre cualquier error en el proceso (por ejemplo, no se encuentra api.json), muestra un mensaje en pantalla.
    etiqueta.innerText = "Error al cargar los datos";
  });
}

//Segunda forma
async function traermisCursos() {
  try {
    const respuesta = await fetch('api.json');
    const data = await respuesta.json();
    
    const etiqueta = document.getElementById("resultadoFunciones");
    etiqueta.innerHTML = "";

    data.forEach(curso => {
      const p = document.createElement('p');
      p.innerText = `${curso.id}: ${curso.titulo} - Temas: ${curso.temas}`;
      etiqueta.appendChild(p);
    });
  } catch (error) {
    const etiqueta = document.getElementById("resultadoFunciones");
    etiqueta.innerText = "Error al cargar los datos";
    console.error("Hubo un problema al traer los cursos:", error);
  }
}

//DOM
function crearDiv(){
  const contenedor = document.getElementById("DOM");

  const newDIV = document.createElement("div");
  newDIV.id = "divgenerado";
  const p = document.createElement("p");

  p.innerText = "Soy un div creado desde el DOM de Javascript"

  newDIV.style.padding = "5px";
  newDIV.style.margin = "10px 0";
  newDIV.style.backgroundColor = "#f0f0f0"
  newDIV.appendChild(p);
  contenedor.appendChild(newDIV);
}

function eliminarDiv(){
  const tarjeta = document.getElementById("divgenerado");
  if(tarjeta){
    tarjeta.remove();
  }
}

// Eventos
zona1.onmouseover = () => {
  zona1.innerHTML = "Estoy siendo seleccionado";
  zona1.style.boxShadow = "0 0 10px cyan"
}

zona1.onmouseout = () => {
  zona1.innerText = "Ya no estoy siendo seleccionado"
  zona1.style.boxShadow = "none";
}

zona1.onclick = () => {
  zona1.style.border = "4px dashed purple";
  zona1.innerText = "Has hecho click"
}

zona1.onmousedown = () => {
  zona1.innerText = "Estas dando click"
}

zona1.onmouseup = () => {
  zona1.innerText = "Soltaste con el botón derecho"
}

document.addEventListener("contextmenu", function(event){
  event.preventDefault();
})

zona1.ondblclick = () => {
  zona1.style.background = "pink";
  zona1.innerText = "Doble click, he cambiado mi fondo";
}

zona2.addEventListener("keydown", (e) =>{
  zona2.innerText = `Has presionado: ${e.key}`;
});

zona2.addEventListener("keyup", (e) =>{
  zona2.innerText = `Has soltado: ${e.key}`;
})

zona2.addEventListener("click", () => {
  zona2.focus();
  zona2.innerText = "Estoy listo para recibir información";
})
