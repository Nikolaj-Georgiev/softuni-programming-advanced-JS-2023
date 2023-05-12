function sumTable() {
    const lastColumn = Array.from(document.querySelectorAll('td:last-child')).map(e => Number(e.textContent));
    let sum = lastColumn.pop();
    let result = lastColumn.reduce((a, v) => a + v, sum);
    document.querySelector('#sum').textContent = result;
}