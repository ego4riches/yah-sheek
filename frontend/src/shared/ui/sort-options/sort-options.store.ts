import { defaultSortOption, type SortOptionsStateI } from '@/shared';
import { create } from 'zustand';

export const useSortOptionsStore = create<SortOptionsStateI>((set) => ({
    isOpen: false,
    selectedOption: defaultSortOption,
    setIsOpen: (isOpen) => set({ isOpen }),
    setSelectedOption: (selectedOption) => set({ selectedOption, isOpen: false }),
    toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
}));