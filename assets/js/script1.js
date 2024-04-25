

function limpiezaDatos() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";

  return limpiezaDatos;
}



let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // limpiezaDatos();
  // evitar comportamiento por defecto del formulario
  //  limpiarErrores_y_Datos();

  // //  tomar los valores ingresados en cada input del formulario
  let textNombre = document.querySelector("#nombre").value;
  let textAsunto = document.querySelector("#asunto").value;
  let textMensaje = document.querySelector("#mensaje").value;
  // console.log(textNombre, textAsunto, textMensaje);

  // verifica si una cadena está compuesta únicamente por caracteres alfabéticos


  if (textNombre === "" || textAsunto === "" || textMensaje === "") {
    alert("Los campos están vacíos");
} else if (!/^[a-zA-Z\s]*$/.test(textNombre) || !/^[a-zA-Z\s]*$/.test(textAsunto) || !/^[a-zA-Z\s]*$/.test(textMensaje)) {
    let errorNombre = document.getElementsByClassName("errorNombre")[0];
    errorNombre.innerHTML = "Ingresa datos válidos para el nombre";
    
    let errorAsunto = document.getElementsByClassName("errorAsunto")[0];
    errorAsunto.innerHTML = "Ingresa datos válidos para el asunto";
    
    let errorMensaje = document.getElementsByClassName("errorMensaje")[0];
    errorMensaje.innerHTML = "Ingresa datos válidos para el mensaje";
} else {
    limpiezaDatos();
    alert("Gracias por llenar los campos");
}


  return form;
});

