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