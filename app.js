// Importar todas las funciones del módulo validation.js
import * as validar from "./assets/js/validacion.js";

// Definir una lista de IDs de elementos
const ids = ["certificados", "habilidades"];

// Agregar un listener de eventos para el evento 'beforeprint' en el objeto window
// Este evento se dispara cuando el navegador entra en modo impresión
window.addEventListener("beforeprint", () => {
  // Llamar a la función eliminarClaseEnModoImpresion del módulo validation.js
  // y pasar la lista de IDs de elementos como parámetro
  validar.eliminarClaseEnModoImpresion(ids);
});

// Agregar un listener de eventos para el evento 'afterprint' en el objeto window
// Este evento se dispara cuando el navegador sale del modo impresión
window.addEventListener("afterprint", () => {
  // Llamar a la función restaurarClase del módulo validation.js
  // y pasar la lista de IDs de elementos como parámetro
  validar.restaurarClase(ids);
});