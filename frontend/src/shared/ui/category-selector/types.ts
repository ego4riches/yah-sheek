import type {CategoryT} from "@/entities";
import type {IsOpenStoreI} from "@/shared";
import type {CSSProperties} from "react";

// Props
export type CategorySelectorDropdownT = {
    onCategorySelect: (id: number, key: string, name: string) => void;
    isOpen: boolean;
    style: CSSProperties | null;
}

// Store
export interface CategorySelectorStoreI extends IsOpenStoreI {
    category: Omit<CategoryT, 'displayOrder'>
    setCategory: (id: number, key: string, name: string) => void;
    reset: () => void;
}

export interface DropdownStoreI {
    style: CSSProperties | null;
    setStyle: (style: CSSProperties | null) => void;
}