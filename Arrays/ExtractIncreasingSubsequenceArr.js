function IncreasingSubsequencefromArr(arr){
    let result =[];

    for (let i = 0; i < arr.length; i++) {
        let elm = arr[i];

        if(elm >= result.length -1 
            || result.length === 0
            ) {
            result.push(elm)
        }  
    }
    return result;
}

console.log(
    IncreasingSubsequencefromArr(
      [   
            1,
            3, 
            8,
            4,
            10, 
            12,  
            3,  
            2,
            24
        ]
    )
)


function IncreasingSubsequencefromArrReduceSolution(arr){
    let result = [];
    
    arr.reduce(function(result,currentValue){
        if(currentValue >= result.length -1 || result.length === 0) {
          let element = result.push(currentValue)
          console.log( element , result)
        }
        return result;
    },[])
    
}

console.log(
    IncreasingSubsequencefromArrReduceSolution(
      [   
            1,
            3, 
            8,
            4,
            10, 
            12,  
            3,  
            2,
            24
        ]
    )
)