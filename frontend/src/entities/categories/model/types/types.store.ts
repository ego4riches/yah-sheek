import type { CategoryT } from "@/entities";
import type { IsOpenStoreI } from "@/shared";
import type { CSSProperties } from "react";

// Categories Menu
export interface CategoryMenuStoreI {
    selectedCategoryId: number;
    setSelectedCategoryId: (categoryId: number) => void;
}

// Categories Selector
export interface CategorySelectorStoreI extends IsOpenStoreI {
    category: Omit<CategoryT, 'displayOrder'>
    setCategory: (id: number, key: string, name: string) => void;
    reset: () => void;
}

export interface CategoryDropdownStoreI {
    style: CSSProperties | null;
    setStyle: (style: CSSProperties | null) => void;
}