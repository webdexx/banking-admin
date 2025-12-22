import api from "./axiosClient";

export const getAccounts = async () => {
  const res = await api.get("/ops/get-accounts");
  return res.data;
};