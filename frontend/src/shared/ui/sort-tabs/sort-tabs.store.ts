import type { SortTabsStoreI } from "@/shared";
import { create } from "zustand/index";

export const useSortTabsStore = create<SortTabsStoreI>((set) => ({
    selectedTab: 'recent',
    setSelectedTab: (tab) => set({ selectedTab: tab }),
}));