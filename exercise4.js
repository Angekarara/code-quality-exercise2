function findEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  console.log(findEvenNumbers([5,6,1,3]))