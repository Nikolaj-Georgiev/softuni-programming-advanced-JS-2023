function encodeAndDecodeMessages() {
    const textareas = [...document.querySelectorAll('textarea')];
    const buttons = [...document.querySelectorAll('button')];
    buttons.forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {
        const text = e.target.parentElement.querySelector('textarea');
        if (text.value != '') {
           if(e.target.textContent === 'Encode and send it') {
               const message = (text.value).split('').map(x => String.fromCharCode(x.charCodeAt(0) + 1)).join('');
               textareas[1].value = message;
               textareas[0].value = '';
               return;
           }
           const message = (text.value).split('').map(x => String.fromCharCode(x.charCodeAt(0) - 1)).join('');
           textareas[1].value = message;
        }
    }
}