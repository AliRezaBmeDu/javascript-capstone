const popup = (indx, seriesList) => {
  const popupContainer = document.querySelector('.popup--hide');

  seriesList.forEach((element, index) => {
    if (indx === index) {
      popupContainer.innerHTML = `
        <div class="container">
        <i id="x-icon" id="close-icon" class="close-icon bi bi-x-lg"></i>
        <div class="top">
            <img  class="img" src="${element.image}" alt="${element.name}">
        </div>

        <h2 class="channel-name">${element.name}</h2>
        <div class="channel">
          ${element.summary}
        </div>           

        <h2 class="comments-heading">Comments (2)</h2>
        <div class="comments">
            <ul class="user-comment">
                <li>2023/8/8 Ahmad: Great</li>
                <li>2023/8/8 Ahmad: Good and Excellent</li>
            </ul>
        </div>

        <h2 class="comments-heading">Add a Comment</h2>
        <div class="form-container">
            <form data-index=${index} class='add-comment'>
                <input type='text' name='name' id='name' placeholder='Your name' required>
                <textarea col=30 rows='10' name='insights' placeholder='Your insights' required></textarea>
                <input class="submitBtn" type='submit' value='Comment'>
            </form>
        </div>   
    </div>  
        `;
    }
  });

  popupContainer.className = 'popup';
  const container = document.getElementById('items-container');
  container.appendChild(popupContainer);

  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    popupContainer.innerHTML = '';
    popupContainer.className = 'popup--hide';
  });
};

export default popup;