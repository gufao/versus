import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://core-kael.versusco.de',
  timeout: 10000,
});

