// styled-components Props
export type SortOptionsDropdownBoxT = {
    isOpen: boolean;
}

export type SortOptionsItemBoxT = {
    isSelected: boolean;
}

// Config
export interface SortOptionI {
    id: string;
    label: string;
    value: string;
}

// Store
export interface SortOptionsStateI {
    isOpen: boolean;
    selectedOption: SortOptionI;
    setIsOpen: (isOpen: boolean) => void;
    setSelectedOption: (option: SortOptionI) => void;
    toggleDropdown: () => void;
}