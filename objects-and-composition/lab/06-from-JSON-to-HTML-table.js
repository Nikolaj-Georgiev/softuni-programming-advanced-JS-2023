function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];

    // makeKeyRow function to create the header row with object keys
    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);
        let row = "<tr>";
        keys.forEach(key => {
            row += `<th>${escapeHtml(key)}</th>`;
        });
        row += "</tr>";
        return row;
    }

    // makeValueRow function to create rows with object values
    function makeValueRow(obj) {
        let row = "<tr>";
        for (let key in obj) {
            let value = obj[key];
            if (typeof value === "string") {
                value = escapeHtml(value);
            }
            row += `<td>${value}</td>`;
        }
        row += "</tr>";
        return row;
    }

    // escapeHtml function to escape dangerous characters
    function escapeHtml(value) {
        let map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return value.replace(/[&<>"']/g, function (m) { return map[m]; });
    }

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    console.log(outputArr.join('\n'));
}

// Example usage
JsonToHtmlTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');
JsonToHtmlTable('[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]');



const json = `[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`;
// const json = `[{"Name":"Pesho", "Score":4, " Grade":8}, {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]`;
JsonToHtmlTable(json);


