/* Variables */

/* tenés acceso al formulario HTML desde JavaScript, y podés interactuar con él*/
formulario = document.getElementById("formulario");

formulario.addEventListener("submit", showAlertFormulario)


/*Script que utiliza la funcion show alert, 
pasandole el parametro del nombre de la plataforma */

function showAlertFormulario(event){
  event.preventDefault(); //Evita que te envie al incio
  console.log("Formulario enviado");
  alert("Information send correctly");
  formulario.reset();
}

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
