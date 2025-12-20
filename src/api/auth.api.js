import api from "./axiosClient";

export const adminLogin = async (credentials) => {
  const res = await api.post("/admin/login", credentials);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/admin/me");
  return res.data;
};