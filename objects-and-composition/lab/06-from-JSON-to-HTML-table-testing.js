function fromJSONToHTMLTable(json) {
    // Parse the JSON string to an array of objects
    let data = JSON.parse(json);
  
    // Generate the table headers
    let headers = Object.keys(data[0]);
    let thead = '<tr>' + headers.map(h => '<th>' + h + '</th>').join('') + '</tr>';
  
    // Generate the table rows
    let tbody = data.map(row => {
      return '<tr>' + headers.map(h => '<td>' + escapeHtml(row[h]) + '</td>').join('') + '</tr>';
    }).join('');
  
    // Generate the HTML table
    let html = '<table>' + thead + tbody + '</table>';
  
    return html;
  }
  
  // Helper function to escape HTML entities in string values
  function escapeHtml(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  


const json = `[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`;
// const json = `[{"Name":"Pesho", "Score":4, " Grade":8}, {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]`;
fromJSONToHTMLTable(json);


