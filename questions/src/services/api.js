import axios from "axios";

const API_URL = 'http://localhost:3333/api/'

const api = axios.create({
  baseURL: API_URL
})


export default api