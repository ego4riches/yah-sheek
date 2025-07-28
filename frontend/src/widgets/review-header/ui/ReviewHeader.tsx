import {Categories} from "@/shared";
import {ReviewHeaderTitle, ReviewHeaderWrapper} from "@/widgets/review-header/config/styled.ts";

export type ReviewHeaderP = {
    title: string;
}
export const ReviewHeader = ({title}: ReviewHeaderP) => {

    return (
            <ReviewHeaderWrapper>
                <ReviewHeaderTitle>{title}</ReviewHeaderTitle>
                <Categories/>
            </ReviewHeaderWrapper>
    );
};