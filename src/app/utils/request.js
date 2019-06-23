import axios from 'axios';
import { URL_API } from 'app/config';

const request = () => {
  const defaultOptions = {
    baseURL: `${URL_API}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const instance = axios.create(defaultOptions);
  return instance;
};

export default request();
