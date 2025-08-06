import {FeedThumbnailBox} from "@/shared";

export const FeedThumbnail = () => {

    return (
            <FeedThumbnailBox>
                <img
                        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Feed Thumbnail"
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </FeedThumbnailBox>
    );
};