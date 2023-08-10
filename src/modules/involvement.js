// import { renderList, createItems } from "./router";

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const appId = 'ligjx4FFa0ZgHF7dDHG4';

export const pressLike = async (itemId) => {
  try {
    const response = await fetch(`${baseUrl}/apps/${appId}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;  charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error('Error posting the like', error);
  }
};

export const getLikes = async () => {
  try {
    const response = await fetch(`${baseUrl}/apps/${appId}/likes/`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error getting the likes: ', error);
    throw error;
  }
};

// getLikes();