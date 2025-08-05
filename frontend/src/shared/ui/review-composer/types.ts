export interface ReviewComposerStoreI {
    content: string
    setContent: (value: string) => void
}

export type ContentInputT = {
    isSubmitDisabled: boolean;
    onFocus: () => void;
    onSubmit: () => void;
}