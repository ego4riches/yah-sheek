import type { CategoryMenuStoreI } from "@/shared";
import { create } from 'zustand';

export const useCategoryMenuStore = create<CategoryMenuStoreI>((set) => ({
    selectedCategory: 'all',
    setSelectedCategory: (category) => set({ selectedCategory: category }),
}));