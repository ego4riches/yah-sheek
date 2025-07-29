import {Categories, Search, SortOptions} from "@/shared";
import {ReviewHeaderControlBox, type ReviewHeaderT, ReviewHeaderTitle, ReviewHeaderWrapper} from "@/widgets";


export const ReviewHeader = ({title}: ReviewHeaderT) => {
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