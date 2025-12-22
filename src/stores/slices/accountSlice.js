import { getAccounts } from "../../api/accounts.api";

export const createGetAccountsSlice = (set) => ({
  
  accountsLoading: true,
  accounts: [],

  fetchAccounts: async () => {
    try {
      set({ accountsLoading: true });

      const res = await getAccounts();

      set({
        accounts: res.data,
        accountsLoading: false,
      });

      return { success: true };
      
    } catch (error) {
      set({ accountsLoading: false });
      return {
        success: false,
        message:
          error.response?.data?.message || error.message || "Login failed",
      };
    }
  },

});
