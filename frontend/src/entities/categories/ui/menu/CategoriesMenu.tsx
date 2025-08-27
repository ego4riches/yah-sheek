import { CategoriesMenuBox, CategoryMenuItem, defaultCategory, useCategoriesMenuStore, useCategoriesQuery } from "@/entities";
import { AsyncBoundary, } from "@/shared";
import type { AxiosError } from "axios";

export const CategoriesMenu = () => {
    const { data, status, error } = useCategoriesQuery();
    const { selectedCategoryId, setSelectedCategoryId } = useCategoriesMenuStore();

    return (
            <CategoriesMenuBox>
                <AsyncBoundary
                        data={data}
                        status={status}
                        errorCode={(error as AxiosError)?.response?.status}
                >
                    {(categories) =>
                            [defaultCategory, ...categories].map(({ id, categoryName }) =>
                                    <CategoryMenuItem
                                            key={id}
                                            label={categoryName}
                                            isSelected={selectedCategoryId === id}
                                            onClick={() => setSelectedCategoryId(id)}
                                    />)}
                </AsyncBoundary>
            </CategoriesMenuBox>
    );
};