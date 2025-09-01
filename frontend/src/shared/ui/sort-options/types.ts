// Config
import type { IsOpenStoreI } from "@/shared";

export interface SortOptionI {
    id: string;
    label: string;
    value: string;
}

// Store
export interface SortOptionsStoreI extends IsOpenStoreI {
    selectedSortOption: SortOptionI;
    setSelectedSortOption: (option: SortOptionI) => void;
}