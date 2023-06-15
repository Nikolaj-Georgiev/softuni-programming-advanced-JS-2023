function solution() {

    const [addGifts, listOfGifts, sentGifts, discardedGifts] = Array.from(document.querySelectorAll('div.container section.card'));
    const giftInput = addGifts.children[1].children[0];
    const addGiftBtn = addGifts.children[1].children[1];
    const ulListOfGifts = listOfGifts.children[1];
    const ulSentGifts = sentGifts.children[1];
    const ulDiscardedGifts = discardedGifts.children[1];
    let giftsArr = [];

    addGiftBtn.addEventListener('click', addGift);

    function addGift(e) {
        // if (!giftInput.value) {
        //     return;
        // }

        let giftLi = createGifts(giftInput.value);
        giftsArr.push(giftLi);
        giftsArr.sort((a, b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent));
        giftsArr.forEach(li => ulListOfGifts.appendChild(li));
        giftInput.value = '';
    }

    function createGifts(content) {
        let liGift = createElement('li', content, 'gift', '');
        let sendBtn = createElement('button', 'Send', '', 'sendButton');
        sendBtn.addEventListener('click', sendFn);
        let discardBtn = createElement('button', 'Discard', '', 'discardButton');
        discardBtn.addEventListener('click', discardFn);
        liGift.appendChild(sendBtn);
        liGift.appendChild(discardBtn);
        return liGift;
    }

    function sendFn(e) {
        const li = e.target.parentElement;
        let index = giftsArr.indexOf(li);
        giftsArr.splice(index, 1);
        li.removeChild(li.children[0]);
        li.removeChild(li.children[0]);
        ulSentGifts.appendChild(li);
    }

    function discardFn(e) {
        const li = e.target.parentElement;
        let index = giftsArr.indexOf(li);
        giftsArr.splice(index, 1);
        li.removeChild(li.children[0]);
        li.removeChild(li.children[0]);
        ulDiscardedGifts.appendChild(li);
    }

    function createElement(type, content, className, idName) {
        let element = document.createElement(type);
        content ? element.textContent = content : '';
        className ? element.classList.add(className) : '';
        idName ? element.id = idName : '';
        return element;
    }
}