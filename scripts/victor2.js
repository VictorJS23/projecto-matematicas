class Formule {
  readArray(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Enter a number in the position [${i},${j}]: `);
        matrix[i][j] = parseFloat(prompt());
      }
      console.log();
    }
  }

  determinant(matrix) {
    if (matrix.length !== matrix[0].length) {
      console.error("Matrix is not square");
      return null;
    }

    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let det = 0;

    for (let i = 0; i < matrix.length; i++) {
      const minor = this.getMinorMatrix(matrix, i);
      const cofactor = matrix[0][i] * this.determinant(minor);
      det += i % 2 === 0 ? cofactor : -cofactor;
    }

    return det;
  }

  getMinorMatrix(matrix, col) {
    const minor = [];
    for (let i = 1; i < matrix.length; i++) {
      minor.push([...matrix[i].slice(0, col), ...matrix[i].slice(col + 1)]);
    }
    return minor;
  }

  adjugateMatrix(matrix) {
    if (matrix.length !== matrix[0].length) {
      console.error("Matrix is not square");
      return null;
    }

    const adjugate = [];

    for (let i = 0; i < matrix.length; i++) {
      adjugate.push([]);
      for (let j = 0; j < matrix[i].length; j++) {
        const minor = this.getMinorMatrix(matrix, j);
        const cofactor = this.determinant(minor);
        adjugate[i][j] = (i + j) % 2 === 0 ? cofactor : -cofactor;
      }
    }

    return this.transposeMatrix(adjugate);
  }

  inverseMatrix(matrix) {
    const det = this.determinant(matrix);
    if (det === 0) {
      console.error("Matrix is not invertible");
      return null;
    }

    const adjugate = this.adjugateMatrix(matrix);
    const inverse = [];

    for (let i = 0; i < matrix.length; i++) {
      inverse.push([]);
      for (let j = 0; j < matrix[i].length; j++) {
        inverse[i][j] = adjugate[i][j] / det;
      }
    }

    return inverse;
  }

  transposeMatrix(matrix) {
    const transposed = [];

    for (let i = 0; i < matrix[0].length; i++) {
      transposed.push([]);
      for (let j = 0; j < matrix.length; j++) {
        transposed[i][j] = matrix[j][i];
      }
    }

    return transposed;
  }

  convertToFraction(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // Implement your fraction conversion logic here
      }
    }

    return matrix;
  }

  printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join("\t"));
    }
  }
}

// Ejemplo de uso:
const formule = new Formule();
const matrix = [
    [1, 2, -2],
    [-2, -1, 2],
    [2, -2, 1]
]; // Define tu matriz aquí

formule.readArray(matrix);
formule.printMatrix(matrix);
const det = formule.determinant(matrix);
console.log(`Determinant: ${det}`);
const adjugate = formule.adjugateMatrix(matrix);
formule.printMatrix(adjugate);
const inverse = formule.inverseMatrix(matrix);
formule.printMatrix(inverse);

// Oscar se la come
// const matriz2 = [
//     [1, 2, -2],
//     [-2, -1, 2],
//     [2, -2, 1]
// ]

// // Obtén la referencia al elemento tbody de la tabla
// const matrizTable = document.getElementById('matrizTable');

// // Recorre la matriz y crea filas y celdas para cada elemento
//  matriz2.forEach(row => {
//     const tr = document.createElement('tr');
//     row.forEach(cell => {
//         const td = document.createElement('td');
//         td.textContent = cell;
//         tr.appendChild(td);
//     });
//     matrizTable.appendChild(tr);
// });

// Oscar adivine un numero del 1 al 10, Si lo adivina a la primera le doy un chiclin

// ponga la respuesta aqui: 7
// IIIIIIIIIIIIIIIIIII tontoooooooooooooooooooooooooooooooo era el numero 5 ¿porque el 5?
// ¯\_(ツ)_/¯ 

//Oscar oscar, juguemos x 0 :: dale

// Yo soy x, oscar es 0 

// | q q q |
// | q q q |
// | q q q |

/*

oscar: 
brandon: 

 */
