function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('div.profile'));
    profiles.forEach(p => {
        const button = p.querySelector('button');
        const unlock = p.querySelector('input[type="radio"][value="unlock"]');
        const hiddenElements = p.querySelector('div');
        button.addEventListener('click', () => {
            if(unlock.checked){
                if (button.textContent === 'Hide it' && unlock.checked) {
                    button.textContent = 'Show more';
                    hiddenElements.style.display = 'none';
                    return
                }
                hiddenElements.style.display = 'block';
                button.textContent = 'Hide it';
            }
        });
    });
}