import popup from './popup.js';

const container = document.getElementById('items-container');

export const renderList = (seriesList, involvements) => {
  container.innerHTML = '';
  seriesList.sort((a, b) => a.id - b.id);
  seriesList.forEach((series) => {
    const singleItem = document.createElement('div');
    singleItem.className = 'single-item';
    const image = document.createElement('img');
    image.src = series.image;
    const overhead = document.createElement('div');
    overhead.className = 'overhead';
    overhead.innerHTML = `<p class='name'>${series.name}</p>
                          <div class='like-container'>
                            <i class="bi bi-hand-thumbs-up like-btn" id="like-${series.id}"></i>
                            <i class="bi bi-hand-thumbs-up-fill like-btn-fill" id="fill-${series.id}"></i>
                            <span class="like-detail">5 likes</span>
                          </div>`;
                          
                            // <i class="bi bi-hand-thumbs-up-fill like-btn-fill"></i>`;
    const btnContainer = document.createElement('div');
    btnContainer.className = 'button-container';
    const comment = document.createElement('button');
    comment.innerText = 'Comments';
    comment.className = 'comment';
    comment.id = series.name;
    const reserve = document.createElement('button');
    reserve.innerText = 'Reservation';
    reserve.className = 'reserve';
    btnContainer.appendChild(comment);
    btnContainer.appendChild(reserve);

    singleItem.appendChild(image);
    singleItem.appendChild(overhead);
    singleItem.appendChild(btnContainer);
    container.appendChild(singleItem);
  });

  const commentsBtn = document.querySelectorAll('.comment');
  const popupSection = document.createElement('section');
  popupSection.className = 'popup--hide';
  container.appendChild(popupSection);

  commentsBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
      popup(index, seriesList);
    });
  
  const filledBtns = document.querySelectorAll('.like-btn-fill');
  filledBtns.forEach((btn) => {
    console.log('Is it working?'); 
    btn.classList.add('hide-seek');
  });
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((btn) => {
    console.log('this is for like-btn');
    btn.addEventListener('click', () => {
      btn.classList.add('hide-seek');
      const clickedId = btn.id[btn.id.length - 1];
      console.log('buttonid: ', btn.id);
      console.log('clickedID: ',clickedId);
      const fillBtn = document.getElementById(`fill-${clickedId}`);
      fillBtn.classList.remove('hide-seek');
    })
  })
  });
};

const result = [];
const totalItem = 6;
export const createItems = async (id) => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    const [name, image, rating,
      language, genre,
      summary, idNum] = await [data.name, data.image.medium,
      data.rating.average, data.language, data.genres, data.summary, data.id];

    await result.push({
      id: idNum,
      name,
      image,
      rating,
      language,
      genre,
      summary,
    });

    if (result.length === totalItem) {
      renderList(result);
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const callCreateItems = () => {
  for (let i = 1; i <= totalItem; i += 1) {
    createItems(i);
  }
};
