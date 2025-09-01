import { type SearchStoreI } from "@/shared";
import { create } from "zustand/index";

export const useSearchStore = create<SearchStoreI>((set) => ({
    searchValue: '',
    setSearchValue: (searchValue) => set({ searchValue }),
    reset: () => set({ searchValue: '' }),
}));