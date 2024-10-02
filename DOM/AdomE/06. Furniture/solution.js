/*
First solution
function solve() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const body = document.querySelector('tbody');

    buttons[0].addEventListener('click',function(e){
      const arr = JSON.parse(textAreas[0]).value;
 
     for (const element of arr) {
       const row = document.createElement('tr');

      const image = document.createElement('img');
      image.setAttribute('src', element.img);
      cellImage.appendChild.image;

       const cellImage = document.createElement('td');
    
       const cellName = document.createElement('td');
       const pName = document.createAttribute('P');
       cellName.appendChild(pName);

       const cellPrice = document.createElement('td');
       const pPrice = document.createAttribute('P');
       cellPrice.appendChild(pPrice);

       const cellDecore = document.createElement('td');
       const ppDecore = document.createAttribute('P');
       cellDecore.appendChild(ppDecore);

       const cellCheck = document.createElement('td');
       const input = document.createElement('input');
       input.setAttribute('type','checkbox');
       cellCheck.appendChild(input);

       row.appendChild(cellImage);
       row.appendChild(cellName);
       row.appendChild(cellPrice);
       row.appendChild(cellDecore);
       row.appendChild(cellCheck);
      
       body.appendChild(row);
     }

    })  



}
*/

function solve() {

  const [inputAre,outputArea] = [...document.querySelectorAll('textarea')];

    const furnitureArray = JSON.parse(inputAre.value.trim());
    const output = document.querySelector('table.table tbody');

    const[generateBtn, buyBtn] = [... document.querySelectorAll('button')];

    const furniture=[];

    generateBtn.addEventListener('click', ()=> {
      const furnitureArray = JSON.parse(inputAre.value.trim());
      output.innerHTML='';
      furnitureArray.forEach(f => {
        const item = createRow(f);
        furniture.push(item);
        output.appendChild(item.element);
      });

      buyBtn.addEventListener('click', ()=>{
        furniture.filter( f => )
      });

 

    function createRow (data) {
        const img = e('img');
        img.src = data.img;
        const check = e('input');
        check.type = 'checkbox';

        const element = e(
          e('tr'),
          e('td',img),
          e('td',e('p',data.name)),
          e('td',e('p', data.price)),
          e('td',e('p', data.decFactor)),
          e('td', check)
        
        );

        //predicate
        function isChecked () {
          return check.checked;
        }

        return{
          element,
          isChecked1
        }
    }


    function e(type, ...content){
      const result = document.createElement(type);
      content.forEach(e => {
        if (typeof e =='string'){
          const node = document.createTextNode(e) ;
          result.appendChild(node);
        } else {
          result.appendChiled(e)
         ;
        }
      });

      return result;
    }
 


}