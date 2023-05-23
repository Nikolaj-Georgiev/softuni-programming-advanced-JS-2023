window.addEventListener("load", solve);

function solve() {

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addingGem);

    function addingGem(e) {
        const form = Array.from(document.querySelector('form div.inner-wrap').children);
        if (form.length !== (form.filter(x => x.value !== '').length)) {
            return;
        }

        const ulPreview = document.getElementById('preview-list');
        const gem = {
            gemName: form[0].value,
            Color: form[1].value,
            Carats: Number(form[2].value),
            Price: Number(form[3].value) + ' $',
            Type: form[4].value
        };
        const li = document.createElement('li');
        li.className = 'gem-info';
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = gem.gemName;
        article.appendChild(h4);
        const fields = Object.keys(gem);
        for (let i = 1; i < fields.length; i++) {
            const element = fields[i];
            const p = document.createElement('p');
            p.textContent = `${element}: ${gem[element]}`;
            article.appendChild(p);
        }
        li.appendChild(article);

        form.forEach(e => e.value = '');

        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save to Collection';
        saveBtn.addEventListener('click', saveGem);
        li.appendChild(saveBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit Information';
        editBtn.addEventListener('click', editGem);
        li.appendChild(editBtn);


        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancelGem);
        li.appendChild(cancelBtn);
        ulPreview.appendChild(li);
        addBtn.disabled = true;

    }

    function editGem(e) {
        const gemInfoArr = Array.from(e.target.parentElement.querySelector('article').children)
            .map(x => x = x.textContent)
            .map(x => x.split(': ')
                .pop()
                .split(' ')
                .shift());
        const ul = e.target.parentElement.parentElement;
        ul.removeChild(ul.querySelector('li'));
        const form = Array.from(document.querySelector('form div.inner-wrap').children);
        form.forEach((f, i) => f.value = gemInfoArr[i]);
        addBtn.disabled = false;
    }

    function saveGem(e) {
        const gemInfoArr = Array.from(e.target.parentElement.querySelector('article').children)
            .map(x => x = x.textContent)
            .map(x => x
                .split(': ')
                .pop().split(' ')
                .shift());
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.className = 'collection-item';
        p.textContent = `${gemInfoArr[0]} - Color: ${gemInfoArr[1]}/ Carats: ${gemInfoArr[2]}/ Price: ${gemInfoArr[3]}$/ Type: ${gemInfoArr[4]}`;
        li.appendChild(p);
        document.getElementById('collection').appendChild(li);
        const ul = e.target.parentElement.parentElement;
        ul.removeChild(ul.querySelector('li'));
        addBtn.disabled = false;
    }

    function cancelGem(e) {
        const ul = e.target.parentElement.parentElement;
        ul.removeChild(ul.querySelector('li'));
        addBtn.disabled = false;
    }
}
