import type { ReactNode } from "react";

export type ButtonT = {
    onClick: () => void;
    disabled?: boolean;
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
}