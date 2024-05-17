function printArrWithDelimeterSolutionOne(array,delimeter) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        // Using ternary operator
        result += i==array.length -1 ? array[i] : array[i] + delimeter;
    }
    return result;
}

console.log(
    printArrWithDelimeterSolutionOne(
        [
            "One", 
            "Two", 
            "Three", 
            "Four", 
            "Five"
        ], " * "
    ) 
)

function printArrWithDelimeterSolutionTwo(array,delimeter) {
     // Using Build In Array Join

    return array.join(delimeter);
}

console.log(
    printArrWithDelimeterSolutionTwo(
        [
            "One", 
            "Two", 
            "Three", 
            "Four", 
            "Five"
        ], " $ "
    ) 
)