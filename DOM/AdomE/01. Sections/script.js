/*
function create(words) {

   const conent = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div');
      const paragrapth = document.createElement('p');

      paragrapth.textContent = words[i];
      paragrapth.style.display = 'none';

      div.appendChild(paragrapth);
      conent.appendChild(div);
      
   }

   conent.addEventListener('click', function(e){
      if(e.target.tagName==='DIV' || e.target.tagName ==='P'){
         const p = e.target.children[0] || e.target;
         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block';
      }

   })
}

*/

function create(words) {


   const output =  document.getElementById('content');
   words.array.forEach(w => output.appendChild(createArticle(w)));

   function createArticle(text){
      const pEl = e('p',text);
      pEl.style.display = 'none';
      const divEl = e('div',pEl);
   
      divEl.addEventListner('click', ()=> {
         pEl.style.display='';
      })

      return divEl;
   }

  

 
   function e(type,conent){
      const result = document.createElement(type);

      if(typeof conent == 'string'){
         result.textContent = conent;
      } else{
         result.appendChiled(conent);
      }

      result.textContent = conent;

      return result;
   }
}