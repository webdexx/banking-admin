import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createAuthSlice } from "./slices/authSlice";

export const useStore = create(
  devtools((set) => ({
    ...createAuthSlice(set),
  }))
);