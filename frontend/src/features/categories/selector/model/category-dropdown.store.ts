import type { CategoryDropdownStoreI } from "@/features";
import { create } from "zustand";

export const useCategoryDropdownStore = create<CategoryDropdownStoreI>((set) => ({
    style: null,
    setStyle: (style) => set({ style: style }),
}));