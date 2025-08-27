import type { TeamI } from "@/entities";
import type { ReactNode } from "react";

// Teams Drawer
export type TeamsDrawerItemT = {
    path: string;
    label: string;
    active: boolean;
    onClick?: () => void;
}

// Teams Drawer styled
export type DrawerBoxT = {
    open: boolean;
    status: string;
}

export type TeamsDrawerItemBoxT = {
    active: boolean;
}

// Team Layout
export type TeamsLayoutT = {
    teamKey: string;
    children: (team: TeamI) => ReactNode;
}

export type TeamLayoutItemT = {
    team: TeamI | null;
    children: (team: TeamI) => ReactNode;
}