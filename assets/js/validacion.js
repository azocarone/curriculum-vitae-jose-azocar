const claseCss = "main__section-list";

// Función para eliminar la clase de una lista de elementos por su ID
export function eliminarClaseEnModoImpresion(ids) {
  ids.forEach(function (id) {
    let elemento = document.getElementById(id);
    if (elemento) {
      elemento.classList.remove(claseCss);
    }
  });
}

// Función para restaurar la clase de una lista de elementos por su ID
export function restaurarClase(ids) {
  ids.forEach(function (id) {
    let elemento = document.getElementById(id);
    if (elemento && !elemento.classList.contains(claseCss)) {
      elemento.classList.add(claseCss);
    }
  });
}
