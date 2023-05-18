function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', onChange);
    const pattern = /\b[a-z]+@[a-z]+\.[a-z]+/g;
    function onChange(e) {
        if (e.target.value.match(pattern)) {
            input.classList.remove('error');
            return;
        }
        input.classList.add('error');
    }
}