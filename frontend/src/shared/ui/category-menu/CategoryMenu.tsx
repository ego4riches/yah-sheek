import {CategoryMenuBox, CategoryMenuItem, REVIEW_CATEGORIES} from "@/shared";

export const CategoryMenu = () => {
    return (
            <CategoryMenuBox>
                {REVIEW_CATEGORIES.map(({key, label}) =>
                        <CategoryMenuItem key={key} label={label}/>
                )}
            </CategoryMenuBox>
    );
};