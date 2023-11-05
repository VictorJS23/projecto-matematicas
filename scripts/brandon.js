function toggleMatrizMenu() {
  const matrizMenu = document.getElementById('matrizMenu');
  if (matrizMenu.style.display === 'none' || matrizMenu.style.display === '') {
    matrizMenu.style.display = 'block';
  } else {
    matrizMenu.style.display = 'none';
  }
}




let matrizInputVisible = false;

function mostrarMatrizInput() {
    const matrizInput = document.getElementById('matrizInput');
    matrizInput.style.display = matrizInputVisible ? 'none' : 'block';
    matrizInputVisible = !matrizInputVisible;
}

function agregarMatriz() {
    const numFilas = parseInt(document.getElementById('numFilas').value);
    const numColumnas = parseInt(document.getElementById('numColumnas').value);

    if (numFilas < 1 || numColumnas < 1 || numFilas > 10 || numColumnas > 10) {
        alert('Las dimensiones de la matriz deben estar entre 1 y 10.');
        return;
    }

    // Crea la matriz en la calculadora (aquí debes implementar la lógica necesaria)
    // Puedes utilizar arrays para almacenar los valores de la matriz y mostrarlos en la cuadrícula.

    // Luego de crear la matriz, oculta el formulario de entrada
    const matrizInput = document.getElementById('matrizInput');
    matrizInput.style.display = 'none';
    matrizInputVisible = false;
}
