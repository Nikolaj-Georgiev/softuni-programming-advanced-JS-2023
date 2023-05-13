function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  let result = '';
  if (convention === 'Camel Case') {
    result = text
      .split(' ')
      .map((w, i) => i === 0 ? w.toLowerCase() : w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
      .join('');

  } else if (convention === 'Pascal Case') {
    result = text
      .split(' ')
      .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
  } else {
    result = 'Error!';
  }
  document.getElementById('result').textContent = result;
}

// function solve() {
//   const text = document.getElementById('text').value;
//   const convention = document.getElementById('naming-convention').value;
//   let result = '';
//   result = text
//       .split(' ')
//       .map((w, i) => i === 0 ? w.toLowerCase() : w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
//       .join('');
//   if (convention === 'Camel Case') {
//     return document.getElementById('result').textContent = result;
//   } else if (convention === 'Pascal Case') {
//     result = result.slice(0, 1).toLocaleUpperCase() + result.slice(1);
//   } else {
//     result = 'Error!';
//   }
//   document.getElementById('result').textContent = result;
// }