function sumSomeNumbersInArr(input) {
  const inputAsString = input.toString();
  let isSame = true;
  let sumSomeNumbers = 0;

  for (let i = 0; i < inputAsString.length; i++) {
    let currentNumber = Number(inputAsString[i]);
    let nextNumber = Number(inputAsString[i + 1]);

    if (currentNumber !== nextNumber 
        && nextNumber !== undefined) {
      isSame = false;
    } 
    sumSomeNumbers += currentNumber;
  }
  return sumSomeNumbers;
}

console.log(sumSomeNumbersInArr(222));
