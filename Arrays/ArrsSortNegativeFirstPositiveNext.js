function sortFirstNegativeNextPositiveInArr(numbers){
    const result = [];
     for (let num of numbers){
        if(num<0) {
            result.unshift(num);
        } else {
            result.push(num)
        }
     }

     for(let num of result){
        console.log(num);
     }

}


console.log(
    sortFirstNegativeNextPositiveInArr(
        [
            7,
            -2,
            -8,
            0,
            14
        ]
    )
)
