// Props
export type DrawerItemP = {
    path: string;
    label: string;
    active: boolean;
    onClick?: () => void;
}

// Store
export type DrawerStateT = {
    isDrawerOpen: boolean;
    setDrawerOpen: (value: boolean) => void;
}