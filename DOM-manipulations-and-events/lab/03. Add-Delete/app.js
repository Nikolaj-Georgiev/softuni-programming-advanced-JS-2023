function addItem() {
    const input = document.querySelector('#newItemText');
    const liItem = document.createElement('li');
    const items = document.getElementById('items');
    const deleteLi = document.createElement('a');
    deleteLi.href = '#';
    deleteLi.textContent = '[Delete]';
    liItem.textContent = input.value;
    items.appendChild(liItem);
    items.lastElementChild.appendChild(deleteLi);
    items.addEventListener('click', onDelete);
    input.value = '';
    function onDelete(event) {
        if (event.target.textContent === '[Delete]') {
            event.target.parentElement.remove();
        }
    }
}
