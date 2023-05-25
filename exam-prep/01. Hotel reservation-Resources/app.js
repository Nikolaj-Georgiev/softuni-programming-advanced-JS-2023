window.addEventListener('load', solve);

function solve() {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');
    const divWrapper = document.getElementById('wrapper');
    divWrapper.addEventListener('click', buttons);

    const inputFieldsArr = [firstName, lastName, dateIn, dateOut, peopleCount];
    let inputValues = [];

    const ulInfoList = document.getElementsByClassName('info-list')[0];
    const ulConfirmList = document.getElementsByClassName('confirm-list')[0];
    const h1Verification = document.getElementById('verification');

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    function next(e) {
        e.preventDefault();
        const checkedInputValues = inputFieldsArr.filter(x => x.value !== '');
        if ((inputFieldsArr.length !== checkedInputValues.length) || dateIn.valueAsNumber > dateOut.valueAsNumber) {
            return;
        }
        inputValues = checkedInputValues.map(x => x = x.value);
        const li = document.createElement('li');
        li.className = 'reservation-content';
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        article.appendChild(h3);
        const p1 = document.createElement('p');
        p1.textContent = `From date: ${dateIn.value}`;
        article.appendChild(p1);
        const p2 = document.createElement('p');
        p2.textContent = `To date: ${dateOut.value}`;
        article.appendChild(p2);
        const p3 = document.createElement('p');
        p3.textContent = `For ${peopleCount.value} people`;
        article.appendChild(p3);
        li.appendChild(article);
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);
        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        li.appendChild(continueBtn);
        ulInfoList.appendChild(li);
        inputFieldsArr.forEach(f => f.value = '');
        nextBtn.disabled = true;
    };

    function buttons(e) {
        const targetClass = e.target.className;
        if (targetClass === 'edit-btn') {
            const li = document.querySelector('li.reservation-content');
            const liChildrenArr = Array.from(li.children[0].children);
            firstName.value = inputValues[0];
            lastName.value = inputValues[1];
            dateIn.value = inputValues[2];
            dateOut.value = inputValues[3];
            peopleCount.value = inputValues[4];
            nextBtn.disabled = false;
            li.remove();
        } else if (targetClass === 'continue-btn') {
            const li = document.querySelector('li.reservation-content');
            ulConfirmList.appendChild(li);
            li.children[1].className = 'confirm-btn';
            li.children[1].textContent = 'Confirm';
            li.children[2].className = 'cancel-btn';
            li.children[2].textContent = 'Cancel';
        } else if (targetClass === 'confirm-btn' || targetClass === 'cancel-btn') {
            const li = document.querySelector('li.reservation-content');
            if (targetClass === 'confirm-btn') {
                li.remove();
                nextBtn.disabled = false;
                h1Verification.className = 'reservation-confirmed';
                h1Verification.textContent = 'Confirmed';
            } else if (targetClass === 'cancel-btn') {
                li.remove();
                nextBtn.disabled = false;
                h1Verification.className = 'reservation-cancelled';
                h1Verification.textContent = 'Cancelled';
            }
        }
    };
}





