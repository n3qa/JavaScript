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