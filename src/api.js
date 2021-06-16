import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q=girls'
});

export default api;