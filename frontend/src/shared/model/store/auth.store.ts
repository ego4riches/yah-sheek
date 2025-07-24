import type { TAuthState } from "@/shared";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<TAuthState>()(
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