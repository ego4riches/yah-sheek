import {FeedThumbnailBox, type FeedThumbnailT} from "@/shared";
import DefaultPhoto from '@/shared/config/assets/default-photo.png'
import DefaultVideo from '@/shared/config/assets/default-video.png'

export const FeedThumbnail = ({image, video}: FeedThumbnailT) => {
    return (
            <FeedThumbnailBox hasSrc={!!image}>
                {image
                        ? <img src={image} alt="Feed Thumbnail"/>
                        : video
                                ? <img src={DefaultVideo} alt="Default Feed Thumbnail"/>
                                : <img src={DefaultPhoto} alt="Default Feed Thumbnail"/>
                }
            </FeedThumbnailBox>
    );
};