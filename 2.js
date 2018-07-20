function rotateMatrix(matrix) {
  if (matrix.length == 0) return [];

  const n = matrix[0].length;
  let newMatrix = [];

  for (var i = 0; i < n; i++) {
    let row = [];
    for (var j = n - 1; j >= 0; j--) {
      row.push(matrix[j][i]);
    }
    newMatrix.push(row);
  }

  return newMatrix;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(array);
console.log(rotateMatrix(array));
