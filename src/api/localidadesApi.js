import axios from "axios";

const localidadesShowApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/singular/",
});

const localidadesCreateOrUpdateApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export { localidadesShowApi, localidadesCreateOrUpdateApi };
