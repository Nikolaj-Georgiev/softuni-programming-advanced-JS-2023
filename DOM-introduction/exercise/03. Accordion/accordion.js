function toggle() {
    let buttonText = document.getElementById('extra').style.display;
    if (buttonText === '') {
        buttonText = 'none'
    };
    buttonChecker(buttonText);
    function buttonChecker(buttonText) {
        if (buttonText === 'none') {
            document.getElementById('extra').style.display = 'block';
            document.querySelector('#accordion .button').textContent = 'Less';
            return ;        
        }

        if (buttonText !== 'none') {
            document.getElementById('extra').style.display = 'none';
            document.querySelector('#accordion .button').textContent = 'More';
            return ;
        }
    }
}