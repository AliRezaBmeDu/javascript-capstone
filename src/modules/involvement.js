// import { renderList, createItems } from "./router";

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const appId = 'ligjx4FFa0ZgHF7dDHG4';

const likeBtn = document.getElementById('likeBtn-1');
const likeBtnId = 'likeBtn-1';
const itemId = 'item-1';
export const pressLike = async (itemId) => {
    try{
        const response = await fetch(`${baseUrl}/apps/${appId}/likes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;  charset=UTF-8',
              },
            body: JSON.stringify({
                "item_id": itemId,
            })
        });
    } catch (error) {
        console.error('Error posting the like', error);
    }
}


export const getLikes = async () => {
    try {
        const response = await fetch(`${baseUrl}/apps/${appId}/likes/`);
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(error) {
        console.error('Error getting the likes: ', error);
    }
};


const addComment = async (newComment) => {
    const response = await fetch(`${baseUrl}/apps/${appId}/comments`, {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json' 
    },
      body: JSON.stringify(newComment),
    });
  };
  
const getComment = async (itemId) => {
    const response = await fetch(`${baseUrl}/apps/${appId}/?item_id=${itemId}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

// getLikes();