export interface IsOpenI {
    isOpen: boolean;
}

export interface IsOpenStoreI {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export interface IsExpandedI {
    isExpanded: boolean;
}

export interface IsExpandedStoreI {
    isExpanded: boolean;
    setIsExpanded: (expanded: boolean) => void;
}

export interface IsSelectedI {
    isSelected: boolean;
}

export interface IsValueI {
    isValue: string;
}