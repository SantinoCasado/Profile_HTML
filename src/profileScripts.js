/* Variables */

/* tenés acceso al formulario HTML desde JavaScript, y podés interactuar con él*/
const formulario = document.getElementById("formulario");
const datatype = document.getElementById("datatype");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nformationInput = document.getElementById("information")

//-------------------------------------------------------------------------------
// Función de validación: solo letras y espacios
function validarNombre(str) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  return regex.test(str);
}

// Color dinámico del input
nameInput.addEventListener("input", () => {
  const name_value = nameInput.value.trim();

  if (!validarNombre(name_value) || name_value === "") {
    nameInput.style.backgroundColor = "rgba(255, 0, 0, 0.37)";
    nameInput.style.border = "2px solid red";
  } else {
    nameInput.style.backgroundColor = "rgba(0, 128, 0, 0.733)";
    nameInput.style.border = "2px solid green";
  }
});

// Validación al enviar el formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const name_value = nameInput.value.trim();

  if (!validarNombre(name_value)) {
    alert("Your name can't have numbers or symbols!");
  } else {
    alert("Information sent correctly.");
    formulario.reset();
    nameInput.style.backgroundColor = "";
    nameInput.style.border = "";
  }
});

//-----------------------------------------------------------------------------------
/*Script que utiliza la funcion show alert, 
pasandole el parametro del nombre de la plataforma */

function showAlertLinks(platform) {
  alert("Opening the " + platform + " profile...");
}

function showAlertSkills(platform) {
  alert("Opening the " + platform + " original page");
}


function showAlertDownload(archive, event) {
  event.preventDefault(); // evita que el link se abra antes

  const response = confirm("Do you want to download the " + archive + "?");

  if (response) {
    // solo si acepta, se inicia la descarga
    window.location.href = "pdf/TUP_Plan-de-Estudio-2024.pdf";
  } else {
    alert("Download cancelled.");
  }
}


//-----------------------------------------------------------------------------------------------------------------
//Guardado de datos
