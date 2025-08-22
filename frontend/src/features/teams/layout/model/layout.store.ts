import type { LayoutStoreT } from "@/features";
import { create } from "zustand";

export const useLayoutStore = create<LayoutStoreT>((set) => ({
    team: null,
    setTeam: (team) => set({ team }),
    reset: () => set({ team: null }),
}))