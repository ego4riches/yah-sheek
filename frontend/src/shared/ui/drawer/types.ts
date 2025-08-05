// Props
export type DrawerItemT = {
    path: string;
    label: string;
    active: boolean;
    onClick?: () => void;
}

// styled-components Props
export type DrawerBoxT = {
    open: boolean;
}

export type DrawerItemBoxT = {
    active: boolean;
}