import axios from 'axios';

const makeHttp = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });

export const useBackendAxios = () => {
  const http = makeHttp();
  return http;
};
