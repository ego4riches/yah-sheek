import {ReviewFilterBarWrapper} from "@/widgets/review-filter-bar/config/styled.ts";
import {Search, SortOptions} from "@/shared";

export const ReviewFilterBar = () => {

    return (
            <ReviewFilterBarWrapper>
                <Search/>
                <SortOptions/>
            </ReviewFilterBarWrapper>
    );
};