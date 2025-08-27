import type { CategoryMenuStoreI } from "@/entities";
import { create } from 'zustand';

export const useCategoriesMenuStore = create<CategoryMenuStoreI>((set) => ({
    selectedCategoryId: 0,
    setSelectedCategoryId: (category) => set({ selectedCategoryId: category }),
}));