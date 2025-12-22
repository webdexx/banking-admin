import { getUsers } from "../../api/users.api";

export const createGetUsersSlice = (set) => ({
  
  usersLoading: true,
  users: [],

  fetchUsers: async () => {
    try {
      set({ usersLoading: true });

      const res = await getUsers();

      console.log("Success Users: ", res);

      set({
        users: res.data,
        usersLoading: false,
      });

      return { success: true };
      
    } catch (error) {
      set({ usersLoading: false });
      return {
        success: false,
        message:
          error.response?.data?.message || error.message || "Login failed",
      };
    }
  },

//   fetchMe: async () => {
//     try {
//       set({ authLoading: true });

//       const data = await getMe();

//       set({
//         admin: data.admin,
//         isAuthenticated: true,
//         authLoading: false,
//       });
//     } catch {
//       set({
//         admin: null,
//         isAuthenticated: false,
//         authLoading: false,
//       });
//     }
//   },

//   logout: async () => {
//     await api.post("/admin/logout"); // optional
//     set({ admin: null, isAuthenticated: false });
//   },
});
