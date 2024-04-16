//JS formulario
// variables
// let regex = /^[a-zA-Z\s]+$/;
//capturar variables

function limpiezaDatos() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";

  return limpiezaDatos();
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

  if (textNombre !== "" && textAsunto !== "" && textMensaje !== "") {
    alert("Gracias por llenar los campos");
  }

  if (textNombre === "" && textAsunto === "" && textMensaje === "") {
    alert("Los campos estan vacios");
  }
  if (!/^[^0-9]*$/.test(textNombre)) {
    let errorNombre = document.getElementsByClassName("errorNombre")[0];
    let errorNombreNuevo = document.createTextNode("Ingresa datos válidos");
    errorNombre.appendChild(errorNombreNuevo);
  }
  if (!/^[^0-9]*$/.test(textAsunto)) {
    let errorAsunto = document.getElementsByClassName("errorAsunto")[0];
    let errorAsuntoNuevo = document.createTextNode("Ingresa datos válidos");
    errorAsunto.appendChild(errorAsuntoNuevo);
  }
  if (!/^[^0-9]*$/.test(textMensaje)) {
    let errorMensaje = document.getElementsByClassName("errorMensaje")[0];
    let errorMensajeNuevo = document.createTextNode("Ingresa datos válidos");
    errorMensaje.appendChild(errorMensajeNuevo);
  }


  // errorNombre = document.getElementsByClassName("errorNombre")[0];
  //   let errorNombreTextNodes = errorNombre.childNodes;
  //     errorNombreTextNodes.forEach(node => {
  //   // Verificar si el nodo actual contiene el mensaje de error
  //   if (node.nodeValue === true) {
  //       // Eliminar el mensaje de error del DOM
  //       errorNombre.removeChild(node);
  //   }else{
  //     let errorNombre = document.getElementsByClassName("errorNombre")[0];
  //     let errorNombreNuevo = document.createTextNode("No se permiten números");
  // errorNombre.appendChild(errorNombreNuevo);
  //   }

  //   if (node.nodeValue === true){

  //   }else{
  //     let errorNombre = document.getElementsByClassName("errorNombre")[0];
  //     let errorNombreNuevo = document.createTextNode("No se permiten números");
  // errorNombre.appendChild(errorNombreNuevo);
  //   }

  // if (textNombre !== "" || textAsunto !== "" || textMensaje !== "") {
  //   let contadorNombre = 0;
  //   let acumuladorNombre = 0;

  //   const elementos = textNombre.split(",").map((elemento) => elemento.trim());
  // }

  // Verifica que los elementos no contengan numeros
  // for (let i = 0; i < textNombre.length; i++) {
  //   contadorNombre++;
  //   acumuladorNombre += i;
  //   let elementoMostrado = elementos[i];

  //   // console.log("aca va la contador 1 : " + contadorNombre);
  //   console.log(
  //     "Acá va todo el detalle de lo que entro 1 :" + elementoMostrado
  //   );
  //   // console.log("aca va la acumulacion 1 : "  + acumuladorNombre);

  //   if (!/^[^0-9]*$/.test(elementoMostrado)) {
  //     console.log("No se permiten números en el nombre");
  //     let errorNombre = document.getElementsByClassName("errorNombre")[0];
  //     let errorNombreNuevo = document.createTextNode(
  //       "No se permiten números"
  //     );
  //     errorNombre.appendChild(errorNombreNuevo);
  //   }
  // }
  // let nombreFaltanteImpreso = false;
  // Si el campo nombre esta vacio imprime en pantalla el mensaje
  //     let errorNombre = document.getElementsByClassName("errorNombre")[0];
  // if (textNombre === "" && errorNombre  === undefined) {
  //   console.log("El campo nombre está vacío");
  //   // Si el nombre es válido, eliminar el mensaje de error
  //   // let errorNombre = document.getElementsByClassName("errorNombre")[0];
  //   // let errorNombreTextNodes = errorNombre.childNodes;
  //   //   errorNombreTextNodes.forEach(node => {

  //       // Verificar si el nodo actual contiene el mensaje de error

  //           // Eliminar el mensaje de error del DOM
  //           console.log("El campo nombre está vacío");
  //           let errorNombre = document.getElementsByClassName("errorNombre")[0];
  //           let errorNombreNuevo = document.createTextNode("Te falta el nombre");
  //           console.log(errorNombreNuevo);
  //           errorNombre.appendChild(errorNombreNuevo);

  //   // if (node.nodeValue !== "Te falta el nombre") {
  //   //   console.log("El campo nombre está vacío");
  //   //   let errorNombre = document.getElementsByClassName("errorNombre")[0];
  //   //   let errorNombreNuevo = document.createTextNode("Te falta el nombre");
  //   //   console.log(errorNombreNuevo);
  //   //   errorNombre.appendChild(errorNombreNuevo);
  //   //   // nombreFaltanteImpreso = true;
  //   // }

  //     }

  return form;
});

// // Validar que no hay números en el texto
// if (!/^[^0-9]*$/.test(textNombre)) {
//   console.log("No se permiten números en el nombre");
// }

// // Validar que el texto no esté vacío
// if (!/^\\s*$/.test(textNombre)) {
//   console.log("El nombre no puede estar vacío");
// }

// if (regex.test(textNombre) === false || textNombre === Number) {
//   console.log("funciona");
//   let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   let errorNombreNuevo = document.createTextNode("No se permiten números");
//   errorNombre.appendChild(errorNombreNuevo);
//   console.log("Error: " + typeof(errorNombreNuevo[0]));
//   document.querySelector("#formulario > div:nth-child(1) > div:nth-child(1) > p")
// }else {
//         // console.log("Error: " + errorNombre);
//   return false;
// }
// if (textNombre === undefined || textNombre !== NaN) {
//   let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   let errorNombreNuevo = document.createTextNode("Te falta el nombre");
//   errorNombre.appendChild(errorNombreNuevo);
//   console.log("Error: " + typeof(errorNombreNuevo[0]));
//   // document.querySelector("#formulario > div:nth-child(1) > div:nth-child(1) > p")
// } else {

//   // console.log("Error: " + errorNombre);
//   return false;
// }

// if (textAsunto === "" ) {
//   let errorAsunto = document.getElementsByClassName("errorAsunto")[0];
//   let errorAsuntoNuevo = document.createTextNode("Te falta el asunto");
//   errorAsunto.appendChild(errorAsuntoNuevo);
// }

//   if (textMensaje === "" || textMensaje === Number) {
//     let errorMensaje = document.getElementsByClassName("errorMensaje")[0];
//     let errorMensajeNuevo = document.createTextNode("Te falta el mensaje");
//     errorMensaje.appendChild(errorMensajeNuevo);

//   }else if (textNombre === Number && textAsunto === Number && textMensaje === Number){
//     alert("Solo puedes ingresar texto");
//   }

// decidir:
// 1 evaluar si el campo está vacio ? vacio: dar el aviso : pasar al sieguiente campo
// 2 evaluar si tiene numeros = numeros: dar el aviso : pasar al siguiente campo
// 3 exitoso

// if(textNombre === true) {
// //  false;
//  console.log("true");
// }
// }else if(textNombre === false){
//   // limpiezaDatos();
//   console.log("false");
// } else {
//   console.log("else");
// }
// validarDatos(textNombre, textAsunto, textMensaje);

// if (regex.test(textNombre) === false) {
//   // document.removeChild(".errorNombre");
//   // let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   // errorNombre.removeChild(errorNombreNuevo)[0];
//   // errorNombre.remove([0]);
//   alert("Debes ingresar datos válidos");
//   console.log("true");
//   if (textNombre !== regex.test(textNombre)) {
//     console.log("false");
//     let errorNombre = document.getElementsByClassName("errorNombre")[0];
//     let errorNombreNuevo = document.createTextNode("Te falta el nombre");
//     errorNombre.appendChild(errorNombreNuevo);
//   }
// } else {

//   errorNombre.remove(errorNombreNuevo);
//    return false;
// }

// if (textNombre === "") {
//   let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   let errorNombreNuevo = document.createTextNode("Te falta el nombre");
//   errorNombre.appendChild(errorNombreNuevo);
// }

// if (textAsunto === "") {
//   let errorAsunto = document.getElementsByClassName("errorAsunto")[0];
//   let errorAsuntoNuevo = document.createTextNode("Te falta el asunto");
//   errorAsunto.appendChild(errorAsuntoNuevo);
// }

// if (textMensaje === "") {
//   let errorMensaje = document.getElementsByClassName("errorMensaje")[0];
//   let errorMensajeNuevo = document.createTextNode("Te falta el mensaje");
//   errorMensaje.appendChild(errorMensajeNuevo);
// }

// let datosIngresados = validarDatosIngresados(textNombre,textAsunto,textAsuntoNuevo,textAsunto);

// if(form.textNombre === " "){
//   alert("No has ingresado el nombre");
//   // return false;
// }

// function validarDatos(textNombre, textAsunto, textMensaje){

//   // if(textNombre === " "){
//   //   alert("No has ingresado el nombre");
//   //   return false;
//   // }

//   return validarDatos;

// }

// let datos = function(form) {
// alert("work?");

//   return datos;

// }

// if (textNombre !== " " && textAsunto !== " " && textMensaje !== "") {
//   if (nombre !== " ") {
//     alert("gracias");
//   }
// } else {
//   // alert("te faltan campos por llenar");
//   let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   let errorNombreNuevo = document.createTextNode("Te falta el nombre");
//   // console.log(errorNombreNuevo);
//   errorNombre.appendChild(errorNombreNuevo);

//   console.log(errorNombre); // Muestra cada elemento modificado
// }

// // alert("te faltan campos por llenar");
// let errorAsunto = document.getElementsByClassName("errorAsunto")[0];
// let errorAsuntoNuevo = document.createTextNode("Te falta el asunto");
// // console.log(errorNombreNuevo);
// errorAsunto.appendChild(errorAsuntoNuevo);

// // alert("te faltan campos por llenar");
// let errorMensaje = document.getElementsByClassName("errorMensaje")[0];
// let errorMensajeNuevo = document.createTextNode("Te falta el mensaje");
// // console.log(errorNombreNuevo);
// errorMensaje.appendChild(errorMensajeNuevo);

// Verificar si el nombre ingresado es válido
// if (regex.test(textNombre) === false) {
//   // Mostrar una alerta si el nombre no es válido
//   alert("Debes ingresar datos válidos");
//   console.log("true"); // Registro en la consola

//   // Mostrar mensaje de error "Te falta el nombre"
//   let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   let errorNombreNuevo = document.createTextNode("Te falta el nombre");
//   errorNombre.appendChild(errorNombreNuevo);
// } else {
//   // Si el nombre es válido, eliminar el mensaje de error
//   let errorNombre = document.getElementsByClassName("errorNombre")[0];
//   let errorNombreTextNodes = errorNombre.childNodes;

//   // Iterar sobre los nodos hijos para encontrar el mensaje de error
//   errorNombreTextNodes.forEach(node => {
//       // Verificar si el nodo actual contiene el mensaje de error
//       if (node.nodeValue === "Te falta el nombre") {
//           // Eliminar el mensaje de error del DOM
//           errorNombre.removeChild(node);
//       }
//   });
//   return false; // Retornar false para indicar que la validación fue exitosa
// }
