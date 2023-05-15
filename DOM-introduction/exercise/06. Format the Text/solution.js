function solve() {
  let text = document.querySelector('#exercise textarea');
  let sentences = text.value.split('.').filter(s => s !== '').filter(s => s != '\n');
  console.log(sentences);
  let output = document.querySelector('div#output');
 
  while (sentences.length > 0) {   
    let p = document.createElement('p');
    output.appendChild(p);
    p.textContent = sentences.splice(0, 3) + '.';
  }
}