function calc(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const result = Number(num1) + Number(num2);

    const displayResultField = document.getElementById('sum');
    displayResultField.value = result;

}