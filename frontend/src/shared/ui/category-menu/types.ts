// Props
export interface CategoryMenuItemT {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

// Store
export interface CategoryMenuStoreI {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}