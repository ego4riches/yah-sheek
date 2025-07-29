import {Categories, Search, SortOptions} from "@/shared";
import {ReviewHeaderControlBox, ReviewHeaderTitle, ReviewHeaderWrapper} from "@/widgets/review-header/config/styled.ts";

export type ReviewHeaderP = {
    title: string;
}
export const ReviewHeader = ({title}: ReviewHeaderP) => {

    return (
            <ReviewHeaderWrapper>
                <ReviewHeaderTitle>{title}</ReviewHeaderTitle>
                <ReviewHeaderControlBox>
                    <SortOptions/>
                    <Categories/>
                    <Search/>
                </ReviewHeaderControlBox>
            </ReviewHeaderWrapper>
    );
};