import type { ChangeEventT } from "@/shared";

// Props
export type  AttachmentManagerT = {
    attachments: File[];
    onFileChange: (e: ChangeEventT) => void;
    onAttachmentRemove: (index: number) => void;
}

export type MediaUploadButtonT = {
    onChange: (e: ChangeEventT) => void;
}

export type MediaPreviewT = {
    file: File;
    onAttachmentRemove: () => void;
}