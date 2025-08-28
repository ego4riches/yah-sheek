import { MediaUploadInputBox, type MediaUploadInputT } from "@/shared";

export const MediaUploadInput = ({ teamKey, onChange }: MediaUploadInputT) => {
    return (
            <MediaUploadInputBox teamKey={teamKey}>
                사진/동영상 첨부
                <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={onChange}
                />
            </MediaUploadInputBox>
    );
};