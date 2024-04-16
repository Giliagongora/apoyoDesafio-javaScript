const numero1 = parseInt(document.getElementById("valor1").value);
const numero2 = parseInt(document.getElementById("valor2").value);

function suma() {
  const numero1 = parseInt(document.getElementById("valor1").value);
  const numero2 = parseInt(document.getElementById("valor2").value);
  const resultadoSuma = numero1 + numero2;
  alert("El resultado de la suma es :" + resultadoSuma);
  return resultadoSuma;

}

function resta() {
  let numero1 = parseInt(document.getElementById("valor1").value);
  let numero2 = parseInt(document.getElementById("valor2").value);
  let resultadoResta = numero1 - numero2;
  console.log(resultadoResta);

  let mensaje = "";
  // Verificar si el resultado es negativo y asignar un mensaje en tal caso
  if (resultadoResta < 0) {
    mensaje = "El resultado de la resta es negativo: 0 " ;
    alert(mensaje);
  }
  // Devolver un objeto con el resultado y el mensaje
  return {resultado: resultadoResta, mensaje: mensaje};
}



