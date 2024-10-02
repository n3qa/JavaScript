function stringManipulationsC(){

    let str = '';

    return {
        append,
        removeStart,
        remnoveEnd,
        print
    }

    function append(strToAppend){
        str += strToAppend;
    }

    function removeStart(n){
        str = str.substring(n);
    }

    function remnoveEnd (n){
        str = str.slice(0, -n);
    }

    function print(){
        console.log(str)
    }
}