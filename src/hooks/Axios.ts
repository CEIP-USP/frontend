import axios from 'axios';

const makeHttp = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3333',
  });

export const startAxios = () => {
  const http = makeHttp();
  return http;
};
