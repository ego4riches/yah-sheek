import type { TAuthState } from "@/shared";
import { create } from 'zustand'

export const useUserStore = create<TAuthState>((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
}))