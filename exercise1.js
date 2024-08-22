function calculateAverage(numbers) {
  return numbers.reduce((acc, num) => acc + num) / numbers.length;
}
console.log(calculateAverage([3, 6, 9, 4]));
