function addItem() {
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');
    const selectMenu = document.querySelector('#menu');
    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;
    selectMenu.appendChild(option);

    text.value = '';
    value.value = '';
}