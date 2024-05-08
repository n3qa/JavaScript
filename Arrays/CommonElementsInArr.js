function commonElementsInArr (arr1,arr2){

    for (const elm of arr1) {
        for (const elm2 of arr2) {
            if(elm === elm2) {
                console.log(el)
            }
        }
    }


    // for (const element1 of arr1) {
    //      let isCommon = arr2.includes(element1)
    //      if(isCommon){
    //         console.log(element1)
    //      }
    // }
    
    console.log('The end')

}

commonElementsInArr(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
    
)

    