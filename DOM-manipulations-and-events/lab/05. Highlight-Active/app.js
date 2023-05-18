function focused() {
    const firstDiv = Array.from(document.querySelector('body div').children);
    firstDiv.forEach(div => {
        div.children[1].addEventListener('focus', onFocus);
        div.children[1].addEventListener('blur', onBlur);
    });

    function onFocus(ev) {
        ev.target.parentElement.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentElement.className = '';
    }
}