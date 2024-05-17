function printEveryNthElement(arr,step){

    let result = [];

    for (let i = 0; i < arr.length; i++) {
         if(i % step === 0 ){
            result.push(arr[i]);
         }
        
    }
    return result
}

console.log(
    printEveryNthElement(
        [
            '5',
            '20',
            '31',
            '4',
            '20'
        ],
        2
    )
)

function printEveryNthElementSolutionTwo(arr,step){
    //Using Filter with predicate
   
    return arr.filter((_,i)=>i %step === 0 );
}

console.log(
    printEveryNthElementSolutionTwo(
        [
            '5',
            '20',
            '31',
            '4',
            '20'
        ],
        2
    )
)