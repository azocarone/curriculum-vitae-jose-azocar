import * as validar from "./assets/js/validacion.js";

const ids = ["certificados", "habilidades"]; // Lista de IDs de elementos

// Detectar cuando el navegador entra en modo impresión
window.addEventListener("beforeprint", function () {
  validar.eliminarClaseEnModoImpresion(ids);
});

// Detectar cuando el navegador sale del modo impresión
window.addEventListener("afterprint", function () {
  validar.restaurarClase(ids);
});
