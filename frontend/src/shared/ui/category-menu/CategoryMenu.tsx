import {CategoryMenuBox, CategoryMenuItem, reviewCategories} from "@/shared";

export const CategoryMenu = () => {
    return (
            <CategoryMenuBox>
                {reviewCategories.map(({key, label}) =>
                        <CategoryMenuItem key={key} label={label}/>
                )}
            </CategoryMenuBox>
    );
};