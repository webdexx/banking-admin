import { adminLogin, getMe } from "../../api/auth.api";
import api from "../../api/axiosClient";

export const createAuthSlice = (set) => ({
  adminId: null,
  adminStatus: null,
  isAuthenticated: false,
  authLoading: false,

  login: async (credentials) => {
    try {
      set({ authLoading: true });

      const data = await adminLogin(credentials);

      console.log("Login Response: ", data);

      set({
        adminId: data.adminId,
        adminStatus: data.adminStatus,
        isAuthenticated: true,
        authLoading: false,
      });

      return { success: true };
    } catch (error) {
      set({ authLoading: false });
      return {
        success: false,
        message:
          error.response?.data?.message || error.message || "Login failed",
      };
    }
  },

  fetchMe: async () => {
    try {
      set({ authLoading: true });

      const data = await getMe();

      set({
        adminId: data.adminId,
        adminStatus: data.adminStatus,
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
