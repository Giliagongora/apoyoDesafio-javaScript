function validarNumeros() {
    // Expresión regular para validar que la variable solo contenga números
    var regex = /^[0-9]+$/;
    const numero1 = parseInt(document.getElementById("valor1").value);
    const numero2 = parseInt(document.getElementById("valor2").value);
    console.log(numero1);
    console.log(numero2);
    // Validar si la variable cumple con la condición
    if (regex.test(numero1)) {
        console.log("La variable contiene solo números.");
        suma();
        resta();
    } else {
        console.log("La variable contiene caracteres no permitidos.");
        
    }
}

//falta validación al ingresar texto

validarNumeros();


function suma() {
  const numero1 = parseInt(document.getElementById("valor1").value);
  const numero2 = parseInt(document.getElementById("valor2").value);
  const resultadoSuma = numero1 + numero2;
  return resultadoSuma;
}




function resta() {
  const numero1 = parseInt(document.getElementById("valor1").value);
  const numero2 = parseInt(document.getElementById("valor2").value);
  const resultadoResta = numero1 - numero2;
  return resultadoResta;
}

