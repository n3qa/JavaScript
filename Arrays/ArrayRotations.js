function arrayRomations(arr,rotations){
    let inputArr = [];
     inputArr = arr;
    let rotationsCount = inputArr.length % Number(rotations);

    for (let i = 0; i < rotationsCount; i++) {
        const element = inputArr.shift();
        inputArr.push(element)
    }

    console.log(inputArr.join(' * '));

}

arrayRomations([51, 47, 32, 61, 21], 2)