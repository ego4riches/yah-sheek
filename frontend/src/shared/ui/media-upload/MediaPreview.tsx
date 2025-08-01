import {MediaPreviewBox, type MediaPreviewT, MediaRemoveButtonBox, PreviewImageBox, PreviewVideoBox} from "@/shared";

export const MediaPreview = ({file, onClick}: MediaPreviewT) => {
    return (
            <MediaPreviewBox>
                {file.type.startsWith('image/') ? (
                        <PreviewImageBox
                                src={URL.createObjectURL(file)}
                                alt={`첨부파일 ${index + 1}`}
                        />
                ) : (
                        <PreviewVideoBox>
                            🎥
                        </PreviewVideoBox>
                )}
                <MediaRemoveButtonBox onClick={onClick}>
                    ×
                </MediaRemoveButtonBox>
            </MediaPreviewBox>
    );
};