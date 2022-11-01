function validar() {
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;
  let error = document.getElementById("error");

  let texto;
  if (isEmpty(nombre)) {
    texto = "Nombre no válido";
    error.innerHTML = texto;
    return false;
  }
  if (isEmpty(asunto)) {
    texto = "Asunto no válido";
    error.innerHTML = texto;
    return false;
  }
  if (isEmpty(telefono)) {
    texto = "Teléfono no válido";
    error.innerHTML = texto;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    texto = "Email no válido";
    error.innerHTML = texto;
    return false;
  }
  if (isEmpty(mensaje)) {
    texto = "Mensaje no válido";
    error.innerHTML = texto;
    return false;
  }
  alert("¡Formulario enviado!");
  return true;
}

function isEmpty(str) {
  return !str || 0 === str.length;
}
