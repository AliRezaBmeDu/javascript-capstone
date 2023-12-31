import { addComment, getComment } from './involvement';
import commentsCounter from './commentsCounter';

const postComments = (id) => {
  const uname = document.getElementById(`name-${id}`).value;
  console.log(uname);
  const comment = document.getElementById(`comment-${id}`).value;
  const newComment = JSON.stringify({
    item_id: `item-${id}`,
    username: uname,
    comment,
  });
  addComment(newComment);
};

const popup = async (indx, seriesList) => {
  const data = await getComment(`item-${indx}`);
  // console.log("Data testing in popup", data);
  const parentComment = document.querySelector('.popup--hide');
  seriesList.forEach((element) => {
    if (element.id === indx) {
      const popupContainer = document.createElement('div');
      popupContainer.className = 'container';
      popupContainer.innerHTML = `
          <i id="x-icon" id="close-icon" class="close-icon bi bi-x-lg"></i>
          <div class="top">
              <img  class="img" src="${element.image}" alt="${element.name}">
          </div>
          <h2 class="channel-name">${element.name}</h2>
          <div class="channel">
            ${element.summary}
          </div>`;

      const commentCounterHeading = document.createElement('h2');
      commentCounterHeading.className = 'comments-heading';
      popupContainer.appendChild(commentCounterHeading);

      const commentHolder = document.createElement('div');
      commentHolder.className = 'comments';
      const ul = document.createElement('ul');
      ul.className = 'user-comment';
      ul.id = `ul-${element.id}`;
      data.forEach((dataElement) => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${dataElement.username}</b> said, "${dataElement.comment}" on ${dataElement.creation_date}`;
        ul.appendChild(li);
      });
      commentHolder.appendChild(ul);
      popupContainer.appendChild(commentHolder);
      const inputHeading = document.createElement('h2');
      inputHeading.innerHTML = 'Add a Comment';
      inputHeading.className = 'comments-heading';
      popupContainer.appendChild(inputHeading);
      const inputFields = document.createElement('div');
      inputFields.className = 'form-container';
      inputFields.innerHTML = `
              <form data-index=${element.id} class='add-comment'>
                  <input type='text' name='name' id='name-${element.id}' placeholder='Your name' required>
                  <textarea col=30 rows='10' name='insights' id='comment-${element.id}' placeholder='Your insights' required></textarea>
                  <input class="submitBtn" type='submit' id='submit-${element.id}' value='Comment'>
              </form> `;
      popupContainer.appendChild(inputFields);
      parentComment.appendChild(popupContainer);
      parentComment.className = 'popup';
      const container = document.getElementById('items-container');
      container.appendChild(parentComment);
      const closeIcon = document.querySelector('.close-icon');
      closeIcon.addEventListener('click', () => {
        parentComment.innerHTML = '';
        parentComment.className = 'popup--hide';
      });
      const submitBtns = document.querySelectorAll('.submitBtn');
      submitBtns.forEach((submit) => {
        submit.addEventListener('click', (e) => {
          e.preventDefault();
          const id = submit.id[submit.id.length - 1];
          postComments(id);
          const theUL = document.getElementById(`ul-${id}`);
          const name = document.getElementById(`name-${id}`).value;
          const message = document.getElementById(`comment-${id}`).value;
          const li = document.createElement('li');
          li.innerHTML = `<b>${name}</b> said, "${message}" just now`;

          const commentsNumber = commentsCounter(element.id);
          commentCounterHeading.innerHTML = `Comments (${commentsNumber + 1})`;

          if (name && message) {
            theUL.appendChild(li);
            document.getElementById(`name-${id}`).value = '';
            document.getElementById(`comment-${id}`).value = '';
          } else {
            console.log('fill');
          }
        });
      });

      const commentsNumber = commentsCounter(element.id);
      commentCounterHeading.innerHTML = `Comments (${commentsNumber})`;
    }
  });
};

export default popup;
