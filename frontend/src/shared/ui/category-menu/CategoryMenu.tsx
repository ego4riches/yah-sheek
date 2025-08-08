import {CategoryMenuBox, CategoryMenuItem, reviewCategories, useCategoryMenuStore} from "@/shared";

export const CategoryMenu = () => {
    const {selectedCategory, setSelectedCategory} = useCategoryMenuStore();

    return (
            <CategoryMenuBox>
                {reviewCategories.map(({key, label}) =>
                        <CategoryMenuItem
                                key={key}
                                label={label}
                                isSelected={selectedCategory === key}
                                onClick={() => setSelectedCategory(key)}
                        />
                )}
            </CategoryMenuBox>
    );
};