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

const formatArrayStrings = (arrayOfStrings, processedNumbers) => {
  if (arrayOfStrings.length !== processedNumbers.length) {
    throw new Error("The length of the two arrays must be equal");
  }

  let modifiedStrings = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    let string = arrayOfStrings[i];
    let number = processedNumbers[i];

    if (number % 2 === 0) modifiedStrings.push(string.toUpperCase());
    else modifiedStrings.push(string.toLowerCase());
  }

  return modifiedStrings;
};

// const strings = ["hello", "world", "JavaScript", "react", "Native"];
// const numbers = [1, 2, 3, 4, 5];
// const processedNumbers = processArray(numbers);
// const modifiedStrings = formatArrayStrings(strings, processedNumbers);
// console.log(modifiedStrings);

export default formatArrayStrings;