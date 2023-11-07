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

  // Crea una matriz vacía
  const matriz = [];
  for (let i = 0; i < numFilas; i++) {
      const fila = [];
      for (let j = 0; j < numColumnas; j++) {
          fila.push(0); // Puedes inicializar los valores de la matriz como desees
      }
      matriz.push(fila);
  }

  // Convierte la matriz en una cadena formateada
  const matrizFormateada = matriz.map((fila) => `[ ${fila.join(' ')} ]`).join(` \n `);

  // Muestra la matriz en la pantalla de la calculadora
  const resultado = document.getElementById('resultado');
  resultado.textContent = matrizFormateada;

  // Otras operaciones que desees realizar con la matriz, como cálculos, pueden agregarse aquí.

  // Oculta el formulario de entrada
  const matrizInput = document.getElementById('matrizInput');
  matrizInput.style.display = 'none';
  matrizInputVisible = false;
}