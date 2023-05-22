function solve() {
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate() {
        const input = JSON.parse(document.querySelector('textarea').value);
        input.forEach(el => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const img = document.createElement('img');
            img.src = el.img;
            td1.appendChild(img);
            tr.appendChild(td1);
            const p = document.createElement('p');
            const td2 = document.createElement('td');
            p.textContent = el.name;
            td2.appendChild(p);
            tr.appendChild(td2);
            const p1 = document.createElement('p');
            const td3 = document.createElement('td');
            p1.textContent = el.price;
            td3.appendChild(p1);
            tr.appendChild(td3);
            const p2 = document.createElement('p');
            const td4 = document.createElement('td');
            p2.textContent = el.decFactor;
            td4.appendChild(p2);
            tr.appendChild(td4);
            const inputCheckBox = document.createElement('input');
            const td5 = document.createElement('td');
            inputCheckBox.type = 'checkbox';
            td5.appendChild(inputCheckBox);
            tr.appendChild(td5);
            document.querySelector('tbody').appendChild(tr);
        });
    }

    function buy() {
        const checkboxes = Array.from(document.querySelectorAll('tr input')).filter(x => x.checked);
        const result = {
            bought: [],
            totalPrice: 0,
            totalDecFac: 0
        };
        
        checkboxes.forEach(c => {
            const parentRow = c.parentElement.parentElement;
            const p = Array.from(parentRow.querySelectorAll('p'));
            result.bought.push(p[0].textContent);
            result.totalPrice += Number(p[1].textContent);
            result.totalDecFac += Number(p[2].textContent);
        });
        const output = document.querySelectorAll('textarea')[1];
        output.value += `Bought furniture: ${result.bought.join(', ')}\r\n`;
        output.value += `Total price: ${result.totalPrice.toFixed(2)}\r\n`;
        output.value += `Average decoration factor: ${result.totalDecFac / checkboxes.length}`;
    }
}