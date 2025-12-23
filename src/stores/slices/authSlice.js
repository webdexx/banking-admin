import { adminLogin, getMe } from "../../api/auth.api";
import api from "../../api/axiosClient";

export const createAuthSlice = (set) => ({
  adminId: null,
  adminStatus: null,
  adminRole: null,
  adminName: null,
  adminEmail: null,
  adminMobile: null,
  isAuthenticated: false,
  authLoading: false,

  login: async (credentials) => {
    try {
      set({ authLoading: true });

      const data = await adminLogin(credentials);

      set({
        adminId: data.admin.adminId,
        adminStatus: data.admin.status,
        adminRole: data.admin.role,
        adminName: data.admin.name,
        adminEmail: data.admin.email,
        adminMobile: data.admin.mobileNo,
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
        adminId: data.admin.adminId,
        adminStatus: data.admin.status,
        adminRole: data.admin.role,
        adminName: data.admin.name,
        adminEmail: data.admin.email,
        adminMobile: data.admin.mobileNo,
        isAuthenticated: true,
        authLoading: false,
      });
    } catch {
      set({
        adminId: null,
        adminStatus: null,
        adminRole: null,
        adminName: null,
        adminEmail: null,
        adminMobile: null,
        isAuthenticated: false,
        authLoading: false,
      });
    }
  },

  logout: async () => {
    await api.post("/logout"); // optional
    set({
      adminId: null,
      adminStatus: null,
      adminRole: null,
      adminName: null,
      adminEmail: null,
      adminMobile: null,
      authLoading: false,
      isAuthenticated: false,
    });
  },
});
