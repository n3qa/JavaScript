function addItem() {
   const liElement = document.createElement('li');
   liElement.textContent = document.getElementById('newText').value;

   document.getElementById('items').appendChild(liElement);
   document.getElementById('newText').value='';

}

function remove(){
    document.getElementById('li-to-delete');
    
}