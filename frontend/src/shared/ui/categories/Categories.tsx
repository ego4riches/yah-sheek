import {CategoriesBox, Category, REVIEW_CATEGORIES} from "@/shared";

export const Categories = () => {
    return (
            <CategoriesBox>
                {REVIEW_CATEGORIES.map(({key, label}) =>
                        <Category key={key} label={label}/>
                )}
            </CategoriesBox>
    );
};