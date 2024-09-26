function addItem() {
   const input = document.getElementById('newText');
   const liElement =  createElement('li',input.value)
   
   document.getElementById('items').appendChild(liElement);
   input.value='';

   function createElement(type,content){
    const element = document.createElement(type);
    element.textContent = content;
    return element;

   }

}

function remove(){
    document.getElementById('li-to-delete');
    
}