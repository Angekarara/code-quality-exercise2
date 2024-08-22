function calculateMatrixSum(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
  return sum;
}
console.log(
  calculateMatrixSum([
    [1, 2, 30],
    [4, 15, 6],
    [7, 8, 9],
  ])
);
