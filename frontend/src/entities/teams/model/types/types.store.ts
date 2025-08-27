import type { TeamI } from "@/entities";

// Team Layout
export type TeamLayoutStoreT = {
    team: TeamI | null;
    setTeam: (team: TeamI | null) => void;
    reset: () => void;
}