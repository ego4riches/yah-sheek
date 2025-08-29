import type { SwiperStoreI } from "@/shared";
import { create } from "zustand";

export const useSwiperStore = create<SwiperStoreI>((set) => ({
    hasMultipleSlides: false,
    setHasMultipleSlides: (value) => set({ hasMultipleSlides: value }),
}));