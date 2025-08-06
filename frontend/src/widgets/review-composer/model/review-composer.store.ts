import type { ReviewComposerStoreI } from "@/widgets/review-composer";
import { create } from "zustand";

export const useReviewComposerStore = create<ReviewComposerStoreI>((set) => ({
    isExpanded: false,
    setIsExpanded: (state) => set({ isExpanded: state }),
}));