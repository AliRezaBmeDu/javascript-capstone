const sourceItems = [
    {
      id: 2,
      name: 'Person of Interest',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      rating: 8.8,
      language: 'English',
      genre: [ 'Action', 'Crime', 'Science-Fiction' ],
      summary: `<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered "irrelevant". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>`
    },
    {
      id: 5,
      name: 'True Detective',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/445/1114021.jpg',
      rating: 8.2,
      language: 'English',
      genre: [ 'Drama', 'Crime', 'Thriller' ],
      summary: '<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p><p><i><b>True Detective</b></i> is an American anthology crime drama television series created and written by Nic Pizzolatto. </p>'
    },
    {
      id: 6,
      name: 'The 100',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/272/681441.jpg',
      rating: 7.7,
      language: 'English',
      genre: [ 'Action', 'Adventure', 'Science-Fiction' ],
      summary: `<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying "Ark" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>`
    },
    {
      id: 1,
      name: 'Under the Dome',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      rating: 6.5,
      language: 'English',
      genre: [ 'Drama', 'Science-Fiction', 'Thriller' ],
      summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>"
    },
    {
      id: 3,
      name: 'Bitten',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
      rating: 7.5,
      language: 'English',
      genre: [ 'Drama', 'Horror', 'Romance' ],
      summary: `<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>`
    },
    {
      id: 4,
      name: 'Arrow',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/143/358967.jpg',
      rating: 7.4,
      language: 'English',
      genre: [ 'Drama', 'Action', 'Science-Fiction' ],
      summary: '<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>'
    }
  ]

const container = document.getElementById('items-container');
export const renderList = (seriesList) => {
    container.innerHTML = ``;
    seriesList.sort((a,b) => a.id - b.id );
    seriesList.forEach((series) => {
        const singleItem = document.createElement('div');
        singleItem.className = 'single-item';
        const image = document.createElement('img');
        image.src = series.image;
        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = `<p class='name'>${series.name}</p>
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
        singleItem.appendChild(details);
        singleItem.appendChild(btnContainer);
        container.appendChild(singleItem);
    })
}


// renderList(sourceItems);

const result = [];
const totalItem = 6;
export const createItems = async(id) => {
    try{
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          const [name , image, rating, language, genre, summary, id_num ] = await [data.name, data.image.medium, 
                        data.rating.average, data.language, data.genres, data.summary, data.id];
          await result.push({
            id: id_num,
            name: name , 
            image: image, 
            rating: rating, 
            language: language,
            genre: genre,
            summary: summary
          });

        if (result.length === totalItem) {
            renderList(result);
        }
          
    }
    catch (error) {
        console.error('Error fetching data: ', error);
    }
}

export const callCreateItems = () => {
    for(let i=1; i<= totalItem; i += 1) {
        createItems(i);
    }
}
