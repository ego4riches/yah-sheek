export interface ReviewStateI {
    content: string
    setContent: (value: string) => void
    reset: () => void
}