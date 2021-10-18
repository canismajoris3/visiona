import React from "react";
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sat-api.developmentseed.org/stac/search'
})

export default api