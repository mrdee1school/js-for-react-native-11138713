const processArray = (arrayOfNumbers) => {
  return arrayOfNumbers.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
};

// const numbers = [1, 2, 3, 4, 5];
// const processedNumbers = processArray(numbers);
// console.log(processedNumbers);