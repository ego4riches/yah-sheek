import { type FeedDetailInfoT, FeedDetailInfoWrapper, formatDate, RatingSelector, RatingStar } from "@/shared";

export const FeedDetailInfo = ({ review, isEdit }: FeedDetailInfoT) => {
    const { nickname, rating, createdAt, viewsCount, likesCount } = review;

    return (
            <FeedDetailInfoWrapper>
                <div>
                    <span>{nickname}</span>
                    {isEdit
                            ? <RatingSelector value={rating}/>
                            : <span>{RatingStar({ rating })}</span>}
                </div>
                <div>
                    <span>{formatDate(createdAt)}</span>
                    <span>조회 {viewsCount}</span>
                    <span>좋아요 {likesCount}</span>
                </div>
            </FeedDetailInfoWrapper>
    );
};