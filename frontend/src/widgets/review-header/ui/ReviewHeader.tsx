import { CategoriesMenu } from "@/entities";
import { Search, SortOptions } from "@/shared";
import { ReviewComposer, ReviewHeaderControlBox, type ReviewHeaderT, ReviewHeaderTitle, ReviewHeaderWrapper } from "@/widgets";

export const ReviewHeader = ({ teamKey, title }: ReviewHeaderT) => {
    return (
            <ReviewHeaderWrapper teamKey={teamKey}>
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