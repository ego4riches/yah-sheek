import {
    type InputChangeEventT,
    MediaPreview,
    MediaPreviewWrapper,
    MediaUploadInput,
    useMediaUploadStore
} from "@/shared";

export const MediaUpload = () => {
    const {attachments, addAttachment, removeAttachment} = useMediaUploadStore();

    const handleFileChange = (e: InputChangeEventT) => {
        const files = e.target.files;

        if (files) {
            Array.from(files).forEach(file => {
                if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
                    addAttachment(file);
                }
            });
        }
    };

    return (
            <>
                <MediaUploadInput onChange={handleFileChange}/>

                {attachments.length > 0
                        &&
                        <MediaPreviewWrapper>
                            {attachments.map((file, index) => (
                                    <MediaPreview
                                            key={index}
                                            file={file}
                                            text={`첨부파일 ${index + 1}`}
                                            onClick={() => removeAttachment(index)}
                                    />
                            ))}
                        </MediaPreviewWrapper>
                }
            </>
    );
}; 