import axios from 'axios';
import { PROPERTIES } from '../../src/config/properties';

const FetchAPI = axios.create({
  baseURL: PROPERTIES.BASE_URL,
});

export default FetchAPI;
