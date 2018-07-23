function Matrix() {
  const rotate = matrix => matrix.reverse().map((row, i) => row.map((item, j) => matrix[j][i]));

  return {
    rotate,
  };
}

module.exports = Matrix();

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* eslint no-console: "off" */
console.log(array);
console.log(Matrix().rotate(array));
