import type {TeamI} from "@/entities";
import type {ReactNode} from "react";

// Props
export type TeamsLayoutT = {
    teamKey: string;
    children: (team: TeamI) => ReactNode;
}

export type TeamItemT = {
    team: TeamI | null;
    children: (team: TeamI) => ReactNode;
}