function arraysEqualSums(array){
        let leftSum = 0;
        let rightSum = 0;
        let isIdex = false;
        for (let i = 0; i < array.length; i++) {
           if(i != 0) {

            for (let k = 0; k < i; k++) {
                leftSum += array[i]
            }
           } else(i != array.length -1)  
                for (let j = i+1; j < array.length; j++) {
                    rightSum += array[i];
                }
           }    
           if(leftSum === rightSum) {
                isIdex = true;
                console.log(i);
           }
        }

        if (isIdex != true){
            console.log('No match between left and right sum of the array')
        }

}

arraysEqualSums([1, 2])