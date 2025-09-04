import { MAX_RATING, type RatingSelectorT, RatingSelectorWrapper, RatingStar, useRatingSelectorStore } from "@/shared";
import { useEffect } from "react";

export const RatingSelector = ({ value }: RatingSelectorT) => {
    const { rating, setRating } = useRatingSelectorStore();

    useEffect(() => {
        if (value) setRating(value);
    }, [value, setRating]);

    return (
            <RatingSelectorWrapper>
                {Array.from({ length: MAX_RATING }, (_, i) => {
                    const starValue = i + 1;
                    const isFilled = starValue <= rating;

                    return (
                            <RatingStar
                                    key={starValue}
                                    filled={isFilled}
                                    onClick={() => setRating(starValue)}
                            />
                    );
                })}
            </RatingSelectorWrapper>
    );
};