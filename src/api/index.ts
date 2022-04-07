import axios from "axios";
import { baseURL } from "@constants";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((cnf) => {
  const headers: any = cnf.headers || {};

  headers["X-RapidAPI-Host"] = "movies-app1.p.rapidapi.com";
  headers["X-RapidAPI-Key"] =
    "b19737d686mshf8e2db779e3fd54p15e62ajsn21cb568ba8de";
  cnf.headers = headers;
  return cnf;
});

export default api;
