import axios from 'axios';

const APIkey = '14348648-b031b318d2a0c2c3bc8ffa9be';

const BASE_URL = `https://pixabay.com/api/?key=${APIkey}&image_type=photo&orientation=horizontal&per_page=4`;

// eslint-disable-next-line import/prefer-default-export
export const fetchImages = (query, page) => {
  return axios.get(`${BASE_URL}&q=${query}&page=${page}`);
};
