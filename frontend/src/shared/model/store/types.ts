export type TAuthState = {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}