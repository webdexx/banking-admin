import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/admin",
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // optional: redirect or reset auth state
    }
    return Promise.reject(err);
  }
);

export default api;