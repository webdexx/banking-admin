export const createAuthSlice = (set) => ({
  admin: null,
  isAuthenticated: false,
  authLoading: true,

  setAdmin: (admin) => {
    set({ admin, isAuthenticated: true, authLoading: false });
  },

  logout: () => {
    set({ admin: null, isAuthenticated: false });
  },
});