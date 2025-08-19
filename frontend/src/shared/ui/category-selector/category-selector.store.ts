import type {CategorySelectorStoreI, DropdownStoreI} from "@/shared";
import {create} from "zustand";

export const useCategorySelectorStore = create<CategorySelectorStoreI>((set) => ({
    category: {
        id: 0,
        categoryKey: '',
        categoryName: ''
    },
    setCategory: (id, categoryKey, categoryName) => set({category: {id, categoryKey, categoryName}}),

    isOpen: false,
    setIsOpen: (open) => set({isOpen: open}),

    reset: () => set({
        category: {
            id: 0,
            categoryKey: '',
            categoryName: ''
        },
        isOpen: false,
    }),
}));

export const useDropdownStore = create<DropdownStoreI>((set) => ({
    style: null,
    setStyle: (style) => set({style: style}),
}));