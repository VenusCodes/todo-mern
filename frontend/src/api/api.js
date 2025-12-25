import axios from "axios";
import { getToken, logout } from "../auth";

const api = axios.create({
  baseURL: "http://localhost:4000",
  header: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (data) => api.post("/auth/login", data),
  signUp: (data) => api.post("/auth/signUp", data),
};

export const todoApi = {
  getTodos: () => api.get("/todo"),
  create: (data) => api.post("/todo", data),
  update: (data, id) => api.put("/todo/" + id, data),
  toggle: (id) => api.patch("/todo/" + id),
  trash: (id) => api.delete("/todo/" + id),
};

export default api;
