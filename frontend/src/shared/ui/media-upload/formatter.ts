import type {ReviewMediaListI} from "@/entities";
import {REVIEW_MEDIA_TYPE, type ReviewMediaTypeT} from "@/shared";

export const mediaUploadFormatter = (files: File[]): ReviewMediaListI[] => {
    return files.map((file, index) => {
        const isImage = file.type.startsWith("image/");
        const isVideo = file.type.startsWith("video/");

        return {
            mediaType: (isVideo
                ? REVIEW_MEDIA_TYPE.VIDEO
                : REVIEW_MEDIA_TYPE.IMAGE) as ReviewMediaTypeT,
            mediaUrl: URL.createObjectURL(file),
            thumbnailUrl: isImage ? URL.createObjectURL(file) : null,
            orderIndex: index,
            fileSize: file.size,
            mimeType: file.type,
        };
    });
};