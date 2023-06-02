function solve() {

    const form = document.querySelector('form');
    const task = form.children.task;
    const addBtn = form.children.add;
    const date = form.children.date;
    const description = form.children.description;
    addBtn.addEventListener('click', adInput);

    const [openDiv, inProgressDiv, completeDiv] = [...document.querySelectorAll('div.wrapper section div:nth-child(2)')].slice(1);

    function adInput(e) {
        e.preventDefault();
        if (isEmptyField(task, date, description)) {
            return;
        }
        const article = createElement('article');
        const h3 = createElement('h3', task.value,);
        article.appendChild(h3);
        const p1 = createElement('p', `Description: ${description.value}`);
        const p2 = createElement('p', `Due Date: ${date.value}`);
        article.appendChild(p1);
        article.appendChild(p2);
        const startBtn = createElement('button', 'Start', 'green');
        const deleteBtn = createElement('button', 'Delete', 'red');
        startBtn.addEventListener('click', start);
        deleteBtn.addEventListener('click', deleteArt);
        const divFlex = createElement('div', '', 'flex');
        divFlex.appendChild(startBtn);
        divFlex.appendChild(deleteBtn);
        article.appendChild(divFlex);
        openDiv.appendChild(article);

        function start() {
            inProgressDiv.appendChild(article);
            startBtn.remove();
            const finishBtn = createElement('button', 'Finish', 'orange');
            finishBtn.addEventListener('click', finish);
            divFlex.appendChild(finishBtn);
        };
        function deleteArt() {
            article.remove();
         };
        function finish() { 
            completeDiv.appendChild(article);
            divFlex.remove();
        }

    }

    function isEmptyField(...fields) {
        let empty = fields.find(i => i.value === '');
        return empty
    }

    function createElement(type, content, cName) {
        const element = document.createElement(type);
        if (cName) {
            element.className = cName;
        }
        if (content) {
            element.textContent = content;
            if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                element.value = content;
                element.textContent = '';
            }
        }

        return element;
    }
}


// function createElement(type, content, cName) {
//     const element = document.createElement(type);
//     if(cName) {
//         element.className = cName;
//     }
//     if(content) {
//         element.textContent = content;
//         if(element.tagName === 'TEXTAREA' || element.tagName === 'INPUT'){
//             element.value = content;
//             element.textContent = '';
//         }
//     }
//     return element;
// }