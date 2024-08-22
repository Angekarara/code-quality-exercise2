function findEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
console.log(findEvenNumbers([5, 6, 2, 1, 3]));
