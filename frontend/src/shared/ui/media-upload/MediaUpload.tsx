import { useTeamStore } from "@/entities";
import { type InputChangeEventT, MediaPreview, MediaPreviewWrapper, MediaUploadInput, type MediaUploadT, useMediaUploadStore } from "@/shared";
import { useEffect } from "react";

export const MediaUpload = ({ files }: MediaUploadT) => {
    const { team } = useTeamStore();
    const { attachments, setAttachments, addAttachment, removeAttachment } = useMediaUploadStore();

    // URL → File 변환 함수 (테스트용)
    const urlToFile = async (url: string, index: number): Promise<File> => {
        const response = await fetch(url);
        const blob = await response.blob();
        // 확장자 추출 (간단히)
        const ext = blob.type.split("/")[1] || "jpg";
        return new File([blob], `attachment_${index}.${ext}`, { type: blob.type });
    };

    // props.files 들어오면 File[]로 변환 후 store에 세팅 (테스트용)
    useEffect(() => {
        if (files && files.length > 0) {
            Promise.all(files.map((url, idx) => urlToFile(url, idx))).then((fileList) =>
                    setAttachments(fileList)
            );
        }
    }, [files, setAttachments]);

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
                <MediaUploadInput teamKey={team?.teamKey} onChange={handleFileChange}/>
                {attachments.length > 0
                        &&
                        <MediaPreviewWrapper>
                            {attachments.map((file, index) => (
                                    <MediaPreview
                                            key={index}
                                            teamKey={team?.teamKey}
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