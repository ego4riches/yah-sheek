import {MAX_RATING, RatingSelectorWrapper, Star, useRatingSelectorStore} from "@/shared";


export const RatingSelector = () => {
    const {rating, setRating} = useRatingSelectorStore();

    const stars = Array.from({length: MAX_RATING}, (_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= rating;

        return (
                <Star
                        key={starValue}
                        filled={isFilled}
                        onClick={() => setRating(starValue)}
                />
        );
    });

    return (
            <RatingSelectorWrapper>
                {stars}
            </RatingSelectorWrapper>
    )
};