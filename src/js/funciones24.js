
export function mostrarResultado(valor) {

  const seleccion = document.getElementById('seleccion-usuario');

  seleccion.innerHTML = 'Elegiste: <span>' + valor + '</span>';
}

export function mostrarEnConsola(valor) {
  console.log('Opcion seleccionada: ' + valor);
}