import type { FeedStoreI } from "@/shared";
import { create } from "zustand/index";

export const useFeedStore = create<FeedStoreI>((set) => ({
    selectedFeedId: null,
    setSelectedFeedId: (id) => set({ selectedFeedId: id }),
    reset: () => set({ selectedFeedId: null }),
}))