import axios from 'axios';

function instance() {
  return axios.create({
    baseURL: 'https://react-etucz4.stackblitz.io/api/'
  });
}

export default instance();
