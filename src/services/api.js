import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.punkapi.com/v2/beers?page=${pag}',
});

export default api;