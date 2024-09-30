function solve() {

   const output = document.querySelector('textarea');
   const cart = [];
   
   document.querySelector('.shopping-cart').addEventListener('click',(ev)=> {
      if(ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product'){
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(  product.querySelector('.product-line-price').textContent);

         output.value += `Added ${title} for ${price.toFixed(2)} to cart. \n`;
      }
   });

   document.querySelector('.checkout').addEventListener('click', ()=>{
     
    const result =  cart.reduce((acc,c ) => {
         acc.itmes.push(c.title);
         acc.total += c.price;
         return acc;
      }, {itmes: [],total:0});

         output.value += `You bought ${result.itmes.join(', ')} for ${result.total.toFixed(2)}`
   });
   

                                      
}