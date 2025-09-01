import { defaultSortOption, type SortOptionsStoreI } from '@/shared';
import { create } from 'zustand';

export const useSortOptionsStore = create<SortOptionsStoreI>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),

    selectedSortOption: defaultSortOption,
    setSelectedSortOption: (selectedSortOption) => set({ selectedSortOption, isOpen: false }),
}));