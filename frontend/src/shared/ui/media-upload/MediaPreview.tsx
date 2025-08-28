import { MediaPreviewBox, type MediaPreviewT, MediaRemoveButtonBox, PreviewImageBox, PreviewVideoBox } from "@/shared";

export const MediaPreview = ({ teamKey, file, text, onClick }: MediaPreviewT) => {
    return (
            <MediaPreviewBox>
                {file.type.startsWith('image/')
                        ?
                        <PreviewImageBox
                                src={URL.createObjectURL(file)}
                                alt={text}
                        />
                        :
                        <PreviewVideoBox>
                            🎥
                        </PreviewVideoBox>
                }
                <MediaRemoveButtonBox teamKey={teamKey} onClick={onClick}>
                    X
                </MediaRemoveButtonBox>
            </MediaPreviewBox>
    );
};