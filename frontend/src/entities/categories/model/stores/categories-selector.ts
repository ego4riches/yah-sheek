import type { CategorySelectorStoreI } from "@/entities";
import { create } from "zustand";

export const useCategoriesSelectorStore = create<CategorySelectorStoreI>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
    
    category: {
        id: 0,
        categoryKey: '',
        categoryName: ''
    },
    setCategory: (id, categoryKey, categoryName) => set({ category: { id, categoryKey, categoryName } }),

    reset: () => set({
        category: {
            id: 0,
            categoryKey: '',
            categoryName: ''
        },
        isOpen: false,
    }),
}));