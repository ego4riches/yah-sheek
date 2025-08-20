import type {CategoryT} from "@/entities";
import type {IsOpenStoreI} from "@/shared";

// Store
export interface CategorySelectorStoreI extends IsOpenStoreI {
    category: Omit<CategoryT, 'displayOrder'>
    setCategory: (id: number, key: string, name: string) => void;
    reset: () => void;
}