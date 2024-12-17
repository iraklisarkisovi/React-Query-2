import axios from "axios";

const $Todos = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default $Todos