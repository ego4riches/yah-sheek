import type { DrawerStateT } from "@/shared";
import { create } from "zustand";

export const useDrawerStore = create<DrawerStateT>((set) => ({
    isDrawerOpen: false,
    setDrawerOpen: (value) => set({ isDrawerOpen: value }),
}));