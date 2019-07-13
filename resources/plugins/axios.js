
import axios from 'axios'
export default axios.create({
    baseURL: 'http://localhost:3301',
    timeout: 10000,
  });