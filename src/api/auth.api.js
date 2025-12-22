import api from "./axiosClient";

export const adminLogin = async (credentials) => {
  const res = await api.post("/login", credentials);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/reAuth");
  console.log(res.data);
  return res.data;
};