import type { DrawerStateI } from "@/shared";
import { create } from "zustand";

export const useDrawerStore = create<DrawerStateI>((set) => ({
    isDrawerOpen: false,
    setDrawerOpen: (value) => set({ isDrawerOpen: value }),
}));