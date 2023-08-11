import popup from './popup.js';
import { pressLike, getLikes } from './involvement.js';
import itemCounter from './addCounter.js';

const container = document.getElementById('items-container');
export const renderList = (seriesList, likeData) => {
  container.innerHTML = '';
  seriesList.sort((a, b) => a.id - b.id);
  seriesList.forEach((series) => {
    const singleItem = document.createElement('div');
    singleItem.className = 'single-item';
    singleItem.id = `item-${series.id}`;
    const image = document.createElement('img');
    image.src = series.image;
    const overhead = document.createElement('div');
    overhead.className = 'overhead';
    if (series.id === 1) {
      // console.log('Is this the likeData?: ', likeData);
    }
    // Get the like for specific item
    const foundItem = likeData.find((item) => item.item_id === `item-${series.id}`);
    const likesForSpecificItem = foundItem ? foundItem.likes : undefined;
    // console.log(likesForSpecificItem);
    // Build the elements of the overhead dynamically
    const name = document.createElement('p');
    name.className = 'name';
    name.innerHTML = `${series.name}`;
    const likeContainer = document.createElement('div');
    likeContainer.className = 'like-container';
    const likeBtn = document.createElement('i');
    likeBtn.id = `like-${series.id}`;
    likeBtn.classList.add('bi', 'bi-hand-thumbs-up', 'like-btn');
    const fillBtn = document.createElement('i');
    fillBtn.id = `fill-${series.id}`;
    fillBtn.classList.add('bi', 'bi-hand-thumbs-up-fill', 'like-btn-fill', 'hide-seek');
    const likeDetail = document.createElement('span');
    likeDetail.className = 'like-detail';
    likeDetail.id = `likes-${series.id}`;
    likeDetail.innerHTML = `${likesForSpecificItem} likes`;
    likeContainer.appendChild(likeBtn);
    likeContainer.appendChild(fillBtn);
    likeContainer.appendChild(likeDetail);
    overhead.appendChild(name);
    overhead.appendChild(likeContainer);
    likeBtn.addEventListener('click', () => {
      pressLike(singleItem.id);
      likeBtn.classList.add('hide-seek');
      fillBtn.classList.remove('hide-seek');
      likeDetail.innerHTML = `${likesForSpecificItem + 1} likes`;
    });
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
  });
  // Get the loading indicator element
  const loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'none';
  const shows = document.getElementById('shows');
  const numberOfItems = itemCounter(shows);
  shows.innerHTML = `Shows(${numberOfItems})`;
};
const result = [];
const totalItem = 6;
export const createItems = async (id) => {
  try {
    const likeData = await getLikes();
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
      renderList(result, likeData);
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