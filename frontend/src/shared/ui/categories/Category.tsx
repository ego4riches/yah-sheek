import {CategoryBox, type CategoryT} from "@/shared";

export const Category = ({label}: CategoryT) => {
    return (
            <CategoryBox>
                {label}
            </CategoryBox>
    );
};