import { RatingStarBox, type RatingStarT } from "@/shared";
import emptyStar from '@/shared/config/assets/rating-empty.png'
import filledStar from '@/shared/config/assets/rating-filled.png'

export const RatingStar = ({ rating, filled, onClick }: RatingStarT) => {
    const count = rating !== undefined ? 5 : 1;

    return (
            <>
                {Array.from({ length: count }, (_, idx) => {
                    const isFilled = rating !== undefined ? idx < rating : filled;

                    return (
                            <RatingStarBox
                                    key={idx}
                                    src={isFilled ? filledStar : emptyStar}
                                    alt={isFilled ? "filled star" : "empty star"}
                                    onClick={onClick}
                            />
                    );
                })}
            </>
    );
};