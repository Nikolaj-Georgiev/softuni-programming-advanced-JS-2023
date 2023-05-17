function deleteByEmail() {
   const input = document.querySelector('input[name="email"]').value;
   const rows = [...document.querySelectorAll('tbody tr')];
   const result = document.querySelector('#result');
   let found = false;
   rows.forEach(r => {
    if (r.children[1].textContent === input) {
        r.parentElement.removeChild(r);
        found = true;
    }
   });
   result.textContent = found ? 'Deleted.' : 'Not found.';
}