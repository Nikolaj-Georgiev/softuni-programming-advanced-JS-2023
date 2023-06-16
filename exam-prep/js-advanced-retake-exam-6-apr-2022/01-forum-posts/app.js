window.addEventListener("load", solve);

function solve() {
  const postTitle = document.querySelector('#post-title');
  const postCategory = document.querySelector('#post-category');
  const postContent = document.querySelector('#post-content');
  const publishBtn = document.querySelector('#publish-btn');
  publishBtn.addEventListener('click', onPublish);
  const ulReviewList = document.querySelector('#review-list');
  const ulPublishedList = document.querySelector('#published-list');
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFn);
  const inputArr = [postTitle, postCategory, postContent];

  function onPublish(e) {
    e.preventDefault();
    if (!postTitle.value || !postCategory.value || !postContent.value) {
      return;
    }
    const inputValueArr = [postTitleValue, postCategoryValue, postContentValue] = inputArr.map(x => x.value);

    const liPost = createElements('li', '', 'rpost');
    const article = createElements('article');
    const h4 = createElements('h4', postTitleValue);
    const p1 = createElements('p', `Category: ${postCategoryValue}`);
    const p2 = createElements('p', `Content: ${postContentValue}`);
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    liPost.appendChild(article);
    const editBtn = createElements('button', 'Edit', 'action-btn edit');
    const approveBtn = createElements('button', 'Approve', 'action-btn approve');
    editBtn.addEventListener('click', editFn);
    approveBtn.addEventListener('click', approveFn);
    liPost.appendChild(approveBtn);
    liPost.appendChild(editBtn);
    ulReviewList.appendChild(liPost);

    inputArr.forEach(el => el.value = '');

    function editFn(){
      liPost.remove();
      inputArr.forEach((el, i) => el.value = inputValueArr[i]);
    };
    function approveFn(){
      editBtn.remove();
      approveBtn.remove();
      ulPublishedList.appendChild(liPost);
    };
  
  }

  function clearFn(){
    ulPublishedList.innerHTML = '';
  }

  function createElements(type, content, className, id) {
    const element = document.createElement(type);
    content ? element.textContent = content : '';
    className ? (className.includes(' ') ? className.split(' ').forEach(c => element.classList.add(c)) : element.classList.add(className)) : '';
    id ? element.id = id : '';
    return element;
  }
}
