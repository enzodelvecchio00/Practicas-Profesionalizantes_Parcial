let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let correo = document.getElementById("email");
let regexNombre = /^[a-zA-Z0-9\s]+$/;
let regexMensaje = /^[a-zA-Z0-9\s]+$/;
let regexCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

function enviarformulario(e) {
  if (
    !regexNombre.test(nombre.value) ||
    nombre.value === null ||
    nombre.value.length < 3 ||
    nombre.value.length > 14 ||
    nombre.value === ""
  ) {
    e.preventDefault();
    alert("Nombre incorrecto o NO ingresado!");
  }

  if (
    telefono.value.length < 10 ||
    telefono.value.length > 10 ||
    numero.value === "" ||
    numero.value === null
  ) {
    e.preventDefault();
    alert("Numero invalido! Requiere 10 numeros en total.");
  }

  if (
    !regexMensaje.test(mensaje.value) ||
    mensaje.value.length < 4 ||
    mensaje.value.length > 180 ||
    mensaje.value === null ||
    mensaje.value === ""
  ) {
    e.preventDefault();
    alert("Mensaje invalido o NO ingresado!");
  }

  if (
    !regexCorreo.test(correo.value) ||
    correo.value < 6 ||
    correo.value.length > 40 ||
    correo.value.length === "" ||
    correo.value === null
  ) {
    e.preventDefault();
    alert("Correo invalido!");
  }
}
document
  .querySelector(".formulario")
  .addEventListener("submit", enviarformulario);
