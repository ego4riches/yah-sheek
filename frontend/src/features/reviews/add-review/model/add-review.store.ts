import type { AddReviewStoreI } from "@/features";
import { create } from "zustand";

export const useAddReviewStore = create<AddReviewStoreI>((set) => ({
    isExpanded: false,
    setIsExpanded: (state) => set({ isExpanded: state }),
}));