export type AuthStateT = {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}