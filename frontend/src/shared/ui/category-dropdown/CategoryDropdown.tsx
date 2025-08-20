import {useCategoriesQuery} from "@/entities";
import {AsyncBoundary, CategoryDropdownBox, CategoryOptionBox, type CategorySelectorDropdownT, Portal} from "@/shared";
import type {AxiosError} from "axios";

export const CategoryDropdown = ({onCategorySelect, isOpen, style}: CategorySelectorDropdownT) => {
    const {data, status, error} = useCategoriesQuery();

    return (
            <Portal>
                <CategoryDropdownBox style={style || {display: 'none'}} isOpen={isOpen}>
                    <AsyncBoundary
                            data={data}
                            status={status}
                            errorCode={(error as AxiosError)?.response?.status}
                    >
                        {(categories) =>
                                categories.map(({id, categoryKey, categoryName}) =>
                                        <CategoryOptionBox
                                                key={id}
                                                onClick={() => onCategorySelect(id, categoryKey, categoryName)}
                                        >
                                            {categoryName}
                                        </CategoryOptionBox>
                                )}
                    </AsyncBoundary>
                </CategoryDropdownBox>
            </Portal>
    );
};