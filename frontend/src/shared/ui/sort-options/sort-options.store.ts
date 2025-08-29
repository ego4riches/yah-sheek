import { defaultSortOption, type SortOptionsStateI } from '@/shared';
import { create } from 'zustand';

export const useSortOptionsStore = create<SortOptionsStateI>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),

    selectedSortOption: defaultSortOption,
    setSelectedSortOption: (selectedSortOption) => set({ selectedSortOption, isOpen: false }),
}));