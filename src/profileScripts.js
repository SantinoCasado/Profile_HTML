/* Variables */

/* tenés acceso al formulario HTML desde JavaScript, y podés interactuar con él*/
const formulario = document.getElementById("formulario");
const datatype = document.getElementById("datatype");
const nameInput = document.getElementById("name");

//Mantiene el color rojo si el nombre tiene numeros
nameInput.addEventListener("input", () => {
  const value = nameInput.value;

  if (!isNaN(value)) {
    nameInput.style.backgroundColor = "rgba(255, 0, 0, 0.37)";
    nameInput.style.border = "2px solid red";
  } else {
    nameInput.style.backgroundColor = "rgba(0, 128, 0, 0.733)";
    nameInput.style.border = "2px solid green";
  }
});

//Checkeo de datos del form
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que te envie al inicio

  const name_value = document.getElementById("name").value.trim(); // El valor del input name

  let dato1, dato1_tipo;

  if (!isNaN(name_value) && name_value !== "") {
    dato1 = Number(name_value);
    dato1_tipo = typeof dato1;
    alert("Your name can have numbers!!");
  } else {
    dato1 = name_value;
    dato1_tipo = typeof dato1;
    console.log("Formulario enviado");
    alert("Information send correctly");
    formulario.reset();
  }

  // Actualiza el párrafo correcto del HTML
  datatype.innerHTML = `El nombre es: ${dato1_tipo}`;
});



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
