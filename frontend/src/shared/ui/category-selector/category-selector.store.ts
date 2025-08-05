import type { CategorySelectorStoreI, DropdownStoreI } from "@/shared";
import { create } from "zustand";

export const useCategorySelectorStore = create<CategorySelectorStoreI>((set) => ({
    category: '',
    setCategory: (category) => set({ category }),

    isOpen: false,
    setIsOpen: (open) => set({ isOpen: open }),

    reset: () => set({
        category: '',
        isOpen: false,
    }),
}));

export const useDropdownStore = create<DropdownStoreI>((set) => ({
    style: null,
    setStyle: (style) => set({ style: style }),
}));