import {useCategoriesQuery} from "@/entities";
import {AsyncBoundary, CategoryDropdownBox, CategoryOptionBox, type CategorySelectorDropdownT, Portal} from "@/shared";
import type {AxiosError} from "axios";

export const CategoryDropdown = ({isOpen, onCategorySelect, style}: CategorySelectorDropdownT) => {
    if (!style) return null;

    const {data, status, error} = useCategoriesQuery();

    return (
            <Portal>
                <CategoryDropdownBox style={style} isOpen={isOpen}>
                    <AsyncBoundary
                            data={data}
                            status={status}
                            errorCode={(error as AxiosError)?.response?.status}
                    >
                        {(categories) =>
                                categories.map(({id, categoryName}) =>
                                        <CategoryOptionBox
                                                key={id}
                                                onClick={() => onCategorySelect(categoryName)}
                                        >
                                            {categoryName}
                                        </CategoryOptionBox>
                                )}
                    </AsyncBoundary>
                </CategoryDropdownBox>
            </Portal>
    );
};