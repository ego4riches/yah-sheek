import type {DropdownStoreI} from "@/shared";
import {create} from "zustand";

export const useCategoryDropdownStore = create<DropdownStoreI>((set) => ({
    style: null,
    setStyle: (style) => set({style: style}),
}));