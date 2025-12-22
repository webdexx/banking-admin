import api from "./axiosClient";

export const getUsers = async () => {
  const res = await api.get("/ops/get-users");
  return res.data;
};