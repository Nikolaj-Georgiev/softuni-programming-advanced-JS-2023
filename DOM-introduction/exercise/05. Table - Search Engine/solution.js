function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

      let rows = document.querySelectorAll('tbody tr');
      let input = document.getElementById('searchField');

   function onClick() {

      for (const row of rows) {
         row.className = '';
         if (row.textContent.includes(input.value) && input.value !== '') {
            row.className = 'select';
            console.log(row.className);
         }
      }
      input.value = '';
   }
}