class Modal{

    constructor (message){
        this.message= message;
        this.element = this._initialize();
    };

    _initialize(){
        const container = e('div', e('P',this.message),e('button', "OK"));
        
         return container;
    }

}

window.addEventListener('click', ()=> {
    const main = document.querySelector('main');

    const myModal = new Modal('Stop your faceBook look at the code');

    main.appendChild(myModal.element);
});

function e (type, ...content){
    const result = document.createElement(type);

    content.forEach( e => {
         if(typeof e == 'string'){
            const node = document.createTextNode(e);
         } else {
            result.appendChild(e);
         }

    });

    return result;

}