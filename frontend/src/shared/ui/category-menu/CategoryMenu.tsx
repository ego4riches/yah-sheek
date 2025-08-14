import {useCategoriesQuery} from "@/entities";
import {AsyncBoundary, CategoryMenuBox, CategoryMenuItem, defaultCategory, useCategoryMenuStore} from "@/shared";
import type {AxiosError} from "axios";

export const CategoryMenu = () => {
    const {data, status, error} = useCategoriesQuery();
    const {selectedCategory, setSelectedCategory} = useCategoryMenuStore();

    return (
            <CategoryMenuBox>
                <AsyncBoundary
                        data={data}
                        status={status}
                        errorCode={(error as AxiosError)?.response?.status}
                >
                    {(categories) =>
                            [defaultCategory, ...categories].map(({id, categoryKey, categoryName}) =>
                                    <CategoryMenuItem
                                            key={id}
                                            label={categoryName}
                                            isSelected={selectedCategory === categoryKey}
                                            onClick={() => setSelectedCategory(categoryKey)}
                                    />)}
                </AsyncBoundary>
            </CategoryMenuBox>
    );
};