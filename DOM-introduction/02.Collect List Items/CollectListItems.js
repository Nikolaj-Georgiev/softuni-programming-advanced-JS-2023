function extractText() {
    // TODO
    let items = Array.from(document.getElementsByTagName('li'));
    items = items.map(e => e.textContent);
    let textArea = document.getElementById('result');
    textArea.textContent = items.join('\n');
}