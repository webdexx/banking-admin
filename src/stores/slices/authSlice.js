import { adminLogin, getMe } from "../../api/auth.api";
import api from "../../api/axiosClient";

export const createAuthSlice = (set) => ({
  admin: null,
  isAuthenticated: false,
  authLoading: true,

  login: async (credentials) => {
    try {
      set({ authLoading: true });

      const data = await adminLogin(credentials);

      set({
        admin: data.admin,
        isAuthenticated: true,
        authLoading: false,
      });

      return { success: true };
    } catch (error) {
      set({ authLoading: false });
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  },

  fetchMe: async () => {
    try {
      set({ authLoading: true });

      const data = await getMe();

      set({
        admin: data.admin,
        isAuthenticated: true,
        authLoading: false,
      });
    } catch {
      set({
        admin: null,
        isAuthenticated: false,
        authLoading: false,
      });
    }
  },

  logout: async () => {
    await api.post("/admin/logout"); // optional
    set({ admin: null, isAuthenticated: false });
  },
});