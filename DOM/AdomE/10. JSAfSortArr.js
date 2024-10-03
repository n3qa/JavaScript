function sortArr(arr, type){
    const map = {
        'asc': (a,b) => a-b,
        'decs': (a,b)=> b-a
    }

    return arr.sort(map[type]);
}

console.log(sortArr(
    [15, 76, 43,7,9,2763,4,8456,2,3]
    , 'decs'
))