function subtract() {
     const firstNumber = document.
     getElementById('firstNumber')
     .value;

     const secondNumber = document.getElementById('secondNumber').value;

     let result = Number(firstNumber) +  Number(secondNumber);

     const resultDisplayBox = document.getElementById('result');
     resultDisplayBox.textContent += result;
     console.log(result)

}