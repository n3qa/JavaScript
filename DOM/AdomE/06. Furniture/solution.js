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