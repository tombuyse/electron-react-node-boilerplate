import axios from 'axios';

const apiUrl = 'http://localhost:9001';

export const api = axios.create({baseURL: apiUrl});
