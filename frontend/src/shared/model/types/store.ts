import type { IsExpandedI, IsOpenI } from "@/shared";

export interface IsOpenStoreI extends IsOpenI {
    setIsOpen: (open: boolean) => void;
}

export interface IsExpandedStoreI extends IsExpandedI {
    setIsExpanded: (expanded: boolean) => void;
}