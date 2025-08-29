import { type FeedDetailInfoT, FeedDetailInfoWrapper, formatDate, RatingStar } from "@/shared";

export const FeedDetailInfo = ({ review }: FeedDetailInfoT) => {
    const { nickname, rating, createdAt, viewsCount, likesCount } = review;

    return (
            <FeedDetailInfoWrapper>
                <div>
                    <span>{nickname}</span>
                    <span>{RatingStar(rating)}</span>
                </div>
                <div>
                    <span>{formatDate(createdAt)}</span>
                    <span>조회 {viewsCount}</span>
                    <span>좋아요 {likesCount}</span>
                </div>
            </FeedDetailInfoWrapper>
    );
};