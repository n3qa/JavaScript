function addAndRemoveElms(arr){
    let result = [];
    let num = 1;

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i];

        if(token=='add'){
            result.push(num);
        } else if (token == 'remove') {
            result.pop
        }
        num++;
    }

    return result.length != 0 ? result.join('\n') : 'Empty';
}

console.log(
    addAndRemoveElms( 
        ['add',
        'add',
        'add',
        'add']
    )
)