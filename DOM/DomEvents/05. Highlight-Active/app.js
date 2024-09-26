function focused() {
    // select all input fields
    document.getElementsByTagName('input').array.forEach(i => {
        i.addEventListner('focus',onFocus);
        i.addEventListner('blur',onBlur);
    });


    function onFocus(ev){
        ev.target.parentNode.className()='focused';
    }

    function onBlur (ev){
        ev.target.parentNode.className() = 'blured';
    }
}