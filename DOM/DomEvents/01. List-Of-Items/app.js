function addItem() {
    //select input field and read input value
   const text = document.getElementById('newItemText').value;

    // create new <li> element
   const liElement = document.createElement('li');
   // set text of new element to input value
   liElement.textContent = text;

   // select list from the page
   const ulElement = document.getElementById('items')

   //apend new element to list
   ulElement.appendChild(liElement)
}