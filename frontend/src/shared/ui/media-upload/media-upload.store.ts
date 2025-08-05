import type { MediaUploadStoreI } from "@/shared";
import { create } from "zustand/index";

export const useMediaUploadStore = create<MediaUploadStoreI>((set, get) => ({
    attachments: [],

    addAttachment: (file) => {
        const { attachments } = get();
        // 최대 첨부 파일 개수 (현재 5)
        if (attachments.length < 5) {
            set({ attachments: [...attachments, file] });
        }
    },

    removeAttachment: (fileIndex) => {
        const { attachments } = get();
        set({ attachments: attachments.filter((_, index) => index !== fileIndex) });
    },

    reset: () => set({
        attachments: [],
    }),
}))