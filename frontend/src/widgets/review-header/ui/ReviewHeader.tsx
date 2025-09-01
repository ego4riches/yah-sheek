import { CategoriesMenu } from "@/entities";
import { AddReview } from "@/features";
import { Search, SortOptions } from "@/shared";
import { ReviewHeaderControlBox, type ReviewHeaderT, ReviewHeaderTitle, ReviewHeaderWrapper } from "@/widgets";

export const ReviewHeader = ({ teamKey, title }: ReviewHeaderT) => {
    return (
            <ReviewHeaderWrapper teamKey={teamKey}>
                <ReviewHeaderTitle>{title}</ReviewHeaderTitle>
                <AddReview/>
                <CategoriesMenu/>
                <ReviewHeaderControlBox>
                    <SortOptions/>
                    <Search/>
                </ReviewHeaderControlBox>
            </ReviewHeaderWrapper>
    );
};