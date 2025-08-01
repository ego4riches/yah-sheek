import {
    type AttachmentManagerT,
    MediaPreview,
    MediaPreviewWrapper,
    MediaUploadButton,
    MediaUploadWrapper
} from "@/shared";

export const MediaUpload = ({attachments, onFileChange, onAttachmentRemove}: AttachmentManagerT) => {
    return (
            <MediaUploadWrapper>
                <MediaUploadButton onChange={onFileChange}/>

                {attachments.length > 0 && (
                        <MediaPreviewWrapper>
                            {attachments.map((file, index) => (
                                    <MediaPreview key={index} file={file} onClick={() => onAttachmentRemove(index)}/>
                            ))}
                        </MediaPreviewWrapper>
                )}
            </MediaUploadWrapper>
    );
}; 