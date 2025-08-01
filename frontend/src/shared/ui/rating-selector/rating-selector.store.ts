import type { RatingSelectorStoreI } from "@/shared";
import { create } from "zustand/index";

export const useRatingSelectorStore = create<RatingSelectorStoreI>((set) => ({
    rating: 0,
    setRating: (rating) => set({ rating }),

    reset: () => set({
        rating: 0,
    }),
}))