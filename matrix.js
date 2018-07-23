function Matrix() {
  function rotate(matrix) {
    if (matrix.length === 0) return [];

    const n = matrix[0].length;
    const newMatrix = [];

    for (let i = 0; i < n; i += 1) {
      const row = [];
      for (let j = n - 1; j >= 0; j -= 1) {
        row.push(matrix[j][i]);
      }
      newMatrix.push(row);
    }

    return newMatrix;
  }

  return {
    rotate,
  };
}

module.exports = Matrix();

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
//
// /* eslint no-console: "off" */
// console.log(array);
// console.log(Matrix().rotate(array));
