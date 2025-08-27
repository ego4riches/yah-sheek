import type { CategoryDropdownStoreI } from "@/entities";
import { create } from "zustand";

export const useCategoriesDropdownStore = create<CategoryDropdownStoreI>((set) => ({
    style: null,
    setStyle: (style) => set({ style: style }),
}));