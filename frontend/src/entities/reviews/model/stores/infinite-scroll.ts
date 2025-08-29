import type { InfiniteScrollStoreI } from "@/entities";
import { create } from "zustand";

export const useInfiniteScrollStoreI = create<InfiniteScrollStoreI>((set) => ({
    isIntersecting: false,
    setIntersecting: (state) => set({ isIntersecting: state }),
}));