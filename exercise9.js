function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (acc, row) => acc + row.reduce((sum, num) => sum + num, 0),
    0
  );
}
console.log(
  calculateMatrixSum([
    [1, 2, 23],
    [4, 15, 6],
    [7, 8, 9],
  ])
);
