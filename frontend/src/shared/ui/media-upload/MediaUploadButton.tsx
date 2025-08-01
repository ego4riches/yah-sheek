import {MediaUploadButtonBox, type MediaUploadButtonT} from "@/shared";

export const MediaUploadButton = ({onChange}: MediaUploadButtonT) => {
    return (
            <MediaUploadButtonBox>
                📷 사진/동영상 첨부
                <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={onChange}
                />
            </MediaUploadButtonBox>
    );
};