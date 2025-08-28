import type { TeamKeyT } from "@/shared";

export interface TeamI {
    id: number;
    teamKey: TeamKeyT;
    teamName: string;
    ballPark: string;
    logoUrl: string | null;
}