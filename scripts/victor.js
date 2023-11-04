// const mainContent = document.getElementById('main-content')
// mainContent.innerHTML = ''

// const form = document.createElement('form')
// form.innerHTML = `
//     <label for="num1">Number 1:</label><br>
//     <input type="number" id="num1" name="num1"><br>
//     <label for="num2">Number 2:</label><br>
//     <input type="number" id="num2" name="num2"><br><br>
//     <button type="submit">Add</button><br>
//   `
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const num1 = parseFloat(document.getElementById('num1').value)
//     const num2 = parseFloat(document.getElementById('num2').value)
//     const sum = num1 + num2
//     mainContent.innerHTML = `The sum of the two numbers is: ${sum}`
// })

// mainContent.appendChild(form)

        const gridSizeInput = document.getElementById('grid-size');
        const gridSizeLabel = document.getElementById('grid-size-label');
        const gridContainer = document.getElementById('grid-container');
        const generateInputsButton = document.getElementById('generateInputs');
        const inputContainer = document.getElementById('input-container');

        // Función para crear la cuadrícula con el tamaño especificado
        function createGrid(size) {
            gridContainer.innerHTML = '';
            gridContainer.style.gridTemplateColumns = `repeat(${size}, 40px)`;
            gridContainer.style.gridTemplateRows = `repeat(${size}, 40px)`;

            for (let i = 0; i < size * size; i++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                gridContainer.appendChild(cell);
            }
        }

        // Función para generar los campos de entrada de tipo número
        function generateNumberInputs(size) {
            inputContainer.innerHTML = '';

            for (let i = 0; i < size; i++) {
                const row = document.createElement('div');
                row.classList.add('grid-row');
                for (let j = 0; j < size; j++) {
                    const input = document.createElement('input');
                    input.type = 'number';
                    input.classList.add('grid-input');
                    row.appendChild(input);
                }
                inputContainer.appendChild(row);
            }
        }

        // Actualiza el tamaño de la cuadrícula cuando cambia el valor del input
        gridSizeInput.addEventListener('input', () => {
            const newSize = gridSizeInput.value;
            gridSizeLabel.textContent = `${newSize}x${newSize}`;
            createGrid(newSize);
        });

        // Maneja el clic en el botón para generar los inputs
        generateInputsButton.addEventListener('click', () => {
            const gridSize = parseInt(gridSizeInput.value);
            generateNumberInputs(gridSize);
        });

        // Inicialmente crea la cuadrícula con el tamaño predeterminado
        createGrid(gridSizeInput.value);

// ---->> Manipulando la calculadora

function toggleMatrizMenu() {
  const matrizMenu = document.getElementById('matrizMenu');
  if (matrizMenu.style.display === 'none' || matrizMenu.style.display === '') {
    matrizMenu.style.display = 'block';
  } else {
    matrizMenu.style.display = 'none';
  }
}

function agregarMatriz() {
  // Lógica para agregar una matriz
  const result = document.getElementById('resultado')
  result.innerHTML = 'xd'
}

function operarMatrices() {
  // Lógica para operar matrices
  alert("se esta operando una matriz")
}

function eliminarMatrices() {
  // Lógica para eliminar matrices
  alert("se esta eliminando una matriz")
}

// document.getElementById('botonDesplegar').addEventListener('click', function() {
//   var menu = document.getElementById('menuDesplegable');
//   if (menu.style.display === 'none' || menu.style.display === '') {
//     menu.style.display = 'block';
//   } else {
//     menu.style.display = 'none';
//   }
// });