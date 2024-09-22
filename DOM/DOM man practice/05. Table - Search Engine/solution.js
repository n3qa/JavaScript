function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const body = document.querySelector('tbody');

  
   let convertRows = function (rows, input) {
      return  Array.from(body.children).map(
         function selectRow(row){
            if(row.innerText.inclueds(input)) {
               row.classList.add('select')
      
            } else{
               row.removeAttribute('class');
            }
   
            return row;
         }
       )
   
   }


   function onClick() {
    const input = document.querySelector('#searchField').value.toLowerCase();

    body.innerHTML = convertRows(body.children, input);
    document.getElementById('result').innerText =  convertRows(body.children, input)

   }
}