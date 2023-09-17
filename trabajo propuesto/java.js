
const avatar = document.querySelector("img");

// Verifica si el avatar existe antes de aplicar la animación
if (avatar) {
  // Aplica una transición CSS para la rotación
  avatar.style.transition = "transform 10s linear";
  
  // Agrega una rotación inicial al cargar la página
  window.addEventListener("load", () => {
    avatar.style.transform = "rotate(360deg)";
  });
}

// Función que cambia el color del fondo de la página al hacer clic en un botón
function cambiarColorFondo() {
  // Obtenemos el botón y el body por sus respectivos IDs
  var boton = document.getElementById("boton-color");
  var body = document.body;
  // Colores disponibles para el fondo
  var colores = ["rgb(208, 224, 221)", "rgb(255, 255, 255)", "rgb(240, 240, 240)", "rgb(230, 230, 230)"];
  // Color actual del fondo
  var colorActual = body.style.backgroundColor;
  // Índice del color actual en el array
  var indiceActual = colores.indexOf(colorActual);
  // Índice del nuevo color
  var indiceNuevo = (indiceActual === colores.length - 1) ? 0 : indiceActual + 1;
  // Asignamos el nuevo color al fondo del body
  body.style.backgroundColor = colores[indiceNuevo];
}

// Función que valida un formulario y muestra un mensaje de confirmación o error
function validarFormulario() {
  // Obtenemos los elementos del formulario por sus nombres
  var nombre = document.getElementsByName("nombre")[0];
  var email = document.getElementsByName("email")[0];
  var mensaje = document.getElementsByName("mensaje")[0];
  // Elemento donde mostraremos el mensaje
  var resultado = document.getElementById("resultado");
  // Variable para almacenar si el formulario es válido o no
  var valido = true;
  // Expresión regular para validar el formato del email
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Función para mostrar un mensaje de error
  function mostrarError(mensajeError, elemento) {
    resultado.innerHTML = mensajeError;
    resultado.style.color = "red";
    elemento.style.borderColor = "red";
    valido = false;
  }

  // Restablece el color del borde del campo
  function restablecerBorde(elemento) {
    elemento.style.borderColor = "#333";
  }

  // Validación del nombre
  if (nombre.value === "") {
    mostrarError("Por favor, ingrese su nombre.", nombre);
  } else {
    restablecerBorde(nombre);
  }

  // Validación del email
  if (email.value === "" || !regexEmail.test(email.value)) {
    mostrarError("Por favor, ingrese un email válido.", email);
  } else {
    restablecerBorde(email);
  }

  // Validación del mensaje
  if (mensaje.value === "") {
    mostrarError("Por favor, ingrese su mensaje.", mensaje);
  } else {
    restablecerBorde(mensaje);
  }

  // Si el formulario es válido, muestra un mensaje de confirmación y limpia los campos
  if (valido) {
    resultado.innerHTML = "Gracias por contactarnos. Le responderemos lo antes posible.";
    resultado.style.color = "green";
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  }
}

// Función que se ejecuta cuando la página se carga
function iniciar() {
  // Obtenemos los botones por sus IDs
  var botonColor = document.getElementById("boton-color");
  var botonFormulario = document.getElementById("boton-formulario");
  // Agregamos eventos de clic a los botones y les asignamos las funciones correspondientes
  botonColor.addEventListener("click", cambiarColorFondo);
  botonFormulario.addEventListener("click", validarFormulario);
}

// Agregamos un evento de carga a la ventana y le asignamos la función iniciar
window.addEventListener("load", iniciar);
