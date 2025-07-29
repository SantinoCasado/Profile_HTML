const buttonform = document.getElementById("buttonform");
const datatype = document.getElementById("datatype");
const buttonCheck = document.getElementById('buttonCheck');
const datatype_practice = document.getElementById('datatype_practice');

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

buttonCheck.addEventListener("click", function (event){
    const dato1_value = document.getElementById("dato1").value;
    const dato2_value = document.getElementById("dato2").value;

    let dato1, dato1_tipo;
    let dato2, dato2_tipo;

    if(!isNaN(dato1_value) && dato1_value.trim() !== ""){
        dato1= Number(dato1_value);
        dato1_tipo = typeof dato1;
    }else{
        dato1 = dato1_value;
        dato1_tipo = typeof dato1;
    }

      if(!isNaN(dato1_value) && dato1_value.trim() !== ""){
        dato2= Number(dato2_value);
        dato2_tipo = typeof dato1;
    }else{
        dato2 = dato2_value;
        dato2_tipo = typeof dato2;
    }

    datatype_practice.innerHTML = `El dato 1 es: ${dato1_tipo}<br> 
    El dato 2 es: ${dato2_tipo}`;
})