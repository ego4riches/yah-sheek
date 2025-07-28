import {CategoryBox} from "@/shared";

export type CategoryP = {
    label: string;
}

export const Category = ({label}: CategoryP) => {

    return (
            <CategoryBox>
                {label}
            </CategoryBox>
    );
};