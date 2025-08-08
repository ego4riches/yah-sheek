import type { ReactNode } from "react";

export type VoidT = () => void

export type ChildrenT = {
    children: ReactNode;
};

export type EntityArrayT = Record<string, any>[];