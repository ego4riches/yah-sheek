export interface AuthStateI {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}