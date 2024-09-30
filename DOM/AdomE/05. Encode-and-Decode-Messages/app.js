function encodeAndDecodeMessages() {
     const textAreas = document.querySelectorAll('textArea');
    const buttons = document.querySelectorAll('button');

    const elements = {
        encode: {
            text: textAreas[0],
            btn: buttons[0]
        },

        decode: {
            text: textAreas[1],
            btn: buttons[1]
            }
    }
     
    document.getElementById('main').addEventListener('click', function(e) {
        if(e.target.tagName !=='BUTON'){
            return;
        }

        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        const message = elements.type.text.value
        .split('').map[map[type].func];

        map.encode.textarea.value='';
        map.decode.textarea.value = message;
        


    } )

}