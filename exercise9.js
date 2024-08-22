function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (acc, row) => acc + row.reduce((sum, num) => sum + num, 0),
    0
  );
}
console.log(
  calculateMatrixSum([
    [1, 2, 30],
    [4, 15, 6],
    [7, 8, 9],
  ])
);
