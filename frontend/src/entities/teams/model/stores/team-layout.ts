import type { TeamLayoutStoreT } from "@/entities";
import { create } from "zustand";

export const useTeamLayoutStore = create<TeamLayoutStoreT>((set) => ({
    team: null,
    setTeam: (team) => set({ team }),
    reset: () => set({ team: null }),
}))