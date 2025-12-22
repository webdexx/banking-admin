import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createAuthSlice } from "./slices/authSlice";
import { createGetUsersSlice } from "./slices/userSlice";

export const useStore = create(
  devtools((set) => ({
    ...createAuthSlice(set),
    ...createGetUsersSlice(set),
  }))
);