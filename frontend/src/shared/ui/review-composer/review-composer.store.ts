import type { ReviewStateI } from "@/shared";
import { create } from "zustand";

export const useReviewComposerStore = create<ReviewStateI>((set) => ({
    content: '',
    setContent: (value) => set({ content: value }),
    reset: () => set({ content: '' }),
}))