import { reviewCategories } from "@/shared";

// Props
export interface CategoryMenuItemT {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

// Constants
export type CategoryKeyT = typeof reviewCategories[number]['key'];

// Store
export interface CategoryMenuStoreI {
    selectedCategory: CategoryKeyT;
    setSelectedCategory: (category: CategoryKeyT) => void;
}