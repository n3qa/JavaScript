function toggle() {
   const moreBtn = 
   document.
   querySelector('.button');

   let divExtra = document.querySelector('#extra');

   
   divExtra.style.display === 'none'|| divExtra.style.display=='' ? 'block' : ' ';

   moreBtn.textContent = moreBtn.textContent==='More'? 'Less' : 'More'; 

}