import { RatingStarBox } from "@/shared";
import emptyStar from '@/shared/config/assets/rating-empty.png'
import filledStar from '@/shared/config/assets/rating-filled.png'

export const RatingStar = (rating: number) => {
    return Array.from({ length: 5 }, (_, idx) => {
        const isFilled = idx < rating;

        return (
                <RatingStarBox
                        key={idx}
                        src={isFilled ? filledStar : emptyStar}
                        alt={isFilled ? 'filled star' : 'empty star'}
                />
        );
    });
};