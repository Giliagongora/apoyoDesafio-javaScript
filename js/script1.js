//JS formulario
// variables
let regex = /^[a-zA-Z\s]+$/;

// Se asigna el formulario a una variable para disponer de la informacion completa
let formulario = document.getElementById("formulario");

function limpiandoDatos() {
  document.querySelector("#botton").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

//capturamos los datos del formulario de cada ID
let nombre = document
  .getElementById("nombre")
  .addEventListener("input", () =>
    console.log(document.getElementById("nombre").value)
  );

let asunto = document
  .getElementById("asunto")
  .addEventListener("input", () =>
    console.log(document.getElementById("asunto").value)
  );

let mensaje = document
  .getElementById("mensaje")
  .addEventListener("input", () =>
    console.log(document.getElementById("mensaje").value)
  );


// Campos vacios

function validar(nombre, asunto, mensaje){


  if(nombre == " ") {
    console.log("goo ptinr");
  }
}

console.log(btn-sumar);
console.log(btn-restar);

// if(regex.test(nombre)){
//     console.log("bien")
// } else {
//     console.log("mal");
// }
