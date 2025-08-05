import type { ReviewWriteStoreI } from "@/widgets/review-write";
import { create } from "zustand";

export const useReviewWriteStore = create<ReviewWriteStoreI>((set) => ({
    isExpanded: false,
    setIsExpanded: (state) => set({ isExpanded: state }),
}));