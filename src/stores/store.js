import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createAuthSlice } from "./slices/authSlice";
import { createGetUsersSlice } from "./slices/userSlice";
import { createGetAccountsSlice } from "./slices/accountSlice";
import { createSearchSlice } from "./slices/search.slice";

export const useStore = create(
  devtools((set, get) => ({
    ...createAuthSlice(set, get),
    ...createGetUsersSlice(set, get),
    ...createGetAccountsSlice(set, get),
    ...createSearchSlice(set, get),
  }))
);