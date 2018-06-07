import axios from 'axios';

const getComments = id =>
  axios.get(`https://www.reddit.com/${id}.json?limit=1000&depth=5`);

export { getComments };
