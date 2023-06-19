window.addEventListener('load', solve);

function solve() {

        const carModel = document.querySelector('#car-model');
        const carYear = document.querySelector('#car-year');
        const partName = document.querySelector('#part-name');
        const partNumber = document.querySelector('#part-number');
        const condition = document.querySelector('#condition');
        const nextBtn = document.querySelector('#next-btn');
        const ulInfoList = document.querySelector('ul.info-list');
        const ulConfirmList = document.querySelector('ul.confirm-list');
        nextBtn.addEventListener('click', onNext);
        const imgComplete = document.querySelector('#complete-img');
        const pComplete = document.querySelector('#complete-text');

        const inputArr = [carModel, carYear, partName, partNumber, condition];

        function onNext(e) {
                e.preventDefault();
                if (!carModel.value || !carYear.value || !partName.value || !partNumber.value || !condition.value) {
                        return;
                }
                if (Number(carYear.value) < 1980 || Number(carYear.value) > 2023) {
                        return;
                }

                let inputArrValues = [carModelValue, carYearValue, partNameValue, partNumberValue, conditionValue] = inputArr.map(x => x.value);

                imgComplete.style.visibility = 'hidden';
                pComplete.textContent = '';
                const liCar = createElements('li', '', 'part-content');
                const article = createElements('article');
                const pModel = createElements('p', `Car Model: ${carModelValue}`);
                const pYear = createElements('p', `Car Year: ${carYearValue}`);
                const pPartName = createElements('p', `Part Name: ${partNameValue}`);
                const pPartNum = createElements('p', `Part Number: ${partNumberValue}`);
                const pCondition = createElements('p', `Condition: ${conditionValue}`);
                article.appendChild(pModel);
                article.appendChild(pYear);
                article.appendChild(pPartName);
                article.appendChild(pPartNum);
                article.appendChild(pCondition);
                liCar.appendChild(article);
                const editBtn = createElements('button', 'Edit', 'edit-btn');
                const continueBtn = createElements('button', 'Continue', 'continue-btn');
                editBtn.addEventListener('click', onEdit);
                continueBtn.addEventListener('click', onContinue);
                liCar.appendChild(editBtn);
                liCar.appendChild(continueBtn);
                ulInfoList.appendChild(liCar);

                inputArr.forEach(x => x.value = '');
                nextBtn.disabled = true;


                const confirmBtn = createElements('button', 'Confirm', 'confirm-btn');
                const cancelBtn = createElements('button', 'Cancel', 'cancel-btn');
                confirmBtn.addEventListener('click', onConfirm);
                cancelBtn.addEventListener('click', onCancel);




                function onEdit() {
                        liCar.remove();
                        inputArr.forEach((x, i) => x.value = inputArrValues[i]);
                        nextBtn.disabled = false;
                }
                function onContinue() {
                        editBtn.remove();
                        continueBtn.remove();
                        ulConfirmList.appendChild(liCar);
                        liCar.appendChild(confirmBtn);
                        liCar.appendChild(cancelBtn);

                }

                function onConfirm() {
                        liCar.remove()
                        imgComplete.style.visibility = 'visible';
                        pComplete.textContent = 'Part is Ordered!';
                        nextBtn.disabled = false;
                };
                function onCancel() {
                        liCar.remove();
                        nextBtn.disabled = false;
                };

        }

        function createElements(type, content, className, id, attributeName) {
                const element = document.createElement(type);
                content ? element.textContent = content : '';
                className ? (className.includes(' ') ? className.split(' ').forEach(c => element.classList.add(c)) : element.classList.add(className)) : '';
                id ? element.id = id : '';
                attributeName ? element.setAttribute(attributeName.split('=')[0], attributeName.split('=')[1]) : '';
                return element;
        }
};




