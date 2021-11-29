import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items'
})

export default api