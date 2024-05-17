function greatestCommonDevisor(num1, num2) {
  let greatestCommonDevisorNum;
  while (num2 !== 0) {
    let tempNum = num2;
    num2 = num1 % num2;
    num1 = tempNum;
  }
  return num1;
}

greatestCommonDevisor(15, 5);
greatestCommonDevisor(2154, 458);
