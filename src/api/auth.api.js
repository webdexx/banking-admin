import axiosClient from "./axiosClient";

export const adminLogin = async (credentials) => {
  const res = await axiosClient.post("/admin/login", credentials);
  return res.data; // { admin }
};

export const getMe = async () => {
  const res = await axiosClient.get("/admin/me");
  return res.data;
};