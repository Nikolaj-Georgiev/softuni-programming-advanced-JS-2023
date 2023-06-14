window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector('form');
  let inputArr = [];
  Array.from(form).forEach((x) => inputArr.push(x));
  const [firstName, LastName, age, storyTitle, genre, yourStory, publishBtn] = [...inputArr];
  inputArr = [firstName, LastName, age, storyTitle, genre, yourStory];
  const ulPreviewList = document.querySelector('#preview-list');
  const mainDiv = document.querySelector('#main');

  publishBtn.addEventListener('click', onClick);

  function onClick(e) {
    e.preventDefault();
    const [firstNameValue, LastNameValue, ageValue, storyTitleValue, genreValue, storyValue] = inputArr.map(x => x.value);
    let valuesArr = [firstNameValue, LastNameValue, ageValue, storyTitleValue, genreValue, storyValue];
    isEmpty = valuesArr.some(x => x === '') ? 'hujnja' : '';
    if (isEmpty === 'hujnja') {
      return;
    }

    let liStoryInfo = createElement('li', '', 'story-info');
    let article = createElement('article', '', '');
    let h4 = createElement('h4', `Name: ${firstNameValue} ${LastNameValue}`, '');
    let age = createElement('p', `Age: ${ageValue}`, '');
    let title = createElement('p', `Title: ${storyTitleValue}`, '');
    let genre = createElement('p', `Genre: ${genreValue}`, '');
    let story = createElement('p', storyValue, '');
    article.appendChild(h4);
    article.appendChild(age);
    article.appendChild(title);
    article.appendChild(genre);
    article.appendChild(story);
    liStoryInfo.appendChild(article);
    let saveBtn = createElement('button', 'Save Story', 'save-btn');
    let editBtn = createElement('button', 'Edit Story', 'edit-btn');
    let deleteBtn = createElement('button', 'Delete Story', 'delete-btn');
    saveBtn.addEventListener('click', saveFn);
    editBtn.addEventListener('click', editFn);
    deleteBtn.addEventListener('click', deleteFn);
    liStoryInfo.appendChild(saveBtn);
    liStoryInfo.appendChild(editBtn);
    liStoryInfo.appendChild(deleteBtn);
    ulPreviewList.appendChild(liStoryInfo);

    inputArr.forEach(x => x.value = '');
    publishBtn.disabled = true;

    function saveFn() {
      let h1 = createElement('h1', 'Your scary story is saved!', '');
      mainDiv.innerHTML = '';
      mainDiv.appendChild(h1);
     }
    function editFn() {
      inputArr.forEach((v, i) => v.value = valuesArr[i]);
      publishBtn.disabled = false;
      liStoryInfo.remove();
    }
    function deleteFn() { 
      liStoryInfo.remove();
      publishBtn.disabled = false;
    }
  }

  function createElement(type, value, className) {
    let el = document.createElement(type);
    className ? el.classList.add(className) : '';
    value ? el.textContent = value : '';
    return el;
  }
}