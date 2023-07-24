import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

export default service;
