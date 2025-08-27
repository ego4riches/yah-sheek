import type { IsOpenStoreI } from "@/shared";
import { create } from "zustand";

export const useTeamsDrawerStore = create<IsOpenStoreI>((set) => ({
    isOpen: false,
    setIsOpen: (value) => set({ isOpen: value }),
}));