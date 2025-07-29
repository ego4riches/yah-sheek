import type { AuthStateI } from "@/shared";
import { create } from 'zustand'

export const useUserStore = create<AuthStateI>((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
}))