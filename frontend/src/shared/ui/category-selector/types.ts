// Props
import type { IsOpenStoreI } from "@/shared";
import type { CSSProperties } from "react";

export type CategorySelectorDropdownT = {
    isOpen: boolean;
    onCategorySelect: (category: string) => void;
    style: CSSProperties | null;
}

// Store
export interface CategorySelectorStoreI extends IsOpenStoreI {
    category: string;
    setCategory: (category: string) => void;
}

export interface DropdownStoreI {
    style: CSSProperties | null;
    setStyle: (style: CSSProperties) => void;
    reset: () => void;
}