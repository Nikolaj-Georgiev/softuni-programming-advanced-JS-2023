function addItem() {
    const input = document.querySelector('#newItemText');
    const item = document.createElement('li');
    item.textContent = input.value;
    document.querySelector('#items').appendChild(item);
    input.value = '';   
}