import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sat-api.developmentseed.org/collections/landsat-8-l1/items'
})

export default api