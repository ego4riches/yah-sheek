import { CategoriesMenu } from "@/entities";
import { Search, SortOptions } from "@/shared";
import { ReviewComposer, ReviewHeaderControlBox, type ReviewHeaderT, ReviewHeaderTitle, ReviewHeaderWrapper } from "@/widgets";

export const ReviewHeader = ({ title }: ReviewHeaderT) => {
    return (
            <ReviewHeaderWrapper>
                <ReviewHeaderTitle>{title}</ReviewHeaderTitle>
                <ReviewComposer/>
                <CategoriesMenu/>
                <ReviewHeaderControlBox>
                    <SortOptions/>
                    <Search/>
                </ReviewHeaderControlBox>
            </ReviewHeaderWrapper>
    );
};