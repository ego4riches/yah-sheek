import type { InputChangeEventT, TeamKeyT } from "@/shared";

// Props
export type MediaUploadInputT = {
    teamKey: TeamKeyT | undefined;
    onChange: (e: InputChangeEventT) => void;
}

export type MediaPreviewT = {
    teamKey: TeamKeyT | undefined;
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