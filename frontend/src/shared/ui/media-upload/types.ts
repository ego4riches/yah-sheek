import type { InputChangeEventT } from "@/shared";

// Props
export type MediaUploadInputT = {
    onChange: (e: InputChangeEventT) => void;
}

export type MediaPreviewT = {
    file: File;
    text: string;
    onClick: () => void;
}

// Store
export interface MediaUploadStoreI {
    attachments: File[]
    addAttachment: (file: File) => void
    removeAttachment: (fileIndex: number) => void
    reset: () => void
}