import type { ReviewContentInputStoreI } from "@/shared";
import { create } from "zustand";

export const useReviewContentInputStore = create<ReviewContentInputStoreI>((set) => ({
    content: '',
    setContent: (value) => set({ content: value }),
}))