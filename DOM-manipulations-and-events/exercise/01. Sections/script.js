function create(words) {
   words.forEach(element => {
      const p = document.createElement('p');
      p.textContent = element;
      p.style.display = 'none';
      const div = document.createElement('div');
      div.appendChild(p);
      div.addEventListener('click', onClick);
      document.getElementById('content').appendChild(div);
   });

   function onClick(e){
      e.target.firstChild.style.display = "inline-block";
   }
}