window.addEventListener("load", solve);

function solve() {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const age = document.querySelector('#age');
  const genderSelect = document.querySelector('#genderSelect');
  const dishDescription = document.querySelector('#task');
  const submitBtn = document.querySelector('#form-btn');
  const ulInProgress = document.querySelector('#in-progress');
  const ulFinished = document.querySelector('#finished');
  const spanProgressCount = document.querySelector('#progress-count');
  const clearBtn = document.querySelector('#clear-btn');
  let counter = 0;
  submitBtn.addEventListener('click', onSubmit);

  const inputFields = [firstName, lastName, age, genderSelect, dishDescription];
  
  function onSubmit(e) {
    e.preventDefault();
    const inputValues = [firstNameValue, lastNameValue, ageValue, genderSelectValue, dishDescriptionValue] = inputFields.map(f => f.value);
    let isInvalid = inputValues.some(v => v === '') ? 'invalid' : '';
    if (isInvalid) {
      return;
    }
    
    const liEachLine = createElement('li', '', 'each-line');
    const article = createElement('article', '', '');
    const h4 = createElement('h4', `${firstNameValue} ${lastNameValue}`, '');
    const pGender = createElement('p', `${genderSelectValue}, ${ageValue}`, '');
    const pDishInfo = createElement('p', `Dish description: ${dishDescriptionValue}`, '');
    const editBtn = createElement('button', 'Edit', 'edit-btn');
    const completeBtn = createElement('button', 'Mark as complete', 'complete-btn');
    editBtn.addEventListener('click', editFn);
    completeBtn.addEventListener('click', completeFn);
    article.appendChild(h4);
    article.appendChild(pGender);
    article.appendChild(pDishInfo);
    liEachLine.appendChild(article);
    liEachLine.appendChild(editBtn);
    liEachLine.appendChild(completeBtn);
    counter++;
    ulInProgress.appendChild(liEachLine);
    spanProgressCount.textContent = counter;
    
    inputFields.forEach(f => f.value = '');
    clearBtn.addEventListener('click', clearFn);
    
    function editFn(){
      inputFields.forEach((f, i) => f.value = inputValues[i]);
      counter--;
      spanProgressCount.textContent = counter;
      liEachLine.remove();
    };

    function completeFn(){
      editBtn.remove();
      completeBtn.remove();
      ulFinished.appendChild(liEachLine);
      counter--;
      spanProgressCount.textContent = counter;
    };
    
    function clearFn(){
      liEachLine.remove();
    }
    
  }
  
  function createElement(type, content, className) {
    let el = document.createElement(type);
    className ? el.classList.add(className) : '';
    content ? el.textContent = content : '';
    return el;
  }
}
