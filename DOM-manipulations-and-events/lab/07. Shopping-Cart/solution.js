function solve() {
   const products = [...document.querySelectorAll('div.product')];
   products.forEach(p => p.addEventListener('click', onClick));
   let textArea = document.querySelector('div.shopping-cart textarea');
   const button = document.querySelector('button.checkout');
   button.addEventListener('click', checkedOut);
   const cart = { sum: 0 };
   
   function onClick(e) {
      if (e.target.tagName === 'BUTTON') {
         const productName = e.currentTarget.children[1].children[0].textContent;
         const productPrice = Number(e.currentTarget.children[3].textContent);
         cart.sum += productPrice;
         cart[productName] = productPrice;
         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      }
   }

   function checkedOut() {
      button.disabled = 'true';
      products.forEach(p => p.removeEventListener('click', onClick));
      const list = Object.keys(cart).filter(x => x !== 'sum');
      textArea.textContent += `You bought ${list.join(', ')} for ${cart.sum.toFixed(2)}.`;
   }
}