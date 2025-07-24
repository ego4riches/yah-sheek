import type { AuthStateT } from "@/shared";
import { create } from 'zustand'

export const useUserStore = create<AuthStateT>((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
}))