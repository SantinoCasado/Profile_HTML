/* Variables */

const formulario = document.getElementById("formulario");
const datatype = document.getElementById("datatype");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const informationInput = document.getElementById("information");

//-------------------------------------------------------------------------------
// Función de validación: solo letras y espacios
function validarNombre(str) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  return regex.test(str);
}

// Función de validación: email básico
function validarEmail(str) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
}

// Función de validación: texto no vacío
function validarTexto(str) {
  return str.trim().length > 0;
}

// Color dinámico del input nombre
nameInput.addEventListener("input", () => {
  const name_value = nameInput.value.trim();

  if (!validarNombre(name_value) || name_value === "") {
    nameInput.style.borderColor = "rgba(255, 0, 0, 0.37)";
    nameInput.style.border = "2px solid red";
  } else {
    nameInput.style.borderColor = "rgba(0, 128, 0, 0.733)";
    nameInput.style.border = "2px solid green";
  }
});

// Color dinámico del input email
emailInput.addEventListener("input", () => {
  const email_value = emailInput.value.trim();

  if (!validarEmail(email_value) || email_value === "") {
    emailInput.style.borderColor = "rgba(255, 0, 0, 0.37)";
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.borderColor = "rgba(0, 128, 0, 0.733)";
    emailInput.style.border = "2px solid green";
  }
});

// Color dinámico del textarea información
informationInput.addEventListener("input", () => {
  const info_value = informationInput.value.trim();

  if (!validarTexto(info_value)) {
    informationInput.style.borderColor = "rgba(255, 0, 0, 0.37)";
    informationInput.style.border = "2px solid red";
  } else {
    informationInput.style.borderColor = "rgba(0, 128, 0, 0.733)";
    informationInput.style.border = "2px solid green";
  }
});

// Validación al enviar el formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const name_value = nameInput.value.trim();
  const email_value = emailInput.value.trim();
  const info_value = informationInput.value.trim();

  if (!validarNombre(name_value)) {
    alert("Your name can't have numbers or symbols!");
  } else if (!validarEmail(email_value)) {
    alert("Please enter a valid email address!");
  } else if (!validarTexto(info_value)) {
    alert("Please write something in the information field!");
  } else {
    alert("Information sent correctly.");
    formulario.reset();
    nameInput.style.backgroundColor = "";
    nameInput.style.border = "";
    emailInput.style.backgroundColor = "";
    emailInput.style.border = "";
    informationInput.style.backgroundColor = "";
    informationInput.style.border = "";
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
//Animacion skills
document.addEventListener('DOMContentLoaded', () => {
        const carouselTrack = document.getElementById('carousel-track');
        const skillItems = Array.from(carouselTrack.children);

        // Clonar los elementos para crear el bucle infinito
        skillItems.forEach(item => {
            const clone = item.cloneNode(true);
            carouselTrack.appendChild(clone);
        });
});