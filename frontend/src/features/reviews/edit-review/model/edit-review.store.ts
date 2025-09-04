import type { EditReviewStoreI } from "@/features";
import { create } from "zustand/index";

export const useEditReviewStore = create<EditReviewStoreI>((set) => ({
    isEdit: false,
    setIsEdit: (isEdit) => set({ isEdit }),

    value: '',
    setValue: (value) => set({ value }),

    reset: () => set({
        isEdit: false,
        value: '',
    })
}));