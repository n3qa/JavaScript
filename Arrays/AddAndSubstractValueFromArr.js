function addAndSubractValuesFromArr(array){
    let firstSum = 0;

    for (const num of array) {
        firstSum +=num;
    }

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
       
        if(element % 2 == 0 ){
           array[i] +=i;
        } else {
           array[i] -=i;
        }
    }

    let secondSum = 0;

    for (const num of array) {
        secondSum +=num;
    }

    console.log ('The first sum is : '+ firstSum);
    console.log ('The second sum is : '+ secondSum);
     
}


addAndSubractValuesFromArr([5, 15, 23, 56, 35])