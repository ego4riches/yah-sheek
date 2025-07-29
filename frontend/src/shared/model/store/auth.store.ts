import type { AuthStateI } from "@/shared";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthStateI>()(
    persist((set) => ({
            isLoggedIn: false,
            login: () => set({ isLoggedIn: true }),
            logout: () => set({ isLoggedIn: false }),
        }),
        {
            name: 'auth-storage',
        },
    ),
)