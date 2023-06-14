window.addEventListener('load', solve);

function solve() {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const peopleCount = document.getElementById('people-count');
    const fromDate = document.getElementById('from-date');
    const daysCount = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStep);
    const mainDiv = document.getElementById('main');
    const ulTicketInfo = document.querySelector('.ticket-info-list');
    const ulConfirmTicket = document.querySelector('.confirm-ticket');
    const body = document.getElementById('body');

    const entriesArr = [firstName, lastName, peopleCount, fromDate, daysCount];

    function nextStep(e) {
        e.preventDefault();
        const checkedEntries = entriesArr.filter(x => x.value !== '');
        if (entriesArr.length !== checkedEntries.length) {
            return;
        }

        const liTicket = document.createElement('li');
        liTicket.className = 'ticket';
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${checkedEntries[0].value} ${checkedEntries[1].value}`;
        article.appendChild(h3);
        const p1 = document.createElement('p');
        p1.textContent = `From date: ${checkedEntries[3].value}`;
        article.appendChild(p1);
        const p2 = document.createElement('p');
        p2.textContent = `For ${checkedEntries[4].value} days`;
        article.appendChild(p2);
        const p3 = document.createElement('p');
        p3.textContent = `For ${checkedEntries[2].value} people`;
        article.appendChild(p3);
        liTicket.appendChild(article);
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        liTicket.appendChild(editBtn);
        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        liTicket.appendChild(continueBtn);
        liTicket.addEventListener('click', onClick);
        ulTicketInfo.appendChild(liTicket);
        entriesArr.forEach(e => e.value = '');
        nextStepBtn.disabled = true;
    }

    function onClick(e) {
        const targetClass = e.target.className;
        if (targetClass === 'edit-btn') {
            const li = document.querySelector('.ticket');
            const liChildrenArr = Array.from(li.firstChild.children);
            let [_, first, last] = liChildrenArr[0].textContent.split(' ');
            firstName.value = first;
            lastName.value = last;
            peopleCount.value = liChildrenArr[liChildrenArr.length - 1].textContent.split(' ')[1];
            daysCount.value = liChildrenArr[2].textContent.split(' ')[1];
            fromDate.value = liChildrenArr[1].textContent.split(': ')[1];
            nextStepBtn.disabled = false;
            li.remove();
        } else if (targetClass === 'continue-btn') {
            const li = document.querySelector('.ticket');
            li.className = 'ticket-content';
            li.children[1].className = 'confirm-btn';
            li.children[1].textContent = 'Confirm';
            li.children[2].className = 'cancel-btn';
            li.children[2].textContent = 'Cancel';
            ulConfirmTicket.appendChild(li);
        } else if (targetClass === 'cancel-btn') {
            const li = document.querySelector('.ticket-content');
            li.remove();
            nextStepBtn.disabled = false;
        } else if (targetClass === 'confirm-btn') {
            mainDiv.remove();
            const h1 = document.createElement('h1');
            h1.id = 'thank-you';
            h1.textContent = 'Thank you, have a nice day!';
            body.appendChild(h1);
            const backBtn = document.createElement('button');
            backBtn.id = 'back-btn';
            backBtn.textContent = 'Back';
            backBtn.addEventListener('click', () => location.reload());
            body.appendChild(backBtn);
        }
    };
}




