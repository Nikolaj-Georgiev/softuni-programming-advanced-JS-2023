function generateReport() {

    const headers = Array.from(document.querySelectorAll('thead tr th'));
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));
    const result = [];

    tableRows.forEach(row => result.push(objectCreator(row.children, headers)));

    function objectCreator(rowArray, headersArr) {
        const localObject = {};
        headersArr.forEach((head, i) => {
            if (head.children[0].checked) {
                localObject[head.lastChild.name] = rowArray[i].textContent;
            }
        });
        return localObject;
    }

    const reportOutput = document.querySelector('div textarea#output');
    reportOutput.textContent = JSON.stringify(result, null, 2);
}