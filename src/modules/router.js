const container = document.getElementById('items-container');

export const renderList = (seriesList) => {
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
                            <i class="bi bi-hand-thumbs-up like-btn"></i>`;
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
