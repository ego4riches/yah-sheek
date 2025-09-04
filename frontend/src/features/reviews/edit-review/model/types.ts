export interface EditReviewStoreI {
    isEdit: boolean;
    setIsEdit: (isEdit: boolean) => void;
    value: string;
    setValue: (value: string) => void;
    reset: () => void;
}

export type EditReviewT = {
    reviewId: string;
    onClose: () => void;
    onEdit: (value: string) => void;
};