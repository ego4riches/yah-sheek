import type { CSSProperties } from "react";

// Categories Menu
export interface CategoryMenuItemT {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

// Categories Selector
export type CategoriesDropdownT = {
    onCategorySelect: (id: number, key: string, name: string) => void;
    isOpen: boolean;
    style: CSSProperties | null;
}

export type CategoryDropdownItemT = {
    id: number;
    name: string;
    onClick: () => void;
}