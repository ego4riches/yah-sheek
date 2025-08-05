import type { ReviewComposerStoreI } from "@/shared";
import { create } from "zustand";

export const useReviewComposerStore = create<ReviewComposerStoreI>((set) => ({
    content: '',
    setContent: (value) => set({ content: value }),
}))