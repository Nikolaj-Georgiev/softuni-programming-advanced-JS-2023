function search() {
   // const townsLi = document.getElementsByTagName('ul')[0].children;
   const townsLi = document.querySelectorAll('ul#towns li');
   let search = document.getElementById('searchText').value;
   let matches = 0;

   for (let element of townsLi) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
      let text = element.textContent;
      if (text.match(search)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   let resultMatches = document.getElementById('result').textContent = `${matches} matches found`;
}
