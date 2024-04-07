// Definir el nombre de la clase CSS como una constante
const claseCss = "main__section-list";

// Función para eliminar la clase CSS especificada de los elementos con los ID proporcionados en modo impresión
export function eliminarClaseEnModoImpresion(ids) {
  // Iterar a través de los ID proporcionados
  for (let id of ids) {
    // Obtener el elemento con el ID actual
    let elemento = document.getElementById(id);
    
    // Si el elemento existe
    if (elemento) {
      // Eliminar la clase CSS especificada del elemento
      elemento.classList.remove(claseCss);
    }
  }
}

// Función para restaurar la clase CSS especificada a los elementos con los ID proporcionados si no la tienen
export function restaurarClase(ids) {
  // Iterar a través de los ID proporcionados
  for (let id of ids) {
    // Obtener el elemento con el ID actual
    let elemento = document.querySelector(`#${id}`);
    
    // Si el elemento existe y no tiene la clase CSS especificada
    if (elemento &&!elemento.classList.contains(claseCss)) {
      // Si la propiedad classList del elemento existe
      if (elemento.classList) {
        // Agregar la clase CSS especificada al elemento
        elemento.classList.add(claseCss);
      } else {
        // Si la propiedad classList del elemento no existe, agregar el nombre de la clase al final de la propiedad className del elemento
        elemento.className += ` ${claseCss}`;
      }
    }
  }
}