
// // Declaro una función que cambia el color de fondo de un elemento
// function cambiarColor(idElemento, color) {
//   // Obtengo el elemento por su id
//   let elemento = document.getElementById("btn-1");
//   // Cambio el color de fondo del elemento
//   elemento.style.backgroundColor = color;
// }

// // Obtengo el elemento que quiero presionar por su id
// let boton = document.getElementById("btn-1");
// console.log(boton);

// // Asigno la función cambiarColor al evento onclick del elemento
// // Le paso como argumentos el id del elemento que quiero cambiar y el color que quiero poner
// boton.onclick = function () {
//   cambiarColor("caja", "red");
// };

let caja = "caja";

//capturo el boton
var btnColorRed = console.log( document.getElementById("btn-1"));



btnColorRed.addEventListener("click", function () {
    document.getElementById("caja").setAttribute('style', 
'color: red');


            // From the drop-down menu, obtain 
            // the value of the chosen color.
            var selectedColor =
            selectColor.options[selectColor.selectedIndex].value;
 
            // Set the font color of the "gfg" 
            // element to the selected color
            gfg.style.color = selectedColor;

// let caja = document
//   .getElementById("caja")
//   .addEventListener("button", () =>
//     console.log(document.getElementById("caja").value)
//   );

//   alert("cacha");
});

console.log(btnColorRed);
console.log(caja);
