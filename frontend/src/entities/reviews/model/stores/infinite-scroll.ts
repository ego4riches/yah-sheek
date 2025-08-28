import type { InfiniteScrollState } from "@/entities";
import { create } from "zustand";

export const useInfiniteScrollStore = create<InfiniteScrollState>((set) => ({
    isIntersecting: false,
    setIntersecting: (state) => set({ isIntersecting: state }),
}));