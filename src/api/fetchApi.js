import axios from 'axios';

//dog.ceo/api/breeds/image/random

export const fetchImages = async () => {
  try {
    const { data } = await axios.get(
      'https://dog.ceo/api/breeds/image/random/10'
    );
    return data.message;
  } catch (error) {
    console.log(error.message);
  }
};
