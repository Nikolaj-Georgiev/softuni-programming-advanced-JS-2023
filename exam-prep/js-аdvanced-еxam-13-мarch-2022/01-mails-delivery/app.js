function solve() {

    const recipientName = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const addToListBtn = document.getElementById('add');
    addToListBtn.addEventListener('click', addFn);
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', resetFn);
    const ulList = document.getElementById('list');
    const ulSentList = document.querySelector('ul.sent-list');
    const ulDeleteList = document.querySelector('ul.delete-list');

    const inputArr = [recipientName, title, message];

    function addFn(e){
        e.preventDefault();
        if (!recipientName.value || !title.value || !message.value) {
            return;
        }
        const inputValueArr = [recipientNameValue, titleValue, messageValue] = inputArr.map(x => x.value);
        const liMail = createElements('li');
        const h4T = createElements('h4', `Title: ${titleValue}`);
        const h4R = createElements('h4', `Recipient Name: ${recipientNameValue}`);
        const spanMessage = createElements('span', messageValue);
        liMail.appendChild(h4T);
        liMail.appendChild(h4R);
        liMail.appendChild(spanMessage);
        const divListAction = createElements('div', '', '', 'list-action');
        const sendBtn = createElements('button', 'Send', '', 'send', 'type=submit');
        const deleteBtn = createElements('button', 'Delete', '', 'delete', 'type=submit');
        sendBtn.addEventListener('click', sendFn);
        deleteBtn.addEventListener('click', deleteFn);
        divListAction.appendChild(sendBtn);
        divListAction.appendChild(deleteBtn);
        liMail.appendChild(divListAction);
        ulList.appendChild(liMail);

        inputArr.forEach(x => x.value = '');

        const spanTo = createElements('span', `To: ${recipientNameValue}`);
        const spanTitle = createElements('span', `Title: ${titleValue}`);

        function magic(){
            sendBtn.remove()
            divListAction.className = 'btn';
            divListAction.removeAttribute('id');
            h4T.remove();
            h4R.remove();
            divListAction.remove();
            spanMessage.remove();
            liMail.appendChild(spanTo);
            liMail.appendChild(spanTitle);
            liMail.appendChild(divListAction);
        }
        function sendFn(e){
            e.preventDefault();
            magic();
            deleteBtn.removeAttribute('id');
            deleteBtn.classList.add('delete');
            ulSentList.appendChild(liMail);
        }
        function deleteFn(e){
            e.preventDefault();
            magic();
            divListAction.remove();
            ulDeleteList.appendChild(liMail);
        }
    }

    function resetFn(e){
        e.preventDefault();
        inputArr.forEach(input => input.value = '');
    }

    function createElements(type, content, className, id, attributeName){
        const element = document.createElement(type);
        content ? element.textContent = content : '';
        className ? (className.includes(' ') ? className.split(' ').forEach(c => element.classList.add(c)) : element.classList.add(className)) : '';
        id ? element.id = id : '';
        attributeName ? element.setAttribute(attributeName.split('=')[0], attributeName.split('=')[1]) : ''; 
        return element;
    }
}
solve()