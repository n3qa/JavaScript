function calorieObject(array){
    let result = {};

    for (let i = 0; i < array.length; i+=2) {
         result[array[i]] = Number(array[i+1]);
    }

    return result;
}

console.log(
    calorieObject(
        ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
    )
)

function calorieObjectSolution2(array){
    let result = {};

    array.array.forEach(el, i)=>{
        if(index%2==0){
            result[el] = undefined;
        } else ()
    }

    return result;
}

console.log(
    calorieObjectSolution2(
        ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
    )
)