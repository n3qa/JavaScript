function sumFirstastElmFromArr(arr){
        let firstElem = Number([...arr].shift());
        let secondElem = Number([...arr].pop());

        return firstElem + secondElem;
}

console.log(
    sumFirstastElmFromArr(
        [
            "1",
            "2",
            "3",
            "4",
        ]
    )
)